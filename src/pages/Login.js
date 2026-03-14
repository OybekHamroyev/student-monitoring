import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { setUser } from '@/store/slices/auth';
import AuthLayout from '@/layouts/AuthLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { demoAccounts } from '@/mocks/demoData';
export default function Login() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState(demoAccounts[0].email);
    const [password, setPassword] = useState(demoAccounts[0].password);
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const selectedAccount = demoAccounts.find((account) => account.email === email) ?? demoAccounts[0];
            dispatch(setUser({
                id: selectedAccount.email,
                name: selectedAccount.name,
                email,
                role: selectedAccount.role,
            }));
            localStorage.setItem('auth_token', 'mock_token_123');
            if (rememberMe) {
                localStorage.setItem('remembered_email', email);
            }
            navigate('/dashboard');
        }
        finally {
            setIsLoading(false);
        }
    };
    return (_jsx(AuthLayout, { children: _jsxs(Card, { className: "soft-surface", children: [_jsxs(CardHeader, { className: "space-y-2", children: [_jsx(CardTitle, { className: "text-2xl tracking-[-0.04em]", children: t('auth.login') }), _jsx(CardDescription, { children: t('auth.description') })] }), _jsxs(CardContent, { className: "space-y-5", children: [_jsxs("div", { className: "space-y-2", children: [_jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground", children: t('auth.demoAccounts') }), _jsx("div", { className: "flex flex-wrap gap-2", children: demoAccounts.map((account) => (_jsx(Button, { variant: "outline", size: "sm", onClick: () => {
                                            setEmail(account.email);
                                            setPassword(account.password);
                                        }, children: t(`auth.accounts.${account.role}`) }, account.email))) })] }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx("label", { htmlFor: "email", className: "text-sm font-medium", children: t('auth.email') }), _jsx(Input, { id: "email", type: "email", placeholder: t('auth.emailPlaceholder'), value: email, onChange: (e) => setEmail(e.target.value), required: true })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("label", { htmlFor: "password", className: "text-sm font-medium", children: t('auth.password') }), _jsx(Input, { id: "password", type: "password", placeholder: t('auth.passwordPlaceholder'), value: password, onChange: (e) => setPassword(e.target.value), required: true })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Checkbox, { id: "remember", checked: rememberMe, onCheckedChange: (checked) => setRememberMe(checked) }), _jsx("label", { htmlFor: "remember", className: "cursor-pointer text-sm", children: t('auth.rememberMe') })] }), _jsx("span", { className: "text-sm text-muted-foreground", children: t('app.safeMode') })] }), _jsx(Button, { type: "submit", className: "w-full", disabled: isLoading, children: isLoading ? t('auth.signingIn') : t('auth.login') })] })] })] }) }));
}
