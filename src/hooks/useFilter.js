import { useState, useMemo } from 'react';
export function useFilter(items, filterFn) {
    const [filters, setFilters] = useState({});
    const filtered = useMemo(() => {
        if (!filterFn || Object.keys(filters).length === 0) {
            return items;
        }
        return items.filter(item => filterFn(item, filters));
    }, [items, filters, filterFn]);
    const addFilter = (key, value) => {
        setFilters(prev => ({
            ...prev,
            [key]: value,
        }));
    };
    const removeFilter = (key) => {
        setFilters(prev => {
            const newFilters = { ...prev };
            delete newFilters[key];
            return newFilters;
        });
    };
    const clearFilters = () => {
        setFilters({});
    };
    const updateFilter = (key, value) => {
        addFilter(key, value);
    };
    return {
        filters,
        filtered,
        addFilter,
        removeFilter,
        clearFilters,
        updateFilter,
    };
}
