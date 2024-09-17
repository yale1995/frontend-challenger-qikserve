'use client'

import { useMediaQuery } from '@/hooks/use-media-query'
import { useTheme } from '@/hooks/use-theme'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { CSSProperties } from 'react'
import { HamburgerMenuIconRegular } from '@/components/icons'

export const Navbar = () => {
  const pathname = usePathname()
  const { theme } = useTheme()
  const t = useTranslations()

  const isMobile = useMediaQuery('(max-width: 766px)')

  const navStyle: CSSProperties = {
    height: '3.25rem',
    background: theme.navBackgroundColour,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.16)',
    display: 'flex',
    alignItems: 'center',
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

  const buttonMenuStyles: CSSProperties = {
    width: '1.75rem',
    height: '1.75rem',
    background: 'transparent',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    border: '0',
    outline: '0',

    marginLeft: 'auto',
    gridColumn: '3',
  }

  const iconButtonStyles: CSSProperties = {
    color: theme.backgroundColour,
    width: '1rem',
    height: '1rem',
  }

  const contentContainerMobileStyles: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 1rem',
  }

  const navHeadingStyles: CSSProperties = {
    fontSize: '1.25rem',
    fontWeight: '500',
    color: theme.backgroundColour,
    gridColumn: '2',
    textAlign: 'center',
  }

  return (
    <nav style={navStyle}>
      {!isMobile ? (
        <div style={listItemsStyle}>
          <a href="/" style={itemStyle('/menu')}>
            {t('navbar.menu')}
          </a>
          <a href="/sign-in" style={itemStyle('/sign-in')}>
            {t('navbar.sign-in')}
          </a>
          <a href="/contact" style={itemStyle('/contact')}>
            {t('navbar.contact')}
          </a>
        </div>
      ) : (
        <div style={contentContainerMobileStyles}>
          <h3 style={navHeadingStyles}>Menu</h3>

          <button style={buttonMenuStyles}>
            <HamburgerMenuIconRegular style={iconButtonStyles} />
          </button>
        </div>
      )}
    </nav>
  )
}
