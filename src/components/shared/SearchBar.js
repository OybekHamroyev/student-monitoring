import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
export function SearchBar({ placeholder = 'Search...', value, onChange, onSearch, onClear, }) {
    return (_jsxs("div", { className: "flex gap-2", children: [_jsxs("div", { className: "relative flex-1", children: [_jsx(Search, { className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground" }), _jsx(Input, { type: "search", placeholder: placeholder, value: value, onChange: (e) => onChange(e.target.value), className: "pl-10 pr-10" }), value && (_jsx("button", { onClick: () => {
                            onChange('');
                            onClear?.();
                        }, className: "absolute right-3 top-3 text-muted-foreground hover:text-foreground", children: _jsx(X, { className: "h-4 w-4" }) }))] }), onSearch && (_jsx(Button, { onClick: onSearch, size: "sm", children: "Search" }))] }));
}
