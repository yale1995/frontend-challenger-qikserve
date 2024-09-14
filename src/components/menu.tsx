'use client'

import { useTheme } from '@/app/hooks/use-theme'
import { CSSProperties } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronTopIconRegular } from './icons'

export const MenuRestaurant = () => {
  const { theme } = useTheme()

  const containerStyles: CSSProperties = {
    background: theme.backgroundColour,
    padding: '1.25rem 1rem',
    boxShadow: '0px 2px 14px 0px rgba(0, 0, 0, 0.15)',
  }

  const tabsStyles: CSSProperties = {
    padding: '1.25rem 1rem 1.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.1875rem',
  }

  const tabStyle: CSSProperties = {
    width: '6.5rem',
    textDecoration: 'none',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }

  const imageStyles: CSSProperties = {
    width: '5.125rem',
    height: '5.125rem',
    borderRadius: '100%',
  }

  const activeImageStyles: CSSProperties = {
    width: '5.125rem',
    height: '5.125rem',
    borderRadius: '100%',
    outline: `3px solid ${theme.primaryColour}`,
    outlineOffset: '3px',
  }

  const labelStyle: CSSProperties = {
    lineHeight: '62px',
    width: '100%',
    fontWeight: '600',
    fontSize: '1rem',
    textAlign: 'center',
    borderBottom: `3px solid transparent`,
    color: theme.primaryColour,
  }

  const activeLabelStyle: CSSProperties = {
    lineHeight: '62px',
    width: '100%',
    fontWeight: '600',
    fontSize: '1rem',
    textAlign: 'center',
    borderBottom: `3px solid ${theme.primaryColour}`,
    color: theme.primaryColour,
  }

  const headingSectionStyles: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingTop: '2rem',
    paddingBottom: '0.75rem',
  }

  const headingSectionLabelStyles: CSSProperties = {
    color: 'var(--gray-800)',
    fontWeight: '500',
    fontSize: '1.5rem',
  }

  const headingSectionButtonStyles: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    background: 'none',
    border: '0',
  }

  const headingSectionIconStyles: CSSProperties = {
    width: '1.5rem',
    height: '1.5rem',
    color: theme.primaryColour,
  }

  const itemStyles: CSSProperties = {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'space-between',
    padding: '1rem 0',
  }

  const itemInfoStyles: CSSProperties = {
    display: 'flex',
    flexFlow: 'column',
    gap: '0.25rem',
  }

  const itemInfoLabelStyles: CSSProperties = {
    fontWeight: '500',
    fontSize: '1rem',
    color: 'var(--gray-800)',
  }

  const itemInfoDetailStyles: CSSProperties = {
    fontWeight: '300',
    fontSize: '1rem',
    color: 'var(--gray-500)',
  }

  const itemInfoPriceStyles: CSSProperties = {
    fontWeight: '500',
    fontSize: '1rem',
    color: 'var(--gray-800)',
  }

  const itemImageContainerStyles: CSSProperties = {
    width: '8rem',
    height: '5.3125rem',
    overflow: 'hidden',
  }

  const itemImagemStyles: CSSProperties = {
    width: '100%',
    borderRadius: '6px',
    objectFit: 'cover',
  }

  return (
    <div style={containerStyles}>
      <section style={tabsStyles}>
        <Link href="#burgers" style={tabStyle}>
          <Image
            src="https://github.com/yale1995.png"
            alt="image"
            style={activeImageStyles}
            width={82}
            height={82}
          />

          <span style={activeLabelStyle}>Burgers</span>
        </Link>

        <Link href="#drinks" style={tabStyle}>
          <Image
            src="https://github.com/yale1995.png"
            alt="image"
            style={imageStyles}
            width={82}
            height={82}
          />

          <span style={labelStyle}>Drinks</span>
        </Link>

        <Link id="tab" href="#desserts" style={tabStyle}>
          <Image
            src="https://github.com/yale1995.png"
            alt="image"
            style={imageStyles}
            width={82}
            height={82}
          />

          <span style={labelStyle}>Desserts</span>
        </Link>
      </section>

      <section>
        <div style={headingSectionStyles}>
          <h2 style={headingSectionLabelStyles}>Burgers</h2>

          <button style={headingSectionButtonStyles}>
            <ChevronTopIconRegular style={headingSectionIconStyles} />
          </button>
        </div>

        <ul>
          <li style={itemStyles}>
            <div style={itemInfoStyles}>
              <span style={itemInfoLabelStyles}>Hardcore</span>
              <p style={itemInfoDetailStyles}>
                180g angus beef burger, plus ribs, gruyere cheese...
              </p>
              <span style={itemInfoPriceStyles}>R$33,00</span>
            </div>

            <div style={itemImageContainerStyles}>
              <Image
                src="https://github.com/yale1995.png"
                alt="image"
                style={itemImagemStyles}
                width={128}
                height={85}
              />
            </div>
          </li>
        </ul>
      </section>
    </div>
  )
}
