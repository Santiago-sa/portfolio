import type { ReactNode } from 'react'
import { AmbientBackground } from '@/components/layout/AmbientBackground'
import { Navbar } from '@/components/navigation/Navbar'


interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#04040e]">
      <AmbientBackground />
        <Navbar />
      {children}
    </div>
  )
}