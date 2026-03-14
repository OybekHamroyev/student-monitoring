import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, } from 'recharts';
import { BookMarked, CircleEllipsis, Filter, Search, ShoppingBag, TrendingUp, Users, Wallet, } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
const monthlySales = [
    { month: 'Feb', previous: 460, current: 530 },
    { month: 'Mar', previous: 500, current: 570 },
    { month: 'Apr', previous: 590, current: 680 },
    { month: 'May', previous: 490, current: 600 },
    { month: 'Jun', previous: 560, current: 640 },
    { month: 'Jul', previous: 610, current: 700 },
    { month: 'Aug', previous: 430, current: 490 },
    { month: 'Sep', previous: 570, current: 650 },
];
const earningTrend = [
    { value: 140 },
    { value: 155 },
    { value: 162 },
    { value: 198 },
    { value: 176 },
    { value: 184 },
    { value: 201 },
    { value: 130 },
    { value: 186 },
];
const orders = [
    { id: 1, product: 'UltraSoft Premium Cooling Memory Foam Pillow Set', customer: 'Mark Johnson', quantity: 2, status: 'pending', price: '$120.00' },
    { id: 2, product: 'Solar powered desk lamp with sleek metallic finish', customer: 'Jane Smith', quantity: 3, status: 'shipped', price: '$1120.00' },
    { id: 3, product: 'Coffee maker with glass and wood finishes', customer: 'Chris Miller', quantity: 1, status: 'delivered', price: '$45.00' },
    { id: 4, product: 'Fully automatic washing machine with top load and front load', customer: 'Lavoursa Serin', quantity: 4, status: 'shipped', price: '$785.00' },
];
const statusClasses = {
    pending: 'bg-[#ff946d]/20 text-[#ef7f5a] dark:bg-[#ff946d]/15 dark:text-[#ffb59c]',
    shipped: 'bg-[#ffb524]/20 text-[#dc9200] dark:bg-[#ffb524]/15 dark:text-[#ffd070]',
    delivered: 'bg-[#25d0b3]/18 text-[#12a58c] dark:bg-[#25d0b3]/14 dark:text-[#73f0dc]',
};
export default function Dashboard() {
    const { t } = useTranslation();
    const stats = [
        {
            title: t('dashboard.stats.productsSold.title'),
            subtitle: t('dashboard.stats.productsSold.subtitle'),
            value: '16',
            icon: ShoppingBag,
            tint: 'bg-violet-100 text-violet-600 dark:bg-violet-500/15 dark:text-violet-300',
        },
        {
            title: t('dashboard.stats.totalSales.title'),
            subtitle: t('dashboard.stats.totalSales.subtitle'),
            value: '$ 5000',
            icon: Wallet,
            tint: 'bg-rose-100 text-rose-500 dark:bg-rose-500/15 dark:text-rose-300',
        },
        {
            title: t('dashboard.stats.monthlySales.title'),
            subtitle: t('dashboard.stats.monthlySales.subtitle'),
            value: '$ 670',
            icon: BookMarked,
            tint: 'bg-amber-100 text-amber-500 dark:bg-amber-500/15 dark:text-amber-300',
        },
        {
            title: t('dashboard.stats.totalCustomers.title'),
            subtitle: t('dashboard.stats.totalCustomers.subtitle'),
            value: '5',
            icon: Users,
            tint: 'bg-cyan-100 text-cyan-500 dark:bg-cyan-500/15 dark:text-cyan-300',
        },
    ];
    return (_jsxs("div", { className: "space-y-6", children: [_jsx("section", { className: "grid gap-4 md:grid-cols-2 xl:grid-cols-4", children: stats.map((stat) => {
                    const Icon = stat.icon;
                    return (_jsxs(Card, { className: "soft-surface gap-4", children: [_jsxs(CardHeader, { className: "flex flex-row items-start justify-between space-y-0 pb-0", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(CardTitle, { className: "text-[1.05rem]", children: stat.title }), _jsx("p", { className: "text-sm text-muted-foreground", children: stat.subtitle })] }), _jsx("div", { className: `flex h-12 w-12 items-center justify-center rounded-full ${stat.tint}`, children: _jsx(Icon, { className: "h-5 w-5" }) })] }), _jsx(CardContent, { className: "pt-0", children: _jsx("div", { className: "text-[2rem] font-semibold tracking-[-0.04em] text-foreground", children: stat.value }) })] }, stat.title));
                }) }), _jsxs("section", { className: "grid gap-6 xl:grid-cols-[0.9fr_1.85fr]", children: [_jsxs("div", { className: "space-y-6", children: [_jsx(Card, { className: "min-h-[120px] border-transparent bg-[linear-gradient(145deg,#dfe5f8,#cfd7ee)] text-slate-900 dark:bg-[linear-gradient(145deg,#252e4d,#1f2741)] dark:text-slate-100", children: _jsx(CardContent, { className: "flex h-full items-center px-6", children: _jsxs("div", { className: "space-y-1", children: [_jsx("p", { className: "text-3xl font-semibold tracking-[-0.04em]", children: t('dashboard.welcomeBack') }), _jsx("p", { className: "text-3xl font-semibold tracking-[-0.04em]", children: t('dashboard.admin') })] }) }) }), _jsxs(Card, { className: "overflow-hidden", children: [_jsxs(CardHeader, { className: "flex flex-row items-start justify-between space-y-0 pb-0", children: [_jsxs("div", { className: "space-y-3", children: [_jsx(CardTitle, { className: "text-[1.85rem] tracking-[-0.05em]", children: "$670" }), _jsxs("div", { children: [_jsx("p", { className: "text-[1.05rem] font-semibold", children: t('dashboard.monthlyEarnings') }), _jsxs("div", { className: "mt-3 flex items-center gap-2 text-sm text-[hsl(var(--success))]", children: [_jsx("span", { className: "inline-flex h-6 w-6 items-center justify-center rounded-full bg-[hsl(var(--success))]/12", children: _jsx(TrendingUp, { className: "h-3.5 w-3.5" }) }), t('dashboard.lastMonthGrowth', { value: '14.68%' })] })] })] }), _jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100 text-cyan-500 dark:bg-cyan-500/15 dark:text-cyan-300", children: _jsx(Wallet, { className: "h-5 w-5" }) })] }), _jsx(CardContent, { className: "px-0 pt-6", children: _jsx("div", { className: "h-28 w-full", children: _jsx(ResponsiveContainer, { width: "100%", height: "100%", children: _jsxs(LineChart, { data: earningTrend, margin: { top: 4, right: 0, left: 0, bottom: 0 }, children: [_jsx(Tooltip, { cursor: false, contentStyle: { borderRadius: 16, border: '1px solid hsl(var(--border))', background: 'hsl(var(--card))' } }), _jsx(Line, { type: "monotone", dataKey: "value", stroke: "hsl(var(--primary))", strokeWidth: 3, dot: false })] }) }) }) })] })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { className: "flex flex-row items-center justify-between pb-2", children: [_jsx(CardTitle, { className: "text-[1.9rem] tracking-[-0.05em]", children: t('dashboard.salesOverview') }), _jsx(Button, { variant: "outline", className: "rounded-2xl px-4", children: t('dashboard.lastMonths', { count: 8 }) })] }), _jsxs(CardContent, { className: "pt-4", children: [_jsx("div", { className: "h-[340px] w-full", children: _jsx(ResponsiveContainer, { width: "100%", height: "100%", children: _jsxs(BarChart, { data: monthlySales, barCategoryGap: 28, children: [_jsx(CartesianGrid, { vertical: false, strokeDasharray: "4 4", stroke: "hsl(var(--border))" }), _jsx(XAxis, { dataKey: "month", tickLine: false, axisLine: false, tick: { fill: 'hsl(var(--muted-foreground))', fontSize: 14 } }), _jsx(YAxis, { tickLine: false, axisLine: false, tick: { fill: 'hsl(var(--muted-foreground))', fontSize: 14 } }), _jsx(Tooltip, { cursor: { fill: 'hsl(var(--muted) / 0.35)' }, contentStyle: { borderRadius: 18, border: '1px solid hsl(var(--border))', background: 'hsl(var(--card))' } }), _jsx(Bar, { dataKey: "previous", fill: "hsl(var(--primary))", radius: [10, 10, 0, 0], maxBarSize: 18 }), _jsx(Bar, { dataKey: "current", fill: "hsl(var(--info))", radius: [10, 10, 0, 0], maxBarSize: 18 })] }) }) }), _jsxs("div", { className: "mt-4 flex flex-wrap items-center justify-center gap-6 text-sm", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "h-3 w-3 rounded-full bg-primary" }), t('dashboard.previousMonth')] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "h-3 w-3 rounded-full bg-[hsl(var(--info))]" }), t('dashboard.currentMonth')] })] })] })] })] }), _jsx("section", { children: _jsxs(Card, { children: [_jsxs(CardHeader, { className: "flex flex-col gap-4 pb-2 lg:flex-row lg:items-center lg:justify-between", children: [_jsx(CardTitle, { className: "text-[1.7rem] tracking-[-0.04em]", children: t('dashboard.totalOrders') }), _jsxs("div", { className: "flex w-full flex-col gap-3 sm:w-auto sm:flex-row", children: [_jsxs(Button, { variant: "secondary", className: "rounded-2xl bg-secondary px-5 text-primary hover:bg-secondary/90", children: [_jsx(Filter, { className: "h-4 w-4" }), t('common.filter')] }), _jsxs("div", { className: "relative min-w-[280px]", children: [_jsx(Search, { className: "pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), _jsx(Input, { className: "pl-11", placeholder: t('dashboard.searchOrders') })] })] })] }), _jsxs(CardContent, { className: "pt-4", children: [_jsx("div", { className: "overflow-hidden rounded-[24px] border border-border/70", children: _jsx("div", { className: "overflow-x-auto", children: _jsxs("table", { className: "w-full min-w-[760px] text-sm", children: [_jsx("thead", { className: "bg-muted/80 text-foreground", children: _jsxs("tr", { children: [_jsx("th", { className: "px-5 py-4 text-left font-semibold", children: t('dashboard.table.id') }), _jsx("th", { className: "px-5 py-4 text-left font-semibold", children: t('dashboard.table.product') }), _jsx("th", { className: "px-5 py-4 text-left font-semibold", children: t('dashboard.table.customer') }), _jsx("th", { className: "px-5 py-4 text-left font-semibold", children: t('dashboard.table.quantity') }), _jsx("th", { className: "px-5 py-4 text-left font-semibold", children: t('dashboard.table.status') }), _jsx("th", { className: "px-5 py-4 text-left font-semibold", children: t('dashboard.table.price') }), _jsx("th", { className: "px-5 py-4 text-left font-semibold", children: t('dashboard.table.action') })] }) }), _jsx("tbody", { children: orders.map((order) => (_jsxs("tr", { className: "border-t border-border/70 bg-card transition-colors hover:bg-muted/30", children: [_jsx("td", { className: "px-5 py-4 text-muted-foreground", children: order.id }), _jsx("td", { className: "px-5 py-4", children: _jsx("div", { className: "max-w-[260px] font-medium leading-6 text-foreground", children: order.product }) }), _jsx("td", { className: "px-5 py-4 text-muted-foreground", children: order.customer }), _jsx("td", { className: "px-5 py-4 text-muted-foreground", children: order.quantity }), _jsx("td", { className: "px-5 py-4", children: _jsx("span", { className: `inline-flex rounded-full px-3 py-1 text-xs font-semibold capitalize ${statusClasses[order.status]}`, children: t(`status.${order.status}`) }) }), _jsx("td", { className: "px-5 py-4 font-medium", children: order.price }), _jsx("td", { className: "px-5 py-4", children: _jsx(Button, { variant: "ghost", size: "icon-sm", className: "rounded-xl", children: _jsx(CircleEllipsis, { className: "h-4 w-4" }) }) })] }, order.id))) })] }) }) }), _jsx("div", { className: "mt-5 flex justify-end", children: _jsxs("div", { className: "inline-flex overflow-hidden rounded-2xl border border-border/70 bg-background", children: [_jsx(Button, { variant: "ghost", className: "rounded-none px-4 text-muted-foreground", children: t('common.previous') }), _jsx(Button, { variant: "ghost", className: "rounded-none bg-secondary px-4 text-primary", children: "1" }), _jsx(Button, { variant: "ghost", className: "rounded-none px-4", children: "2" }), _jsx(Button, { variant: "ghost", className: "rounded-none px-4", children: t('common.next') })] }) })] })] }) })] }));
}
