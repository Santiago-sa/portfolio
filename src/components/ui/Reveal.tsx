import type { ReactNode } from 'react'

import {
  useReveal,
  type RevealVariant,
} from '@/hooks/useReveal'

interface RevealProps {
  children: ReactNode
  delay?: number
  variant?: RevealVariant
  className?: string
}

export function Reveal({
  children,
  delay = 0,
  variant = 'up',
  className = '',
}: RevealProps) {
  const { ref, style } = useReveal(
    variant,
    delay,
  )

  return (
    <div
      ref={ref}
      className={className}
      style={style}
    >
      {children}
    </div>
  )
}