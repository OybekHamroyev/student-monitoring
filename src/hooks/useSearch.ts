import { useState, useMemo } from 'react'

interface SearchConfig {
  searchableFields: string[]
  threshold?: number // 0-1, how strict the matching is
}

export function useSearch<T extends Record<string, any>>(
  items: T[],
  config: SearchConfig
) {
  const [searchQuery, setSearchQuery] = useState('')

  const results = useMemo(() => {
    if (!searchQuery.trim()) {
      return items
    }

    const query = searchQuery.toLowerCase()

    return items.filter(item => {
      return config.searchableFields.some(field => {
        const value = String(item[field] || '').toLowerCase()
        return value.includes(query)
      })
    })
  }, [items, searchQuery, config.searchableFields])

  const clear = () => {
    setSearchQuery('')
  }

  return {
    searchQuery,
    setSearchQuery,
    results,
    clear,
    count: results.length,
  }
}
