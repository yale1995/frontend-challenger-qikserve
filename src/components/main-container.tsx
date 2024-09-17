'use client'

import { useMediaQuery } from '@/hooks/use-media-query'
import { ReactNode } from 'react'

interface MainContainerProps {
  children: ReactNode
}

const menuContainerStyles = {
  padding: '2rem 2.5rem',
  background: 'var(--gray-100)',
  marginTop: '0.375rem',
  display: 'grid',
  gap: '1.5rem',
  gridTemplateColumns: '1fr 20rem',
}

const menuContainerMobileStyles = {
  marginTop: '0.375rem',
}

export const MainContainer = ({ children }: MainContainerProps) => {
  const isMobile = useMediaQuery('(max-width: 766px)')

  return (
    <div style={isMobile ? menuContainerMobileStyles : menuContainerStyles}>
      {children}
    </div>
  )
}
