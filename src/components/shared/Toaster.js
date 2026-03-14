import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useDispatch, useSelector } from 'react-redux';
import { Toast, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from '@/components/ui/toast';
import { removeNotification } from '@/store/slices/notifications';
export function Toaster() {
    const notifications = useSelector((state) => state.notifications.notifications);
    const dispatch = useDispatch();
    return (_jsxs(ToastProvider, { children: [notifications.map((n) => (_jsx(Toast, { open: true, onOpenChange: (open) => {
                    if (!open)
                        dispatch(removeNotification(n.id));
                }, duration: n.duration ?? 5000, children: _jsxs("div", { className: "grid gap-1", children: [_jsx(ToastTitle, { children: n.title }), n.message && _jsx(ToastDescription, { children: n.message })] }) }, n.id))), _jsx(ToastViewport, {})] }));
}
