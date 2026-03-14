import { ReactNode } from 'react'
import Sidebar from '@/components/shared/Sidebar'
import Header from '@/components/shared/Header'

interface AppShellProps {
  children: ReactNode
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto">
          <div className="mx-auto w-full max-w-[1600px] p-4 md:p-6 xl:p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
