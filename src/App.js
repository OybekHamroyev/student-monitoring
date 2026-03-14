import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from '@/store/slices/theme';
import { setLanguage } from '@/store/slices/language';
import i18n from '@/i18n';
// Layouts
import AppShell from '@/layouts/AppShell';
import { Toaster } from '@/components/shared/Toaster';
// Pages
import Login from '@/pages/Login';
import Dashboard from '@/pages/Dashboard';
import Students from '@/pages/Students';
import Groups from '@/pages/Groups';
import Tutors from '@/pages/Tutors';
import Search from '@/pages/Search';
import Settings from '@/pages/Settings';
import Audit from '@/pages/Audit';
import StudentProfile from '@/pages/StudentProfile';
import ComponentsDemo from '@/pages/ComponentsDemo';
import NotFound from '@/pages/NotFound';
function ProtectedRoute({ children }) {
    const { isAuthenticated } = useSelector((state) => state.auth);
    if (!isAuthenticated) {
        return _jsx(Navigate, { to: "/login", replace: true });
    }
    return _jsx(AppShell, { children: children });
}
export default function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'system';
        dispatch(setTheme(savedTheme));
        const savedLang = localStorage.getItem('language');
        if (savedLang && ['en', 'ru', 'uz'].includes(savedLang)) {
            dispatch(setLanguage(savedLang));
            i18n.changeLanguage(savedLang);
        }
    }, [dispatch]);
    return (_jsxs(_Fragment, { children: [_jsx(Toaster, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/login", element: _jsx(Login, {}) }), _jsx(Route, { path: "/dashboard", element: _jsx(ProtectedRoute, { children: _jsx(Dashboard, {}) }) }), _jsx(Route, { path: "/students", element: _jsx(ProtectedRoute, { children: _jsx(Students, {}) }) }), _jsx(Route, { path: "/students/:id", element: _jsx(ProtectedRoute, { children: _jsx(StudentProfile, {}) }) }), _jsx(Route, { path: "/groups", element: _jsx(ProtectedRoute, { children: _jsx(Groups, {}) }) }), _jsx(Route, { path: "/tutors", element: _jsx(ProtectedRoute, { children: _jsx(Tutors, {}) }) }), _jsx(Route, { path: "/search", element: _jsx(ProtectedRoute, { children: _jsx(Search, {}) }) }), _jsx(Route, { path: "/settings", element: _jsx(ProtectedRoute, { children: _jsx(Settings, {}) }) }), _jsx(Route, { path: "/audit", element: _jsx(ProtectedRoute, { children: _jsx(Audit, {}) }) }), _jsx(Route, { path: "/components-demo", element: _jsx(ProtectedRoute, { children: _jsx(ComponentsDemo, {}) }) }), _jsx(Route, { path: "/", element: _jsx(Navigate, { to: "/dashboard", replace: true }) }), _jsx(Route, { path: "*", element: _jsx(NotFound, {}) })] })] }));
}
