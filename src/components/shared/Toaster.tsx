import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store'
import { Toast, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from '@/components/ui/toast'
import { removeNotification } from '@/store/slices/notifications'

export function Toaster() {
  const notifications = useSelector((state: RootState) => state.notifications.notifications)
  const dispatch = useDispatch()

  return (
    <ToastProvider>
      {notifications.map((n) => (
        <Toast
          key={n.id}
          open={true}
          onOpenChange={(open) => {
            if (!open) dispatch(removeNotification(n.id))
          }}
          duration={n.duration ?? 5000}
        >
          <div className="grid gap-1">
            <ToastTitle>{n.title}</ToastTitle>
            {n.message && <ToastDescription>{n.message}</ToastDescription>}
          </div>
        </Toast>
      ))}
      <ToastViewport />
    </ToastProvider>
  )
}
