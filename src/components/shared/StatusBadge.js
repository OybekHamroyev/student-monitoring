import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';
const statusStyles = {
    active: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300',
    inactive: 'bg-slate-100 text-slate-600 dark:bg-slate-500/15 dark:text-slate-300',
    graduated: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300',
    suspended: 'bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-300',
    pending: 'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300',
    warning: 'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300',
};
export function StatusBadge({ status, className }) {
    const { t } = useTranslation();
    return (_jsx("span", { className: cn('inline-flex px-2 py-1 rounded-full text-xs font-medium', statusStyles[status], className), children: t(`status.${status}`) }));
}
