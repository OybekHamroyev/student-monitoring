import { ReactNode, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ChevronDown } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { cn } from '@/lib/utils'

interface CollapsibleSectionProps {
  title: string
  children: ReactNode
  defaultOpen?: boolean
  icon?: ReactNode
  completed?: boolean
}

export function CollapsibleSection({
  title,
  children,
  defaultOpen = false,
  icon,
  completed = false,
}: CollapsibleSectionProps) {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <Card>
      <CardHeader
        className="cursor-pointer transition-colors hover:bg-muted/40"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {icon && <div className="text-xl">{icon}</div>}
            <CardTitle className="text-lg">{title}</CardTitle>
            {completed && (
              <span className="ml-auto rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
                {t('common.complete')}
              </span>
            )}
          </div>
          <ChevronDown
            className={cn(
              'h-5 w-5 text-muted-foreground transition-transform',
              isOpen && 'rotate-180'
            )}
          />
        </div>
      </CardHeader>
      {isOpen && <CardContent className="space-y-4">{children}</CardContent>}
    </Card>
  )
}
