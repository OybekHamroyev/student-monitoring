import { useState, useMemo } from 'react'

interface PaginationConfig {
  pageSize?: number
}

export function usePagination<T>(
  items: T[],
  { pageSize = 10 }: PaginationConfig = {}
) {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(items.length / pageSize)

  const paginatedItems = useMemo(() => {
    const startIdx = (currentPage - 1) * pageSize
    const endIdx = startIdx + pageSize
    return items.slice(startIdx, endIdx)
  }, [items, currentPage, pageSize])

  const goToPage = (page: number) => {
    const validPage = Math.max(1, Math.min(page, totalPages || 1))
    setCurrentPage(validPage)
  }

  const goToNextPage = () => {
    goToPage(currentPage + 1)
  }

  const goToPreviousPage = () => {
    goToPage(currentPage - 1)
  }

  const reset = () => {
    setCurrentPage(1)
  }

  return {
    currentPage,
    totalPages,
    pageSize,
    paginatedItems,
    goToPage,
    goToNextPage,
    goToPreviousPage,
    canGoNext: currentPage < totalPages,
    canGoPrevious: currentPage > 1,
    reset,
  }
}
