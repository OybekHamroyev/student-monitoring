import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '@/lib/utils';
const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
};
export function LoadingSpinner({ size = 'md', message, className, }) {
    return (_jsxs("div", { className: cn('flex flex-col items-center justify-center gap-3', className), children: [_jsx("div", { className: cn('border-2 border-muted border-t-primary rounded-full animate-spin', sizeClasses[size]) }), message && (_jsx("p", { className: "text-sm text-muted-foreground", children: message }))] }));
}
