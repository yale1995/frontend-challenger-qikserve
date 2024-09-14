'use client'

import { useTheme } from '@/hooks/use-theme'
import { CSSProperties } from 'react'

export const Banner = () => {
  const { theme } = useTheme()

  const bannerStyle: CSSProperties = {
    height: '9.375rem',
    backgroundImage: theme.bannerImage ? `url(${theme.bannerImage})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }

  return <div style={bannerStyle} />
}
