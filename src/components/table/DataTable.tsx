import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface Column<T> {
  key: keyof T | string
  label: string
  render?: (value: any, item: T) => ReactNode
  className?: string
}

interface DataTableProps<T extends Record<string, any>> {
  data: T[]
  columns: Column<T>[]
  rowClassName?: (item: T) => string
  loading?: boolean
}

export function DataTable<T extends Record<string, any>>({
  data,
  columns,
  rowClassName,
  loading,
}: DataTableProps<T>) {
  if (loading) {
    return (
      <div className="rounded-[24px] border border-border/70 p-8 text-center text-muted-foreground">
        Loading...
      </div>
    )
  }

  if (data.length === 0) {
    return (
      <div className="rounded-[24px] border border-border/70 p-8 text-center text-muted-foreground">
        No data available
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-[24px] border border-border/70">
      <table className="w-full text-sm">
        <thead className="border-b border-border bg-muted/80">
          <tr>
            {columns.map((column) => (
              <th
                key={String(column.key)}
                className={cn(
                  'px-4 py-3 text-left font-medium',
                  column.className
                )}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr
              key={idx}
              className={cn(
                'border-b border-border/70 transition-colors hover:bg-muted/30',
                rowClassName?.(item)
              )}
            >
              {columns.map((column) => {
                const value = item[column.key as keyof T]
                return (
                  <td
                    key={String(column.key)}
                    className={cn('px-4 py-3', column.className)}
                  >
                    {column.render
                      ? column.render(value, item)
                      : String(value || '')}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
