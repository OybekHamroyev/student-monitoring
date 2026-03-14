import { ReactNode } from 'react'

interface AuthLayoutProps {
  children: ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.14),transparent_28%),radial-gradient(circle_at_bottom_right,hsl(var(--info)/0.12),transparent_22%)]" />
      <div className="relative w-full max-w-md">
        {children}
      </div>
    </div>
  )
}
