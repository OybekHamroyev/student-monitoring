import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';
export default function NotFound() {
    const { t } = useTranslation();
    return (_jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "mb-6 flex justify-center", children: _jsx("div", { className: "rounded-lg bg-destructive/10 p-4", children: _jsx(AlertCircle, { className: "h-12 w-12 text-destructive" }) }) }), _jsx("h1", { className: "mb-2 text-4xl font-bold text-foreground", children: "404" }), _jsx("p", { className: "mb-6 text-xl text-muted-foreground", children: t('notFound.title') }), _jsx("p", { className: "mb-8 text-muted-foreground", children: t('notFound.description') }), _jsx(Link, { to: "/dashboard", children: _jsx(Button, { children: t('notFound.back') }) })] }) }));
}
