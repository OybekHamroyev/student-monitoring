import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface Option {
  value: string | number
  label: string
}

interface SelectInputProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  helperText?: string
  required?: boolean
  options?: Option[]
  placeholder?: string
}

export const SelectInput = forwardRef<HTMLSelectElement, SelectInputProps>(
  ({
    label,
    error,
    helperText,
    required,
    className,
    options = [],
    placeholder,
    ...props
  }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="text-sm font-medium text-foreground">
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </label>
        )}
        <select
          ref={ref}
          className={cn(
            'w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary',
            error && 'border-destructive',
            className
          )}
          {...props}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error ? (
          <p className="text-sm text-destructive">{error}</p>
        ) : helperText ? (
          <p className="text-sm text-muted-foreground">{helperText}</p>
        ) : null}
      </div>
    )
  }
)

SelectInput.displayName = 'SelectInput'
