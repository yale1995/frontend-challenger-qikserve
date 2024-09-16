'use client'

import { useCart } from '@/hooks/use-cart'
import { useTheme } from '@/hooks/use-theme'
import { CSSProperties } from 'react'
import { MinusIconRegular, PlusIconRegular } from './icons'
import { useFormatter, useTranslations } from 'next-intl'
import { useSettings } from '@/hooks/use-settings'

export const Cart = () => {
  const { cartItems, cartTotal } = useCart()
  const { theme } = useTheme()
  const format = useFormatter()
  const { settings } = useSettings()
  const t = useTranslations()

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
    background: theme.backgroundColour,
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
        <h2 style={headingStyles}>{t('cart.title')}</h2>
      </header>

      {cartItems.length > 0 ? (
        <ul style={listContainerStyles}>
          {cartItems.map((item) => (
            <li style={listItemStyles} key={item.productId}>
              <div style={itemHeadingStyles}>
                <p style={itemTitleStyles}>{item.productName}</p>
                <strong style={itemPriceStyles}>
                  {format?.number(item?.productPrice, {
                    style: 'currency',
                    currency: settings.ccy,
                  })}
                </strong>
              </div>

              {item.modifierName && (
                <span style={itemModifierStyles}>Com {item.modifierName}</span>
              )}

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
          ))}
        </ul>
      ) : (
        <div style={totalContainerStyles}>
          <span style={subtotalHeadingStyles}>{t('cart.emptyCart')}</span>
        </div>
      )}

      {cartItems.length > 0 && (
        <div style={totalContainerStyles}>
          <span style={subtotalHeadingStyles}>Subtotal</span>
          <span style={subtotalAmountStyles}>
            {' '}
            {format?.number(cartTotal, {
              style: 'currency',
              currency: settings.ccy,
            })}
          </span>
        </div>
      )}

      {cartItems.length > 0 && (
        <footer style={totalContainerStyles}>
          <span style={totalHeadingStyles}>Total:</span>
          <strong style={totalAmountStyles}>
            {format?.number(cartTotal, {
              style: 'currency',
              currency: settings.ccy,
            })}
          </strong>
        </footer>
      )}
    </div>
  )
}
