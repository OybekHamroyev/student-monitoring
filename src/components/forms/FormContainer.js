import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
export function FormContainer({ title, description, children, loading, className, }) {
    return (_jsxs(Card, { className: className, children: [title && (_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: title }), description && _jsx(CardDescription, { children: description })] })), _jsx(CardContent, { className: cn(loading && 'opacity-50 pointer-events-none'), children: children })] }));
}
