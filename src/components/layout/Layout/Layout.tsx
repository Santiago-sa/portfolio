import { LangProvider } from "@/i18n/LangProvider";
import type { ReactNode } from 'react'
import { AmbientBackground } from '@/components/layout/AmbientBackground'
import { ScrollNav, ScrollProgressBar, ScrollProvider } from '@/components/layout/ScrollProvider'
import { Navbar } from '@/components/navigation/Navbar'


interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <LangProvider>
    <ScrollProvider>
      <div className="relative min-h-screen overflow-x-hidden bg-[#04040e]">
        <AmbientBackground />
        <ScrollProgressBar />
        <Navbar />
        <ScrollNav />
        {children}
      </div>
    </ScrollProvider>
    </LangProvider>
  )
}