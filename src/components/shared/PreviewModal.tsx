import { ReactNode, useEffect } from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface PreviewModalProps {
  open: boolean
  title: string
  subtitle?: string
  onClose: () => void
  children: ReactNode
  actions?: ReactNode
}

export default function PreviewModal({
  open,
  title,
  subtitle,
  onClose,
  children,
  actions,
}: PreviewModalProps) {
  useEffect(() => {
    if (!open) {
      return
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [open, onClose])

  if (!open) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/45 p-4 backdrop-blur-sm">
      <div className="panel-card max-h-[90vh] w-full max-w-2xl overflow-hidden">
        <div className="flex items-start justify-between border-b border-border/70 px-6 py-5">
          <div>
            <h3 className="text-xl font-semibold tracking-[-0.03em]">{title}</h3>
            {subtitle ? <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p> : null}
          </div>
          <Button variant="ghost" size="icon-sm" className="rounded-xl" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="max-h-[calc(90vh-150px)] overflow-auto px-6 py-5">
          {children}
        </div>

        {actions ? (
          <div className="flex justify-end gap-3 border-t border-border/70 px-6 py-4">
            {actions}
          </div>
        ) : null}
      </div>
    </div>
  )
}
