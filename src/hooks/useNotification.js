import { useDispatch } from 'react-redux';
import { addNotification, removeNotification } from '@/store/slices/notifications';
export function useNotification() {
    const dispatch = useDispatch();
    const notify = (title, message, type = 'info', duration = 5000) => {
        const id = Date.now().toString();
        const notification = {
            id,
            title,
            message,
            type,
            duration,
        };
        dispatch(addNotification(notification));
        if (duration) {
            setTimeout(() => {
                dispatch(removeNotification(id));
            }, duration);
        }
        return id;
    };
    return {
        success: (title, message) => notify(title, message, 'success'),
        error: (title, message) => notify(title, message, 'error'),
        info: (title, message) => notify(title, message, 'info'),
        warning: (title, message) => notify(title, message, 'warning'),
    };
}
