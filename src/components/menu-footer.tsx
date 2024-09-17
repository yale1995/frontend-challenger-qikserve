'use client'

import { useCart } from '@/hooks/use-cart'
import { useScreen } from '@/hooks/use-screen'
import { useTheme } from '@/hooks/use-theme'
import Link from 'next/link'
import { CSSProperties } from 'react'

export const MenuFooter = () => {
  const { theme } = useTheme()
  const { changeScreen } = useScreen()
  const { cartItems } = useCart()

  const addToCartButtonStyles: CSSProperties = {
    background: theme.primaryColour,
    color: theme.backgroundColour,
    fontWeight: 500,
    fontSize: '1.125rem',
    textAlign: 'center',
    height: '2.5rem',
    width: '100%',
    borderRadius: '40px',
    border: '0',
    outline: '0',
  }

  const linkStyles: CSSProperties = {
    textAlign: 'center',
    display: 'block',

    color: theme.primaryColour,
    fontWeight: '700',
    fontSize: '1rem',
  }

  return (
    <footer style={{ background: 'var(--gray-100)' }}>
      <div style={{ padding: '1.5rem' }}>
        <Link style={linkStyles} href="">
          View allergy information
        </Link>
      </div>

      <div style={{ padding: '0.5rem 1.5rem 1.5rem' }}>
        <button
          style={addToCartButtonStyles}
          onClick={() => changeScreen('cart')}
        >
          Your basket{' '}
          {cartItems.length > 0 &&
            `• ${cartItems.length} ${cartItems.length > 1 ? 'items' : 'item'}`}
        </button>
      </div>
    </footer>
  )
}
