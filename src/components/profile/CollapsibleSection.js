import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
export function CollapsibleSection({ title, children, defaultOpen = false, icon, completed = false, }) {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(defaultOpen);
    return (_jsxs(Card, { children: [_jsx(CardHeader, { className: "cursor-pointer transition-colors hover:bg-muted/40", onClick: () => setIsOpen(!isOpen), children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-3", children: [icon && _jsx("div", { className: "text-xl", children: icon }), _jsx(CardTitle, { className: "text-lg", children: title }), completed && (_jsx("span", { className: "ml-auto rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300", children: t('common.complete') }))] }), _jsx(ChevronDown, { className: cn('h-5 w-5 text-muted-foreground transition-transform', isOpen && 'rotate-180') })] }) }), isOpen && _jsx(CardContent, { className: "space-y-4", children: children })] }));
}
