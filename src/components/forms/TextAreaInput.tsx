import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface TextAreaInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
  required?: boolean
  maxLength?: number
  showCharCount?: boolean
}

export const TextAreaInput = forwardRef<HTMLTextAreaElement, TextAreaInputProps>(
  ({
    label,
    error,
    helperText,
    required,
    className,
    maxLength,
    showCharCount,
    value = '',
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
        <textarea
          ref={ref}
          maxLength={maxLength}
          value={value}
          className={cn(
            'w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none',
            error && 'border-destructive',
            className
          )}
          {...props}
        />
        <div className="flex justify-between items-start">
          <div>
            {error ? (
              <p className="text-sm text-destructive">{error}</p>
            ) : helperText ? (
              <p className="text-sm text-muted-foreground">{helperText}</p>
            ) : null}
          </div>
          {showCharCount && maxLength && (
            <p className="text-xs text-muted-foreground">
              {String(value).length} / {maxLength}
            </p>
          )}
        </div>
      </div>
    )
  }
)

TextAreaInput.displayName = 'TextAreaInput'
