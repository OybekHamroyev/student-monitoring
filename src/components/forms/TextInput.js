import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
export const TextInput = forwardRef(({ label, error, helperText, required, className, ...props }, ref) => {
    return (_jsxs("div", { className: "space-y-2", children: [label && (_jsxs("label", { className: "text-sm font-medium text-foreground", children: [label, required && _jsx("span", { className: "text-destructive ml-1", children: "*" })] })), _jsx(Input, { ref: ref, className: cn(error && 'border-destructive', className), ...props }), error ? (_jsx("p", { className: "text-sm text-destructive", children: error })) : helperText ? (_jsx("p", { className: "text-sm text-muted-foreground", children: helperText })) : null] }));
});
TextInput.displayName = 'TextInput';
