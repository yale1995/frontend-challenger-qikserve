import { CSSProperties } from 'react'
import { SearchIconRegular } from './icons'
import { WebSettings } from '@/@types/api-type'

interface SearchInputProps {
  theme: WebSettings
}

export const SearchInput = ({ theme }: SearchInputProps) => {
  const containerStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '8px',
    border: `1px solid ${theme.primaryColour}`,
    padding: '0 14px',
    gap: '14px',
    background: 'var(--white)',
  }

  const inputStyle: CSSProperties = {
    width: '100%',
    height: '2.75rem',
    background: 'none',
    border: 'none',
  }

  const iconStyle: CSSProperties = {
    height: '1.5rem',
    width: '1.5rem',
    color: 'var(--gray-200)',
  }

  return (
    <div style={containerStyle}>
      <SearchIconRegular style={iconStyle} />
      <input placeholder="Search menu items" style={inputStyle} />
    </div>
  )
}
