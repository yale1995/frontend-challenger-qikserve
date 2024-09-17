'use client'

import { useMediaQuery } from '@/hooks/use-media-query'
import { useTheme } from '@/hooks/use-theme'
import { CSSProperties, ReactNode } from 'react'

interface WrapperProps {
  children: ReactNode
}

export const Wrapper = ({ children }: WrapperProps) => {
  const isMobile = useMediaQuery('(max-width: 766px)')
  const { theme } = useTheme()

  const wrapperStyles: CSSProperties = {
    maxWidth: '64rem',
    width: '100%',
    padding: '1rem',
    margin: '0 auto',
  }

  const wrapperMobileStyles: CSSProperties = {
    ...wrapperStyles,
    background: theme.backgroundColour,
  }

  return (
    <div style={isMobile ? wrapperMobileStyles : wrapperStyles}>{children}</div>
  )
}
