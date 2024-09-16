'use client'

import { useCart } from '@/hooks/use-cart'
import { useTheme } from '@/hooks/use-theme'
import { CSSProperties } from 'react'
import { MinusIconRegular, PlusIconRegular } from './icons'

export const Cart = () => {
  const { cartItems } = useCart()
  const { theme } = useTheme()

  const cartContainerStyles: CSSProperties = {
    width: '100%',
    height: 'fit-content',
    boxShadow: '0px 2px 14px 0px rgba(0, 0, 0, 0.15)',
    background: 'var(--gray-100)',
  }

  const headerStyles: CSSProperties = {
    padding: '1.25rem',
  }

  const headingStyles: CSSProperties = {
    color: 'var(--gray-500)',
  }

  const listContainerStyles: CSSProperties = {
    listStyle: 'none',
    padding: '0.5rem 1rem',

    background: theme.backgroundColour,
  }

  const listItemStyles: CSSProperties = {
    padding: '0.5rem 0',

    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
  }

  const itemHeadingStyles: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }

  const itemPriceStyles: CSSProperties = {
    fontWeight: '500',
    fontSize: '1rem',
    color: 'var(--gray-800)',
  }

  const itemTitleStyles: CSSProperties = {
    fontWeight: '400',
    fontSize: '1rem',
    color: 'var(--gray-800)',
  }

  const itemModifierStyles: CSSProperties = {
    fontWeight: '400',
    fontSize: '1rem',
    color: 'var(--gray-400)',
  }

  const buttonControlsContainerStyles: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '1.25rem',
  }

  const buttonStyles: CSSProperties = {
    borderRadius: '100%',
    width: '1.25rem',
    height: '1.25rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    border: '0',
    outline: '0',

    background: theme.primaryColour,
    cursor: 'pointer',
  }

  const buttonIconStyles: CSSProperties = {
    width: '0.75rem',
    height: '0.75rem',

    color: theme.backgroundColour,
  }

  const totalContainerStyles: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    borderTop: '1px solid var(--gray-200)',
  }

  const subtotalHeadingStyles: CSSProperties = {
    fontWeight: '400',
    fontSize: '1rem',
    color: 'var(--gray-800)',
  }

  const subtotalAmountStyles: CSSProperties = {
    fontWeight: '500',
    fontSize: '1rem',
    color: 'var(--gray-800)',
  }

  const totalHeadingStyles: CSSProperties = {
    fontWeight: '300',
    fontSize: '1.5rem',
    color: 'var(--gray-800)',
  }

  const totalAmountStyles: CSSProperties = {
    fontWeight: '700',
    fontSize: '1.5rem',
    color: 'var(--gray-800)',
  }

  return (
    <div style={cartContainerStyles}>
      <header style={headerStyles}>
        <h2 style={headingStyles}>Carrinho</h2>
      </header>

      <ul style={listContainerStyles}>
        <li style={listItemStyles}>
          <div style={itemHeadingStyles}>
            <p style={itemTitleStyles}>Smash Brooks</p>
            <strong style={itemPriceStyles}>R$35,00</strong>
          </div>

          <span style={itemModifierStyles}>Com 2 carnes</span>

          <div style={buttonControlsContainerStyles}>
            <button style={buttonStyles}>
              <MinusIconRegular style={buttonIconStyles} />
            </button>
            1
            <button style={buttonStyles}>
              <PlusIconRegular style={buttonIconStyles} />
            </button>
          </div>
        </li>
      </ul>

      <div style={totalContainerStyles}>
        <span style={subtotalHeadingStyles}>Subtotal</span>
        <span style={subtotalAmountStyles}>R$ 22,50</span>
      </div>

      <footer style={totalContainerStyles}>
        <span style={totalHeadingStyles}>Total:</span>
        <strong style={totalAmountStyles}>R$48,00</strong>
      </footer>
    </div>
  )
}
