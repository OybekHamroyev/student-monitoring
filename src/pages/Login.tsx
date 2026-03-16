import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import type { AxiosError } from 'axios'
import { useTranslation } from 'react-i18next'
import { AppDispatch } from '@/store'
import { setUser } from '@/store/slices/auth'
import AuthLayout from '@/layouts/AuthLayout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useNotification } from '@/hooks/useNotification'
import { demoAccounts } from '@/mocks/demoData'
import { authApi, normalizeUserRole } from '@/services/api'

const AUTH_USER_STORAGE_KEY = 'auth_user'
const REFRESH_TOKEN_STORAGE_KEY = 'refresh_token'

export default function Login() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const toast = useNotification()
  const [username, setUsername] = useState(demoAccounts[0].email)
  const [password, setPassword] = useState(demoAccounts[0].password)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await authApi.login(username, password)
      const loginData = response.data
      const firstName = loginData.data.first_name?.trim()
      const lastName = loginData.data.last_name?.trim()
      const fullName = [firstName, lastName].filter(Boolean).join(' ')
      const user = {
        id: loginData.username || loginData.data.email || username,
        name: fullName || loginData.username || loginData.data.email || username,
        email: loginData.data.email || username,
        role: normalizeUserRole(loginData.data.role),
        avatar: loginData.data.image || undefined,
      }

      dispatch(setUser(user))
      localStorage.setItem(AUTH_USER_STORAGE_KEY, JSON.stringify(user))
      localStorage.setItem('auth_token', loginData.access)
      localStorage.setItem(REFRESH_TOKEN_STORAGE_KEY, loginData.refresh)

      navigate('/dashboard')
    } catch (error) {
      const message =
        (error as AxiosError<{ message?: string }>).response?.data?.message ||
        'Login qilishda xatolik yuz berdi'

      toast.error('Login bajarilmadi', message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthLayout>
      <Card className="soft-surface">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl tracking-[-0.04em]">{t('auth.login')}</CardTitle>
          <CardDescription>{t('auth.description')}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              {t('auth.demoAccounts')}
            </p>
            <div className="flex flex-wrap gap-2">
              {demoAccounts.map((account) => (
                <Button
                  key={account.email}
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setUsername(account.email)
                    setPassword(account.password)
                  }}
                >
                  {t(`auth.accounts.${account.role}`)}
                </Button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="username" className="text-sm font-medium">
                Username
              </label>
              <Input
                id="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                {t('auth.password')}
              </label>
              <Input
                id="password"
                type="password"
                placeholder={t('auth.passwordPlaceholder')}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex justify-end">
              <span className="text-sm text-muted-foreground">{t('app.safeMode')}</span>
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? t('auth.signingIn') : t('auth.login')}
            </Button>
          </form>
        </CardContent>
      </Card>
    </AuthLayout>
  )
}
