import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Sidebar from '@/components/shared/Sidebar';
import Header from '@/components/shared/Header';
export default function AppShell({ children }) {
    return (_jsxs("div", { className: "flex min-h-screen bg-background", children: [_jsx(Sidebar, {}), _jsxs("div", { className: "flex flex-1 flex-col overflow-hidden", children: [_jsx(Header, {}), _jsx("main", { className: "flex-1 overflow-auto", children: _jsx("div", { className: "mx-auto w-full max-w-[1600px] p-4 md:p-6 xl:p-8", children: children }) })] })] }));
}
