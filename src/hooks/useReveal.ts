import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'

export type RevealVariant =
  | 'up'
  | 'left'
  | 'right'
  | 'scale'
  | 'blur'

const HIDDEN: Record<RevealVariant, CSSProperties> = {
  up: {
    opacity: 0,
    transform: 'translateY(32px)',
  },

  left: {
    opacity: 0,
    transform: 'translateX(-36px)',
  },

  right: {
    opacity: 0,
    transform: 'translateX(36px)',
  },

  scale: {
    opacity: 0,
    transform: 'scale(0.9)',
  },

  blur: {
    opacity: 0,
    filter: 'blur(10px)',
    transform: 'translateY(14px)',
  },
}

const VISIBLE: Record<RevealVariant, CSSProperties> = {
  up: {
    opacity: 1,
    transform: 'none',
  },

  left: {
    opacity: 1,
    transform: 'none',
  },

  right: {
    opacity: 1,
    transform: 'none',
  },

  scale: {
    opacity: 1,
    transform: 'none',
  },

  blur: {
    opacity: 1,
    filter: 'none',
    transform: 'none',
  },
}

export function useReveal(
  variant: RevealVariant = 'up',
  delay = 0,
) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current

    if (!element) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.06,
      },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const style: CSSProperties = {
    ...(visible ? VISIBLE[variant] : HIDDEN[variant]),
    transition: `all 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
  }

  return {
    ref,
    style,
  }
}