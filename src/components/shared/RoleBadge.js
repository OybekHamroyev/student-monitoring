import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';
const ROLE_STYLES = {
    tutor: 'bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300',
    vice_dean: 'bg-purple-100 text-purple-700 dark:bg-purple-500/15 dark:text-purple-300',
    dean: 'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300',
    admin: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300',
};
export function RoleBadge({ role, className }) {
    const { t } = useTranslation();
    const normalized = role.toLowerCase().replace(/\s+/g, '_');
    const style = ROLE_STYLES[normalized] ?? 'bg-muted text-muted-foreground';
    return (_jsx("span", { className: cn('inline-flex rounded-full px-3 py-1 text-xs font-semibold capitalize', style, className), children: t(`roles.${normalized}`, { defaultValue: role.replace(/_/g, ' ') }) }));
}
