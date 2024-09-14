import { WebSettings } from '@/@types/api-type'
import { CSSProperties } from 'react'

interface BannerProps {
  theme: WebSettings
}

export const Banner = ({ theme }: BannerProps) => {
  const bannerStyle: CSSProperties = {
    height: '9.375rem',
    backgroundImage: theme.bannerImage ? `url(${theme.bannerImage})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }

  return <div style={bannerStyle} />
}
