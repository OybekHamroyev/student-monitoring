import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store'
import { addNotification, removeNotification } from '@/store/slices/notifications'
import type { Notification } from '@/store/slices/notifications'

export function useNotification() {
  const dispatch = useDispatch<AppDispatch>()

  const notify = (
    title: string,
    message: string,
    type: 'success' | 'error' | 'info' | 'warning' = 'info',
    duration = 5000
  ) => {
    const id = Date.now().toString()
    const notification: Notification = {
      id,
      title,
      message,
      type,
      duration,
    }

    dispatch(addNotification(notification))

    if (duration) {
      setTimeout(() => {
        dispatch(removeNotification(id))
      }, duration)
    }

    return id
  }

  return {
    success: (title: string, message: string) => notify(title, message, 'success'),
    error: (title: string, message: string) => notify(title, message, 'error'),
    info: (title: string, message: string) => notify(title, message, 'info'),
    warning: (title: string, message: string) => notify(title, message, 'warning'),
  }
}
