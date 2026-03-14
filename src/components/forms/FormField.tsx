import { ReactNode } from 'react'
import { Controller, Control, FieldValues, Path } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

interface FormFieldProps<T extends FieldValues> {
  control: Control<T>
  name: Path<T>
  label: string
  placeholder?: string
  type?: string
  required?: boolean
  error?: string
  children?: ReactNode
}

export function FormField<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = 'text',
  required = false,
  error,
  children,
}: FormFieldProps<T>) {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="text-sm font-medium">
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </label>

      {children ? (
        children
      ) : (
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <Input
              {...field}
              id={name}
              type={type}
              placeholder={placeholder}
              className={cn(error && 'border-destructive')}
            />
          )}
        />
      )}

      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  )
}
