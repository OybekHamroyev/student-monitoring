import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function AuthLayout({ children }) {
    return (_jsxs("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: [_jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.14),transparent_28%),radial-gradient(circle_at_bottom_right,hsl(var(--info)/0.12),transparent_22%)]" }), _jsx("div", { className: "relative w-full max-w-md", children: children })] }));
}
