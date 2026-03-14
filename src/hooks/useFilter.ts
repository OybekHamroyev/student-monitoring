import { useState, useMemo } from 'react'

export interface FilterConfig {
  [key: string]: any
}

export function useFilter<T extends Record<string, any>>(
  items: T[],
  filterFn?: (item: T, filters: FilterConfig) => boolean
) {
  const [filters, setFilters] = useState<FilterConfig>({})

  const filtered = useMemo(() => {
    if (!filterFn || Object.keys(filters).length === 0) {
      return items
    }
    return items.filter(item => filterFn(item, filters))
  }, [items, filters, filterFn])

  const addFilter = (key: string, value: any) => {
    setFilters(prev => ({
      ...prev,
      [key]: value,
    }))
  }

  const removeFilter = (key: string) => {
    setFilters(prev => {
      const newFilters = { ...prev }
      delete newFilters[key]
      return newFilters
    })
  }

  const clearFilters = () => {
    setFilters({})
  }

  const updateFilter = (key: string, value: any) => {
    addFilter(key, value)
  }

  return {
    filters,
    filtered,
    addFilter,
    removeFilter,
    clearFilters,
    updateFilter,
  }
}
