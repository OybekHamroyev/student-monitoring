import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
export default function PreviewModal({ open, title, subtitle, onClose, children, actions, }) {
    useEffect(() => {
        if (!open) {
            return;
        }
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [open, onClose]);
    if (!open) {
        return null;
    }
    return (_jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-slate-950/45 p-4 backdrop-blur-sm", children: _jsxs("div", { className: "panel-card max-h-[90vh] w-full max-w-2xl overflow-hidden", children: [_jsxs("div", { className: "flex items-start justify-between border-b border-border/70 px-6 py-5", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-xl font-semibold tracking-[-0.03em]", children: title }), subtitle ? _jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: subtitle }) : null] }), _jsx(Button, { variant: "ghost", size: "icon-sm", className: "rounded-xl", onClick: onClose, children: _jsx(X, { className: "h-4 w-4" }) })] }), _jsx("div", { className: "max-h-[calc(90vh-150px)] overflow-auto px-6 py-5", children: children }), actions ? (_jsx("div", { className: "flex justify-end gap-3 border-t border-border/70 px-6 py-4", children: actions })) : null] }) }));
}
