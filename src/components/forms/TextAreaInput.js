import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
export const TextAreaInput = forwardRef(({ label, error, helperText, required, className, maxLength, showCharCount, value = '', ...props }, ref) => {
    return (_jsxs("div", { className: "space-y-2", children: [label && (_jsxs("label", { className: "text-sm font-medium text-foreground", children: [label, required && _jsx("span", { className: "text-destructive ml-1", children: "*" })] })), _jsx("textarea", { ref: ref, maxLength: maxLength, value: value, className: cn('w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none', error && 'border-destructive', className), ...props }), _jsxs("div", { className: "flex justify-between items-start", children: [_jsx("div", { children: error ? (_jsx("p", { className: "text-sm text-destructive", children: error })) : helperText ? (_jsx("p", { className: "text-sm text-muted-foreground", children: helperText })) : null }), showCharCount && maxLength && (_jsxs("p", { className: "text-xs text-muted-foreground", children: [String(value).length, " / ", maxLength] }))] })] }));
});
TextAreaInput.displayName = 'TextAreaInput';
