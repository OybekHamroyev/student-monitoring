import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { AlertCircle } from 'lucide-react'

export default function NotFound() {
  const { t } = useTranslation()

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center">
        <div className="mb-6 flex justify-center">
          <div className="rounded-lg bg-destructive/10 p-4">
            <AlertCircle className="h-12 w-12 text-destructive" />
          </div>
        </div>
        <h1 className="mb-2 text-4xl font-bold text-foreground">404</h1>
        <p className="mb-6 text-xl text-muted-foreground">{t('notFound.title')}</p>
        <p className="mb-8 text-muted-foreground">{t('notFound.description')}</p>
        <Link to="/dashboard">
          <Button>{t('notFound.back')}</Button>
        </Link>
      </div>
    </div>
  )
}
