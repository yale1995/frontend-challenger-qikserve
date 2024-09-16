import { useTheme } from '@/hooks/use-theme'
import Image from 'next/image'
import { ChangeEvent, CSSProperties, useState } from 'react'
import { MinusIconRegular, PlusIconRegular, XIconRegular } from './icons'
import { useFormatter, useTranslations } from 'next-intl'
import { MenuItem, ModifierItem } from '@/@types/api-type'
import { useSettings } from '@/hooks/use-settings'
import { useCart } from '@/hooks/use-cart'

interface DialogProps {
  onClose: () => void
  item: MenuItem | null
}

export const Dialog = ({ onClose, item }: DialogProps) => {
  const [modifierItem, setModifierItem] = useState<ModifierItem | null>(null)
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  const { theme } = useTheme()
  const { settings } = useSettings()
  const t = useTranslations()
  const format = useFormatter()

  const dialogOverlayStyles: CSSProperties = {
    position: 'fixed',
    inset: '0',
    background: 'rgba(0, 0, 0, 0.65)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: '9999',
  }

  const contentContainerStyles: CSSProperties = {
    background: theme.backgroundColour,
    maxWidth: '30rem',
    width: '100%',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    textAlign: 'center',
  }

  const orderBannerStyles: CSSProperties = {
    maxHeight: '20rem',
    maxWidth: '30rem',
    width: '100%',
    height: '100%',
    position: 'relative',
  }

  const buttonCloseDialogStyles: CSSProperties = {
    borderRadius: '100%',
    background: 'var(--white)',
    padding: '0.5rem',
    border: '0',
    outline: '0',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    position: 'absolute',
    right: '1rem',
    top: '1.125rem',
  }

  const iconButtonStyles: CSSProperties = {
    width: '0.75rem',
    height: '0.75rem',
    color: theme.primaryColour,
    cursor: 'pointer',
  }

  const mainContainerStyles: CSSProperties = {
    padding: '0',
    position: 'relative',
    background: theme.backgroundColour,
    maxHeight: '25rem',
    overflowY: 'scroll',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
  }

  const headingContainerStyles: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    padding: '1rem',
  }

  const orderTitleStyles: CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: 'var(--gray-800)',
    textAlign: 'start',
  }

  const orderDescriptionStyles: CSSProperties = {
    fontSize: '1rem',
    fontWeight: '400',
    textAlign: 'start',
    color: 'var(--gray-400)',
  }

  const labelContainerStyles: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    padding: '1rem',
    background: 'var(--gray-100)',
  }

  const labelTitleStyles: CSSProperties = {
    fontSize: '1rem',
    color: 'var(--gray-400)',
    fontWeight: '700',
  }

  const labelDescriptionStyles: CSSProperties = {
    fontSize: '1rem',
    color: 'var(--gray-400)',
    fontWeight: '300',
  }

  const inputContainerStyles: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
  }

  const inputLabelStyles: CSSProperties = {
    fontSize: '1rem',
    fontWeight: '500',
    color: 'var(--gray-800)',
    display: 'block',
    textAlign: 'start',
  }

  const inputPriceStyles: CSSProperties = {
    fontSize: '1rem',
    fontWeight: '400',
    color: 'var(--gray-500)',
    display: 'block',
  }

  const footerContainerStyles: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.625rem',
    padding: '0.5rem 1rem 2.5rem',
    width: '100%',
    position: 'sticky',
    bottom: '0',
    background: 'rgba(255, 255, 255, 0.3)',
    backdropFilter: 'blur(2px)',
  }

  const controlsContainerStyles: CSSProperties = {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    gap: '1rem',
  }

  const buttonPrimaryStyles: CSSProperties = {
    padding: '0.5rem',
    background: theme.primaryColour,
    borderRadius: '100%',
    border: '0',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
  }

  const iconButtonPrimaryStyles: CSSProperties = {
    width: '1.125rem',
    height: '1.125rem',
    color: theme.backgroundColour,
  }

  const buttonSecondaryStyles: CSSProperties = {
    padding: '0.5rem',
    background: 'var(--gray-200)',
    borderRadius: '100%',
    border: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const iconButtonSecondaryStyles: CSSProperties = {
    width: '1.125rem',
    height: '1.125rem',
    color: 'var(--gray-100)',
  }

  const countStyles: CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: 'var(--gray-800)',
  }

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

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setModifierItem(JSON.parse(event.target.value))
  }

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const handleDecreaseQuantity = () => {
    setQuantity((prev) => prev - 1)
  }

  const handleAddToCart = () => {
    addToCart({
      productId: item?.id as number,
      productName: item?.name as string,
      productPrice: item?.price as number,
      productQuantity: quantity,
      modifierId: modifierItem?.id ?? null,
      modifierName: modifierItem?.name ?? null,
      modifierPrice: modifierItem?.price ?? null,
    })

    onClose()
  }

  return (
    <div style={dialogOverlayStyles} onClick={onClose}>
      <div style={contentContainerStyles} onClick={(e) => e.stopPropagation()}>
        {item?.images && (
          <div style={orderBannerStyles}>
            <button style={buttonCloseDialogStyles} onClick={onClose}>
              <XIconRegular style={iconButtonStyles} />
            </button>
            <Image
              src={item?.images[0].image as string}
              alt="order image"
              width={480}
              height={320}
            />
          </div>
        )}

        <main style={mainContainerStyles}>
          <div style={headingContainerStyles}>
            <h2 style={orderTitleStyles}>{item?.name}</h2>
            <p style={orderDescriptionStyles}>{item?.description}</p>
          </div>

          {item?.modifiers?.map((modifier) => (
            <>
              <div style={labelContainerStyles} key={modifier.id}>
                <h3 style={labelTitleStyles}>{modifier?.name}</h3>
                <span style={labelDescriptionStyles}>
                  {t('dialog.labelDescription')}
                </span>
              </div>

              <form>
                {modifier.items.map((item) => (
                  <div style={inputContainerStyles} key={item.id}>
                    <div>
                      <label htmlFor={item.name} style={inputLabelStyles}>
                        {item.name}
                      </label>
                      <span style={inputPriceStyles}>
                        {format.number(item?.price, {
                          style: 'currency',
                          currency: settings.ccy,
                        })}
                      </span>
                    </div>

                    <input
                      id={item.name}
                      type="radio"
                      name="modifier"
                      value={JSON.stringify(item)}
                      checked={item.id === modifierItem?.id}
                      onChange={handleOptionChange}
                    />
                  </div>
                ))}
              </form>
            </>
          ))}

          <footer style={footerContainerStyles}>
            <div style={controlsContainerStyles}>
              <button
                style={buttonSecondaryStyles}
                onClick={() => handleDecreaseQuantity()}
                disabled={quantity <= 1}
              >
                <MinusIconRegular style={iconButtonSecondaryStyles} />
              </button>
              <span style={countStyles}>{quantity}</span>
              <button
                style={buttonPrimaryStyles}
                onClick={() => handleIncreaseQuantity()}
              >
                <PlusIconRegular style={iconButtonPrimaryStyles} />
              </button>
            </div>

            <button style={addToCartButtonStyles} onClick={handleAddToCart}>
              {t('dialog.addToCartButton')} •{' '}
              {format.number(
                Number(modifierItem ? modifierItem?.price : item?.price) *
                  quantity,
                {
                  style: 'currency',
                  currency: settings.ccy,
                },
              )}
            </button>
          </footer>
        </main>
      </div>
    </div>
  )
}
