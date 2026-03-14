import { forwardRef, useState } from 'react'
import { Upload, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'

interface FileUploadInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
  error?: string
  helperText?: string
  required?: boolean
  accept?: string
  maxSize?: number
  onFileChange?: (file: File | null) => void
}

export const FileUploadInput = forwardRef<HTMLInputElement, FileUploadInputProps>(
  ({
    label,
    error,
    helperText,
    required,
    accept,
    maxSize = 5 * 1024 * 1024, // 5MB
    onFileChange,
    ...props
  }, ref) => {
    const { t } = useTranslation()
    const [fileName, setFileName] = useState<string | null>(null)
    const [fileError, setFileError] = useState<string | null>(null)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]
      setFileError(null)

      if (file) {
        if (maxSize && file.size > maxSize) {
          setFileError(t('fileUpload.maxSizeError', { size: maxSize / 1024 / 1024 }))
          setFileName(null)
          onFileChange?.(null)
          return
        }

        setFileName(file.name)
        onFileChange?.(file)
      }
    }

    const handleClear = () => {
      setFileName(null)
      setFileError(null)
      onFileChange?.(null)
      if (ref && 'current' in ref) {
        ref.current!.value = ''
      }
    }

    return (
      <div className="space-y-2">
        {label && (
          <label className="text-sm font-medium text-foreground">
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </label>
        )}

        <div className="relative">
          <input
            ref={ref}
            id="file-upload-input"
            type="file"
            accept={accept}
            onChange={handleFileChange}
            className="hidden"
            {...props}
          />
          <label
            htmlFor="file-upload-input"
            className="flex items-center justify-center p-6 border-2 border-dashed border-border rounded-lg hover:border-primary hover:bg-muted/50 transition-colors cursor-pointer"
          >
            <div className="flex flex-col items-center gap-2">
              <Upload className="h-6 w-6 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                {t('fileUpload.prompt')}
              </p>
              <p className="text-xs text-muted-foreground">
                {accept
                  ? t('fileUpload.acceptHint', {
                      types: accept.split(',').join(', '),
                      size: maxSize / 1024 / 1024,
                    })
                  : t('fileUpload.sizeOnly', { size: 5 })}
              </p>
            </div>
          </label>
        </div>

        {fileName && (
          <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
            <p className="text-sm text-foreground">{fileName}</p>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={handleClear}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}

        {fileError || error ? (
          <p className="text-sm text-destructive">{fileError || error}</p>
        ) : helperText ? (
          <p className="text-sm text-muted-foreground">{helperText}</p>
        ) : null}
      </div>
    )
  }
)

FileUploadInput.displayName = 'FileUploadInput'
