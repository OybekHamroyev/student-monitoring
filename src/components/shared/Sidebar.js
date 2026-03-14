import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { toggleSidebar, setMobileMenuOpen } from '@/store/slices/ui';
import { MENU_ITEMS } from '@/constants';
import { ChevronDown, GraduationCap, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
export default function Sidebar() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const location = useLocation();
    const { sidebarCollapsed, mobileMenuOpen } = useSelector((state) => state.ui);
    const { user } = useSelector((state) => state.auth);
    const [expandedItems, setExpandedItems] = useState({});
    const visibleItems = MENU_ITEMS.filter((item) => user?.role && item.roles.includes(user.role));
    const toggleExpand = (labelKey) => {
        setExpandedItems((prev) => ({ ...prev, [labelKey]: !prev[labelKey] }));
    };
    const isActive = (href) => location.pathname === href;
    const isChildActive = (children) => children?.some((child) => location.pathname === child.href);
    const sidebarContent = (_jsx("nav", { className: "flex-1 space-y-2 px-3 pb-4", children: visibleItems.map((item) => {
            const Icon = item.icon;
            const hasChildren = item.children && item.children.length > 0;
            const isExpanded = expandedItems[item.labelKey] ?? isChildActive(item.children);
            const showChildren = hasChildren && isExpanded;
            if (hasChildren) {
                return (_jsxs("div", { children: [_jsxs("button", { type: "button", onClick: () => toggleExpand(item.labelKey), className: cn('group flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium transition-all', isChildActive(item.children)
                                ? 'bg-primary/10 text-primary'
                                : 'text-muted-foreground hover:bg-muted hover:text-foreground'), children: [_jsx("span", { className: cn('flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1 transition-colors', isChildActive(item.children)
                                        ? 'bg-primary/14 ring-primary/10'
                                        : 'bg-background/70 ring-border/60 group-hover:bg-background'), children: _jsx(Icon, { className: "h-4 w-4" }) }), !sidebarCollapsed && (_jsxs(_Fragment, { children: [_jsx("span", { className: "flex-1 truncate text-left", children: t(item.labelKey) }), _jsx(ChevronDown, { className: cn('h-4 w-4 transition-transform', showChildren && 'rotate-180') })] }))] }), !sidebarCollapsed && showChildren && (_jsx("div", { className: "ml-4 mt-1 space-y-1 border-l-2 border-border/60 pl-4", children: item.children.map((child) => (_jsx(Link, { to: child.href, className: cn('block rounded-xl px-3 py-2 text-sm transition-colors', isActive(child.href)
                                    ? 'bg-primary text-primary-foreground font-medium'
                                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'), children: t(child.labelKey) }, child.href))) }))] }, item.labelKey));
            }
            if (!item.href) {
                return null;
            }
            const active = isActive(item.href);
            return (_jsxs(Link, { to: item.href, onClick: () => dispatch(setMobileMenuOpen(false)), className: cn('group flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium transition-all', active
                    ? 'bg-primary text-primary-foreground shadow-[0_16px_30px_-20px_hsl(var(--primary))]'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'), title: sidebarCollapsed ? t(item.labelKey) : undefined, children: [_jsx("span", { className: cn('flex h-10 w-10 items-center justify-center rounded-xl ring-1 transition-colors', active
                            ? 'bg-primary-foreground/14 ring-primary-foreground/10'
                            : 'bg-background/70 ring-border/60 group-hover:bg-background'), children: _jsx(Icon, { className: "h-4 w-4" }) }), !sidebarCollapsed && _jsx("span", { className: "truncate", children: t(item.labelKey) })] }, item.href));
        }) }));
    return (_jsxs(_Fragment, { children: [_jsxs("aside", { className: cn('sticky top-0 z-40 hidden h-screen flex-col border-r border-[hsl(var(--sidebar-border))] bg-[hsl(var(--sidebar))]/95 text-[hsl(var(--sidebar-foreground))] backdrop-blur transition-all duration-300 lg:flex', sidebarCollapsed ? 'w-20' : 'w-64'), children: [_jsxs("div", { className: "flex h-20 items-center justify-between border-b border-[hsl(var(--sidebar-border))] px-4", children: [!sidebarCollapsed && (_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/12 text-primary", children: _jsx(GraduationCap, { className: "h-5 w-5" }) }), _jsxs("div", { children: [_jsx("h1", { className: "text-base font-semibold tracking-[-0.02em] text-foreground", children: t('app.title') }), _jsx("p", { className: "text-xs uppercase tracking-[0.16em] text-muted-foreground", children: t('app.subtitle') })] })] })), _jsx("button", { onClick: () => dispatch(toggleSidebar()), className: "rounded-xl p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground", children: _jsx(Menu, { className: "h-5 w-5" }) })] }), _jsx("div", { className: "px-4 pt-5", children: !sidebarCollapsed && (_jsx("p", { className: "mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground", children: t('app.mainMenu') })) }), sidebarContent] }), mobileMenuOpen && (_jsx("div", { className: "fixed inset-0 z-50 bg-black/50 lg:hidden", onClick: () => dispatch(setMobileMenuOpen(false)), "aria-hidden": true })), _jsxs("aside", { className: cn('fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-[hsl(var(--sidebar-border))] bg-[hsl(var(--sidebar))] text-[hsl(var(--sidebar-foreground))] transition-transform duration-300 lg:hidden', mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'), children: [_jsxs("div", { className: "flex h-20 items-center justify-between border-b border-[hsl(var(--sidebar-border))] px-4", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/12 text-primary", children: _jsx(GraduationCap, { className: "h-5 w-5" }) }), _jsxs("div", { children: [_jsx("h1", { className: "text-base font-semibold text-foreground", children: t('app.title') }), _jsx("p", { className: "text-xs uppercase tracking-[0.16em] text-muted-foreground", children: t('app.subtitle') })] })] }), _jsx(Button, { variant: "ghost", size: "icon-sm", onClick: () => dispatch(setMobileMenuOpen(false)), className: "rounded-xl", children: _jsx(X, { className: "h-5 w-5" }) })] }), _jsx("div", { className: "px-4 pt-5", children: _jsx("p", { className: "mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground", children: t('app.mainMenu') }) }), sidebarContent] })] }));
}
