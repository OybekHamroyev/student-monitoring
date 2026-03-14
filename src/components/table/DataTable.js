import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '@/lib/utils';
export function DataTable({ data, columns, rowClassName, loading, }) {
    if (loading) {
        return (_jsx("div", { className: "rounded-[24px] border border-border/70 p-8 text-center text-muted-foreground", children: "Loading..." }));
    }
    if (data.length === 0) {
        return (_jsx("div", { className: "rounded-[24px] border border-border/70 p-8 text-center text-muted-foreground", children: "No data available" }));
    }
    return (_jsx("div", { className: "overflow-hidden rounded-[24px] border border-border/70", children: _jsxs("table", { className: "w-full text-sm", children: [_jsx("thead", { className: "border-b border-border bg-muted/80", children: _jsx("tr", { children: columns.map((column) => (_jsx("th", { className: cn('px-4 py-3 text-left font-medium', column.className), children: column.label }, String(column.key)))) }) }), _jsx("tbody", { children: data.map((item, idx) => (_jsx("tr", { className: cn('border-b border-border/70 transition-colors hover:bg-muted/30', rowClassName?.(item)), children: columns.map((column) => {
                            const value = item[column.key];
                            return (_jsx("td", { className: cn('px-4 py-3', column.className), children: column.render
                                    ? column.render(value, item)
                                    : String(value || '') }, String(column.key)));
                        }) }, idx))) })] }) }));
}
