import { ReactNode } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface FormContainerProps {
  title?: string
  description?: string
  children: ReactNode
  loading?: boolean
  className?: string
}

export function FormContainer({
  title,
  description,
  children,
  loading,
  className,
}: FormContainerProps) {
  return (
    <Card className={className}>
      {title && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      <CardContent className={cn(loading && 'opacity-50 pointer-events-none')}>
        {children}
      </CardContent>
    </Card>
  )
}
