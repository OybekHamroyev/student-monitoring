import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { setTheme } from '@/store/slices/theme';
import { setLanguage } from '@/store/slices/language';
import { logout } from '@/store/slices/auth';
import { setMobileMenuOpen } from '@/store/slices/ui';
import { Bell, ChevronDown, LogOut, Menu, Moon, Search, ShieldCheck, Sun, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger, } from '@/components/ui/dropdown-menu';
const ROUTE_LABELS = {
    dashboard: 'nav.dashboard',
    groups: 'nav.groups',
    students: 'nav.studentProfiles',
    tutors: 'nav.tutorManagement',
    search: 'nav.searchFilter',
    settings: 'nav.deanSettings',
    audit: 'nav.auditLogs',
    'components-demo': 'nav.uiComponents',
};
function getBreadcrumbs(pathname, t) {
    const segments = pathname.split('/').filter(Boolean);
    const crumbs = [{ label: t('app.home'), href: '/' }];
    let href = '';
    for (const segment of segments) {
        href += `/${segment}`;
        const labelKey = ROUTE_LABELS[segment];
        const label = labelKey ? t(labelKey) : segment.match(/^\d+$/) ? t('profile.title') : segment;
        crumbs.push({ label, href });
    }
    return crumbs;
}
export default function Header() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const location = useLocation();
    const { user } = useSelector((state) => state.auth);
    const { mode } = useSelector((state) => state.theme);
    const { currentLanguage } = useSelector((state) => state.language);
    const breadcrumbs = getBreadcrumbs(location.pathname, t);
    const handleThemeToggle = () => {
        dispatch(setTheme(mode === 'dark' ? 'light' : 'dark'));
    };
    const handleLanguageChange = (lang) => {
        dispatch(setLanguage(lang));
        i18n.changeLanguage(lang);
    };
    return (_jsxs("header", { className: "sticky top-0 z-30 flex flex-col gap-3 border-b border-border/60 bg-background/85 px-4 py-4 backdrop-blur md:px-6 xl:px-8", children: [_jsxs("div", { className: "flex items-center justify-between gap-4", children: [_jsxs("div", { className: "flex flex-1 items-center gap-4", children: [_jsx(Button, { variant: "ghost", size: "icon-sm", className: "lg:hidden", onClick: () => dispatch(setMobileMenuOpen(true)), children: _jsx(Menu, { className: "h-5 w-5" }) }), _jsx("div", { className: "hidden max-w-[280px] flex-1 md:block", children: _jsxs("div", { className: "relative", children: [_jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), _jsx(Input, { className: "pl-10", placeholder: t('common.search') })] }) })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsxs("div", { className: "hidden items-center gap-2 rounded-2xl border border-border/70 bg-card px-3 py-2 text-sm text-muted-foreground shadow-sm md:flex", children: [_jsx(ShieldCheck, { className: "h-4 w-4 text-[hsl(var(--success))]" }), t('app.safeMode')] }), _jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { asChild: true, children: _jsxs(Button, { variant: "outline", size: "sm", className: "gap-2 rounded-xl", children: [_jsx("span", { className: "hidden sm:inline", children: currentLanguage.toUpperCase() }), _jsx(ChevronDown, { className: "h-4 w-4" })] }) }), _jsxs(DropdownMenuContent, { align: "end", children: [_jsx(DropdownMenuItem, { onClick: () => handleLanguageChange('en'), children: t('languages.en') }), _jsx(DropdownMenuItem, { onClick: () => handleLanguageChange('ru'), children: t('languages.ru') }), _jsx(DropdownMenuItem, { onClick: () => handleLanguageChange('uz'), children: t('languages.uz') })] })] }), _jsx(Button, { variant: "outline", size: "icon-sm", className: "rounded-xl", children: _jsx(Bell, { className: "h-4 w-4" }) }), _jsx(Button, { variant: "outline", size: "icon-sm", onClick: handleThemeToggle, className: "rounded-xl", children: mode === 'dark' ? _jsx(Sun, { className: "h-5 w-5" }) : _jsx(Moon, { className: "h-5 w-5" }) }), _jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { asChild: true, children: _jsxs(Button, { variant: "ghost", className: "gap-2 rounded-xl px-2", children: [_jsx(Avatar, { className: "h-8 w-8", children: _jsx(AvatarFallback, { className: "bg-primary/12 text-sm text-primary", children: user?.name?.charAt(0) ?? 'U' }) }), _jsx("span", { className: "hidden sm:inline", children: user?.name }), _jsx(ChevronDown, { className: "h-4 w-4" })] }) }), _jsxs(DropdownMenuContent, { align: "end", className: "w-56", children: [_jsxs("div", { className: "px-3 py-2", children: [_jsx("p", { className: "text-sm font-medium", children: user?.name }), _jsx("p", { className: "text-xs text-muted-foreground", children: user?.email })] }), _jsx(DropdownMenuSeparator, {}), _jsx(DropdownMenuItem, { asChild: true, children: _jsxs(Link, { to: "/dashboard", children: [_jsx(User, { className: "mr-2 h-4 w-4" }), t('nav.dashboard')] }) }), _jsx(DropdownMenuItem, { asChild: true, children: _jsxs(Link, { to: "/settings", children: [_jsx(ShieldCheck, { className: "mr-2 h-4 w-4" }), t('nav.deanSettings')] }) }), _jsx(DropdownMenuSeparator, {}), _jsxs(DropdownMenuItem, { onClick: () => dispatch(logout()), className: "text-destructive", children: [_jsx(LogOut, { className: "mr-2 h-4 w-4" }), t('common.logout')] })] })] })] })] }), _jsx("div", { className: "flex items-center gap-2 text-sm", children: breadcrumbs.map((crumb, index) => (_jsxs("span", { className: "flex items-center gap-2", children: [index > 0 && _jsx("span", { className: "text-muted-foreground", children: "/" }), index === breadcrumbs.length - 1 ? (_jsx("span", { className: "font-medium", children: crumb.label })) : (_jsx(Link, { to: crumb.href, className: "text-muted-foreground hover:text-foreground", children: crumb.label }))] }, crumb.href))) })] }));
}
