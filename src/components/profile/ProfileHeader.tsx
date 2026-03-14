import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Edit, Download } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { getInitials } from '@/lib/utils'

interface ProfileHeaderProps {
  name: string
  email: string
  hemisId: string
  completion: number
  avatar?: string
}

export function ProfileHeader({
  name,
  email,
  hemisId,
  completion,
  avatar,
}: ProfileHeaderProps) {
  const { t } = useTranslation()

  return (
    <Card className="soft-surface p-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex items-start gap-4">
          <Avatar className="h-16 w-16 ring-4 ring-primary/10">
            {avatar ? <AvatarImage src={avatar} alt={name} /> : null}
            <AvatarFallback className="bg-primary text-primary-foreground">
              {getInitials(name)}
            </AvatarFallback>
          </Avatar>

          <div className="space-y-1">
            <h1 className="text-2xl font-bold tracking-[-0.04em] text-foreground">{name}</h1>
            <p className="text-sm text-muted-foreground">{email}</p>
            <p className="text-sm text-muted-foreground">{t('profile.hemisId')}: {hemisId}</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 lg:items-end">
          <div className="lg:text-right">
            <p className="text-sm text-muted-foreground">{t('profile.completion')}</p>
            <div className="flex items-center gap-2 mt-2">
              <div className="h-2 w-32 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-[hsl(var(--success))] transition-all"
                  style={{ width: `${completion}%` }}
                />
              </div>
              <span className="text-sm font-medium">{completion}%</span>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Edit className="h-4 w-4" />
              {t('common.edit')}
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="h-4 w-4" />
              {t('common.export')}
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}
