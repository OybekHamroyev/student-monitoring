import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
export const CheckboxInput = forwardRef(({ label, error, helperText, className, ...props }, ref) => {
    return (_jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Checkbox, { ref: ref, id: props.id, ...props }), label && (_jsx("label", { htmlFor: props.id, className: "text-sm font-medium text-foreground cursor-pointer", children: label }))] }), error ? (_jsx("p", { className: "text-sm text-destructive", children: error })) : helperText ? (_jsx("p", { className: "text-sm text-muted-foreground", children: helperText })) : null] }));
});
CheckboxInput.displayName = 'CheckboxInput';
