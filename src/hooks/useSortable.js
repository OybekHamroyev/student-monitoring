import { useState, useMemo } from 'react';
export function useSortable(items, defaultField) {
    const [sort, setSort] = useState({
        field: defaultField || null,
        direction: 'asc',
    });
    const sortedItems = useMemo(() => {
        if (!sort.field) {
            return items;
        }
        const sorted = [...items].sort((a, b) => {
            const aVal = a[sort.field];
            const bVal = b[sort.field];
            if (aVal < bVal)
                return sort.direction === 'asc' ? -1 : 1;
            if (aVal > bVal)
                return sort.direction === 'asc' ? 1 : -1;
            return 0;
        });
        return sorted;
    }, [items, sort]);
    const toggleSort = (field) => {
        if (sort.field === field) {
            setSort(prev => ({
                ...prev,
                direction: prev.direction === 'asc' ? 'desc' : 'asc',
            }));
        }
        else {
            setSort({
                field,
                direction: 'asc',
            });
        }
    };
    const clearSort = () => {
        setSort({
            field: null,
            direction: 'asc',
        });
    };
    return {
        sortedItems,
        sort,
        toggleSort,
        clearSort,
    };
}
