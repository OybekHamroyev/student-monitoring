import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Controller } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
export function FormField({ control, name, label, placeholder, type = 'text', required = false, error, children, }) {
    return (_jsxs("div", { className: "space-y-2", children: [_jsxs("label", { htmlFor: name, className: "text-sm font-medium", children: [label, required && _jsx("span", { className: "text-destructive ml-1", children: "*" })] }), children ? (children) : (_jsx(Controller, { control: control, name: name, render: ({ field }) => (_jsx(Input, { ...field, id: name, type: type, placeholder: placeholder, className: cn(error && 'border-destructive') })) })), error && _jsx("p", { className: "text-sm text-destructive", children: error })] }));
}
