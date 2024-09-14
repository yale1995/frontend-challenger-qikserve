'use client'

import { useTheme } from '@/hooks/use-theme'
import { usePathname } from 'next/navigation'
import { CSSProperties } from 'react'

export const Navbar = () => {
  const pathname = usePathname()

  const { theme } = useTheme()

  const navStyle: CSSProperties = {
    height: '3.25rem',
    background: theme.navBackgroundColour,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.16)',
  }

  const listItemsStyle: CSSProperties = {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const itemStyle = (path: string): CSSProperties => ({
    width: '14.5rem',
    lineHeight: '52px',
    color: 'var(--white)',
    textDecoration: 'none',
    fontSize: '1.25rem',
    borderBottom:
      pathname === path ? `5px solid var(--white)` : '5px solid transparent',
    textAlign: 'center',
  })

  return (
    <nav style={navStyle}>
      <div style={listItemsStyle}>
        <a href="/" style={itemStyle('/menu')}>
          Menu
        </a>
        <a href="/sign-in" style={itemStyle('/sign-in')}>
          Entrar
        </a>
        <a href="/contact" style={itemStyle('/contact')}>
          Contato
        </a>
      </div>
    </nav>
  )
}
