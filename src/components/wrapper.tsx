import { CSSProperties, ReactNode } from 'react'

interface WrapperProps {
  children: ReactNode
}

export const Wrapper = ({ children }: WrapperProps) => {
  const wrapperStyles: CSSProperties = {
    maxWidth: '64rem',
    width: '100%',
    padding: '1rem 0',
    margin: '0 auto',
  }

  return <div style={wrapperStyles}>{children}</div>
}
