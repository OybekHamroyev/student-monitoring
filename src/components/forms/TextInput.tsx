import { forwardRef } from 'react'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  required?: boolean
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, error, helperText, required, className, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="text-sm font-medium text-foreground">
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </label>
        )}
        <Input
          ref={ref}
          className={cn(error && 'border-destructive', className)}
          {...props}
        />
        {error ? (
          <p className="text-sm text-destructive">{error}</p>
        ) : helperText ? (
          <p className="text-sm text-muted-foreground">{helperText}</p>
        ) : null}
      </div>
    )
  }
)

TextInput.displayName = 'TextInput'
