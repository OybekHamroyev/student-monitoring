import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
export const SelectInput = forwardRef(({ label, error, helperText, required, className, options = [], placeholder, ...props }, ref) => {
    return (_jsxs("div", { className: "space-y-2", children: [label && (_jsxs("label", { className: "text-sm font-medium text-foreground", children: [label, required && _jsx("span", { className: "text-destructive ml-1", children: "*" })] })), _jsxs("select", { ref: ref, className: cn('w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary', error && 'border-destructive', className), ...props, children: [placeholder && _jsx("option", { value: "", children: placeholder }), options.map((option) => (_jsx("option", { value: option.value, children: option.label }, option.value)))] }), error ? (_jsx("p", { className: "text-sm text-destructive", children: error })) : helperText ? (_jsx("p", { className: "text-sm text-muted-foreground", children: helperText })) : null] }));
});
SelectInput.displayName = 'SelectInput';
