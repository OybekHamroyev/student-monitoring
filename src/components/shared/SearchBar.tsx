import { Search, X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface SearchBarProps {
  placeholder?: string
  value: string
  onChange: (value: string) => void
  onSearch?: () => void
  onClear?: () => void
}

export function SearchBar({
  placeholder = 'Search...',
  value,
  onChange,
  onSearch,
  onClear,
}: SearchBarProps) {
  return (
    <div className="flex gap-2">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="pl-10 pr-10"
        />
        {value && (
          <button
            onClick={() => {
              onChange('')
              onClear?.()
            }}
            className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
      {onSearch && (
        <Button onClick={onSearch} size="sm">
          Search
        </Button>
      )}
    </div>
  )
}
