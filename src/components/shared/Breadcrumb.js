import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
export function Breadcrumb({ items, className }) {
    return (_jsx("nav", { className: cn('flex items-center gap-1 text-sm', className), "aria-label": "Breadcrumb", children: items.map((item, index) => (_jsxs("div", { className: "flex items-center gap-1", children: [index > 0 && (_jsx(ChevronRight, { className: "h-4 w-4 text-muted-foreground" })), item.href ? (_jsx(Link, { to: item.href, className: "text-primary hover:underline", children: item.label })) : (_jsx("span", { className: "text-foreground font-medium", children: item.label }))] }, index))) }));
}
