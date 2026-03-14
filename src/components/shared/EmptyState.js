import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '@/lib/utils';
export function EmptyState({ icon, title, description, action, className, }) {
    return (_jsxs("div", { className: cn('flex flex-col items-center justify-center gap-4 py-12 px-4 text-center', className), children: [icon && (_jsx("div", { className: "text-4xl text-muted-foreground opacity-50", children: icon })), _jsxs("div", { children: [_jsx("h3", { className: "text-lg font-medium text-foreground", children: title }), description && (_jsx("p", { className: "text-sm text-muted-foreground mt-1", children: description }))] }), action && _jsx("div", { className: "mt-4", children: action })] }));
}
