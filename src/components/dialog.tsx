import { useTheme } from '@/hooks/use-theme'
import Image from 'next/image'
import { ChangeEvent, CSSProperties, useState } from 'react'
import { MinusIconRegular, PlusIconRegular, XIconRegular } from './icons'
import { useTranslations } from 'next-intl'

interface DialogProps {
  onClose: () => void
  name?: string
  description?: string
  image?: string
  section?: string
}

export const Dialog = ({
  onClose,
  description,
  name,
  image,
  section,
}: DialogProps) => {
  const [size, setSize] = useState(1)
  const { theme } = useTheme()
  const t = useTranslations()

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
    setSize(Number(event.target.value))
  }

  const handleIncreaseSize = () => {
    setSize((prev) => prev + 1)
  }

  const handleDecreaseSize = () => {
    setSize((prev) => prev - 1)
  }

  return (
    <div style={dialogOverlayStyles} onClick={onClose}>
      <div style={contentContainerStyles} onClick={(e) => e.stopPropagation()}>
        {image && (
          <div style={orderBannerStyles}>
            <button style={buttonCloseDialogStyles} onClick={onClose}>
              <XIconRegular style={iconButtonStyles} />
            </button>
            <Image
              src={image as string}
              alt="order image"
              width={480}
              height={320}
            />
          </div>
        )}

        <main style={mainContainerStyles}>
          <div style={headingContainerStyles}>
            <h2 style={orderTitleStyles}>{name}</h2>
            <p style={orderDescriptionStyles}>{description}</p>
          </div>

          <div style={labelContainerStyles}>
            <h3 style={labelTitleStyles}>{t('dialog.labelTitle')}</h3>
            <span style={labelDescriptionStyles}>
              {t('dialog.labelDescription')}
            </span>
          </div>

          <form>
            <div style={inputContainerStyles}>
              <div>
                <label style={inputLabelStyles}>
                  1 {t(`dialog.${section?.toLowerCase()}`)}
                </label>
                <span style={inputPriceStyles}>R$ 33,00</span>
              </div>

              <input
                type="radio"
                name="itemSize"
                value="1"
                checked={size === 1}
                onChange={handleOptionChange}
              />
            </div>

            <div style={inputContainerStyles}>
              <div>
                <label style={inputLabelStyles}>
                  2 {t(`dialog.${section?.toLowerCase()}`)}s
                </label>
                <span style={inputPriceStyles}>R$ 33,00</span>
              </div>

              <input
                type="radio"
                name="itemSize"
                value="2"
                checked={size === 2}
                onChange={handleOptionChange}
              />
            </div>

            <div style={inputContainerStyles}>
              <div>
                <label style={inputLabelStyles}>
                  3 {t(`dialog.${section?.toLowerCase()}`)}s
                </label>
                <span style={inputPriceStyles}>R$ 33,00</span>
              </div>

              <input
                type="radio"
                name="itemSize"
                value="3"
                checked={size === 3}
                onChange={handleOptionChange}
              />
            </div>

            <div style={inputContainerStyles}>
              <div>
                <label style={inputLabelStyles}>
                  4 {t(`dialog.${section?.toLowerCase()}`)}s
                </label>
                <span style={inputPriceStyles}>R$ 33,00</span>
              </div>

              <input
                type="radio"
                name="itemSize"
                value="4"
                checked={size === 4}
                onChange={handleOptionChange}
              />
            </div>

            <div style={inputContainerStyles}>
              <div>
                <label style={inputLabelStyles}>
                  5 {t(`dialog.${section?.toLowerCase()}`)}s
                </label>
                <span style={inputPriceStyles}>R$ 33,00</span>
              </div>

              <input
                type="radio"
                name="itemSize"
                value="5"
                checked={size === 5}
                onChange={handleOptionChange}
              />
            </div>
          </form>

          <footer style={footerContainerStyles}>
            <div style={controlsContainerStyles}>
              <button
                style={buttonSecondaryStyles}
                onClick={() => handleDecreaseSize()}
                disabled={size <= 1}
              >
                <MinusIconRegular style={iconButtonSecondaryStyles} />
              </button>
              <span style={countStyles}>{size}</span>
              <button
                style={buttonPrimaryStyles}
                onClick={() => handleIncreaseSize()}
                disabled={size >= 5}
              >
                <PlusIconRegular style={iconButtonPrimaryStyles} />
              </button>
            </div>

            <button style={addToCartButtonStyles}>
              Add to Order • R$ 11.85
            </button>
          </footer>
        </main>
      </div>
    </div>
  )
}
