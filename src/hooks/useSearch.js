import { useState, useMemo } from 'react';
export function useSearch(items, config) {
    const [searchQuery, setSearchQuery] = useState('');
    const results = useMemo(() => {
        if (!searchQuery.trim()) {
            return items;
        }
        const query = searchQuery.toLowerCase();
        return items.filter(item => {
            return config.searchableFields.some(field => {
                const value = String(item[field] || '').toLowerCase();
                return value.includes(query);
            });
        });
    }, [items, searchQuery, config.searchableFields]);
    const clear = () => {
        setSearchQuery('');
    };
    return {
        searchQuery,
        setSearchQuery,
        results,
        clear,
        count: results.length,
    };
}
