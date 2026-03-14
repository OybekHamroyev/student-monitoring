import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
export default function Settings() {
    const { t } = useTranslation();
    const [settings, setSettings] = useState({
        pnflRequired: true,
        contractModuleEnabled: false,
    });
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { children: [_jsx("h1", { className: "panel-title", children: t('settings.title') }), _jsx("p", { className: "mt-2 text-muted-foreground", children: t('settings.subtitle') })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: t('settings.systemConfiguration') }), _jsx(CardDescription, { children: t('settings.systemConfigurationDesc') })] }), _jsxs(CardContent, { className: "space-y-6", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "font-medium", children: t('settings.pnflRequirement') }), _jsx("p", { className: "text-sm text-muted-foreground", children: t('settings.pnflRequirementDesc') })] }), _jsx(Switch, { checked: settings.pnflRequired, onCheckedChange: (checked) => setSettings({ ...settings, pnflRequired: checked }) })] }), _jsx("div", { className: "border-t border-border pt-6", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "font-medium", children: t('settings.contractModule') }), _jsx("p", { className: "text-sm text-muted-foreground", children: t('settings.contractModuleDesc') })] }), _jsx(Switch, { checked: settings.contractModuleEnabled, onCheckedChange: (checked) => setSettings({ ...settings, contractModuleEnabled: checked }) })] }) }), _jsxs("div", { className: "flex justify-end gap-4 border-t border-border pt-6", children: [_jsx(Button, { variant: "default", className: "min-w-24 bg-destructive hover:bg-destructive/90", children: t('common.cancel') }), _jsx(Button, { className: "min-w-24", children: t('common.submit') })] })] })] })] }));
}
