import { useTheme } from '@/hooks/use-theme'
import Image from 'next/image'
import { CSSProperties } from 'react'
import { MinusIconRegular, PlusIconRegular, XIconRegular } from './icons'

interface DialogProps {
  onClose: () => void
}

export const Dialog = ({ onClose }: DialogProps) => {
  const { theme } = useTheme()

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


  return (
    <div style={dialogOverlayStyles} onClick={onClose}>
      <div style={contentContainerStyles} onClick={(e) => e.stopPropagation()}>
        <div style={orderBannerStyles}>
          <button style={buttonCloseDialogStyles} onClick={onClose}>
            <XIconRegular style={iconButtonStyles} />
          </button>
          <Image
            src="https://preodemo.gumlet.io/usr/venue/7602/menuItem/646fbdc8cecca.png"
            alt="order image"
            width={480}
            height={320}
          />
        </div>

        <main style={mainContainerStyles}>
          <div style={headingContainerStyles}>
            <h2 style={orderTitleStyles}>Smash Brooks</h2>
            <p style={orderDescriptionStyles}>
              100g pressed hamburger, mozzarella cheese, pickles, red onion,
              grilled bacon and traditional Heinz mayonnaise.
            </p>
          </div>

          <div style={labelContainerStyles}>
            <h3 style={labelTitleStyles}>Choose your size</h3>
            <span style={labelDescriptionStyles}>Select 1 option</span>
          </div>

          <form>
            <div style={inputContainerStyles}>
              <div>
                <label style={inputLabelStyles}>1 meat</label>
                <span style={inputPriceStyles}>R$ 33,00</span>
              </div>

              <input type="radio" />
            </div>

            <div style={inputContainerStyles}>
              <div>
                <label style={inputLabelStyles}>2 meats</label>
                <span style={inputPriceStyles}>R$ 33,00</span>
              </div>

              <input type="radio" />
            </div>

            <div style={inputContainerStyles}>
              <div>
                <label style={inputLabelStyles}>3 meats</label>
                <span style={inputPriceStyles}>R$ 33,00</span>
              </div>

              <input type="radio" />
            </div>

            <div style={inputContainerStyles}>
              <div>
                <label style={inputLabelStyles}>5 meats</label>
                <span style={inputPriceStyles}>R$ 33,00</span>
              </div>

              <input type="radio" />
            </div>

            <div style={inputContainerStyles}>
              <div>
                <label style={inputLabelStyles}>5 meats</label>
                <span style={inputPriceStyles}>R$ 33,00</span>
              </div>

              <input type="radio" />
            </div>
          </form>

          <footer style={footerContainerStyles}>
            <div style={controlsContainerStyles}>
              <button style={buttonSecondaryStyles}>
                <MinusIconRegular style={iconButtonSecondaryStyles} />
              </button>
              <span style={countStyles}>1</span>
              <button style={buttonPrimaryStyles}>
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
