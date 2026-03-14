import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '@/lib/utils';
export function PageHeader({ title, description, action, className, }) {
    return (_jsxs("div", { className: cn('flex items-start justify-between', className), children: [_jsxs("div", { children: [_jsx("h1", { className: "text-3xl font-bold text-foreground", children: title }), description && (_jsx("p", { className: "text-muted-foreground mt-2", children: description }))] }), action && _jsx("div", { children: action })] }));
}
