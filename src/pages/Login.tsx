import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { AppDispatch } from '@/store'
import { setUser } from '@/store/slices/auth'
import AuthLayout from '@/layouts/AuthLayout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { demoAccounts } from '@/mocks/demoData'

export default function Login() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const [email, setEmail] = useState(demoAccounts[0].email)
  const [password, setPassword] = useState(demoAccounts[0].password)
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const selectedAccount = demoAccounts.find((account) => account.email === email) ?? demoAccounts[0]
      dispatch(
        setUser({
          id: selectedAccount.email,
          name: selectedAccount.name,
          email,
          role: selectedAccount.role,
        })
      )
      localStorage.setItem('auth_token', 'mock_token_123')

      if (rememberMe) {
        localStorage.setItem('remembered_email', email)
      }

      navigate('/dashboard')
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
                    setEmail(account.email)
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
              <label htmlFor="email" className="text-sm font-medium">
                {t('auth.email')}
              </label>
              <Input
                id="email"
                type="email"
                placeholder={t('auth.emailPlaceholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                />
                <label htmlFor="remember" className="cursor-pointer text-sm">
                  {t('auth.rememberMe')}
                </label>
              </div>
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
