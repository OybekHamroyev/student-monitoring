import { forwardRef } from 'react'
import { Checkbox } from '@/components/ui/checkbox'

interface CheckboxInputProps extends React.ComponentPropsWithoutRef<typeof Checkbox> {
  label?: string
  error?: string
  helperText?: string
}

export const CheckboxInput = forwardRef<
  React.ElementRef<typeof Checkbox>,
  CheckboxInputProps
>(
  ({ label, error, helperText, className, ...props }, ref) => {
    return (
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Checkbox ref={ref} id={props.id} {...props} />
          {label && (
            <label
              htmlFor={props.id}
              className="text-sm font-medium text-foreground cursor-pointer"
            >
              {label}
            </label>
          )}
        </div>
        {error ? (
          <p className="text-sm text-destructive">{error}</p>
        ) : helperText ? (
          <p className="text-sm text-muted-foreground">{helperText}</p>
        ) : null}
      </div>
    )
  }
)

CheckboxInput.displayName = 'CheckboxInput'
