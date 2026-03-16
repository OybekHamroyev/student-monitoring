import { useDispatch, useSelector } from 'react-redux'
import { AlertCircle, AlertTriangle, CheckCircle2, Info } from 'lucide-react'
import { RootState } from '@/store'
import { Toast, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from '@/components/ui/toast'
import { removeNotification } from '@/store/slices/notifications'

const toastStyles = {
  success: {
    icon: CheckCircle2,
    className: 'border-emerald-200 bg-emerald-50 text-emerald-950',
    descriptionClassName: 'text-emerald-900/80',
    iconClassName: 'text-emerald-600',
  },
  error: {
    icon: AlertCircle,
    className: 'border-rose-200 bg-rose-50 text-rose-950',
    descriptionClassName: 'text-rose-900/80',
    iconClassName: 'text-rose-600',
  },
  warning: {
    icon: AlertTriangle,
    className: 'border-amber-200 bg-amber-50 text-amber-950',
    descriptionClassName: 'text-amber-900/80',
    iconClassName: 'text-amber-600',
  },
  info: {
    icon: Info,
    className: 'border-sky-200 bg-sky-50 text-sky-950',
    descriptionClassName: 'text-sky-900/80',
    iconClassName: 'text-sky-600',
  },
} as const

export function Toaster() {
  const notifications = useSelector((state: RootState) => state.notifications.notifications)
  const dispatch = useDispatch()

  return (
    <ToastProvider>
      {notifications.map((n) => {
        const style = toastStyles[n.type] ?? toastStyles.info
        const Icon = style.icon

        return (
          <Toast
            key={n.id}
            open={true}
            onOpenChange={(open) => {
              if (!open) dispatch(removeNotification(n.id))
            }}
            duration={n.duration ?? 5000}
            className={style.className}
          >
            <div className="flex items-start gap-3">
              <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${style.iconClassName}`} />
              <div className="grid gap-1">
                <ToastTitle>{n.title}</ToastTitle>
                {n.message && (
                  <ToastDescription className={style.descriptionClassName}>
                    {n.message}
                  </ToastDescription>
                )}
              </div>
            </div>
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
