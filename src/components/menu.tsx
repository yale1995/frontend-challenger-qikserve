'use client'

import { useTheme } from '@/hooks/use-theme'
import { CSSProperties, PropsWithChildren, ReactNode, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronTopIconRegular } from './icons'
import { useMenu } from '@/hooks/use-menu'

export const MenuRestaurant = () => {
  const { theme } = useTheme()
  const { menu } = useMenu()

  const [activeTab, setActiveTab] = useState(menu.sections[0]?.name || '')

  const containerStyles: CSSProperties = {
    background: theme.backgroundColour,
    padding: '1.25rem 1rem',
    boxShadow: '0px 2px 14px 0px rgba(0, 0, 0, 0.15)',
  }

  return (
    <div style={containerStyles}>
      <MenuTabs>
        {menu.sections.map((section) => (
          <TabItem
            key={section.id}
            href={`#${section.name}`}
            label={section.name}
            image={section.images[0].image}
            isActive={activeTab === section.name}
            onClick={() => setActiveTab(section.name)}
          />
        ))}
      </MenuTabs>

      {menu.sections.map((section) => (
        <MenuSection key={section.id} title={section.name}>
          {section.items.map((item) => (
            <MenuItem
              key={item.id}
              price={`R$${item.price.toFixed(2)}`}
              name={item.name}
              description={item.description}
              image={item.images && item.images[0] ? item.images[0].image : ''}
            />
          ))}
        </MenuSection>
      ))}
    </div>
  )
}

export const MenuTabs = ({ children }: PropsWithChildren) => {
  const tabsStyles: CSSProperties = {
    padding: '1.25rem 1rem 1.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.1875rem',
  }

  return <section style={tabsStyles}>{children}</section>
}

interface TabItemProps {
  href: string
  label: string
  image: string
  isActive: boolean
  onClick: () => void
}

export const TabItem = ({
  href,
  label,
  image,
  isActive = false,
  onClick,
}: TabItemProps) => {
  const { theme } = useTheme()

  const tabStyle: CSSProperties = {
    width: '6.5rem',
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
  }

  const imageStyles: CSSProperties = {
    width: '4.625rem',
    height: '4.625rem',
    borderRadius: '100%',
    objectFit: 'cover',
  }

  const activeImageStyles: CSSProperties = {
    width: '4.625rem',
    height: '4.625rem',
    borderRadius: '100%',
    objectFit: 'cover',
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

  return (
    <div style={tabStyle} onClick={onClick}>
      <Link href={href}>
        <Image
          src={image}
          alt={label}
          style={isActive ? activeImageStyles : imageStyles}
          width={82}
          height={82}
        />
      </Link>
      <span style={isActive ? activeLabelStyle : labelStyle}>{label}</span>
    </div>
  )
}

interface MenuSectionProps {
  title: string
  children: ReactNode
}

export const MenuSection = ({ title, children }: MenuSectionProps) => {
  const { theme } = useTheme()
  const [isOpen, setIsOpen] = useState(true)

  const toggleSection = () => setIsOpen(!isOpen)

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
    transform: isOpen ? 'rotate(0deg)' : 'rotate(180deg)',
    transition: 'transform 0.3s ease',
  }

  const headingSectionIconStyles: CSSProperties = {
    width: '1.5rem',
    height: '1.5rem',
    color: theme.primaryColour,
  }

  return (
    <section id={title}>
      <div style={headingSectionStyles}>
        <h2 style={headingSectionLabelStyles}>{title}</h2>
        <button style={headingSectionButtonStyles} onClick={toggleSection}>
          <ChevronTopIconRegular style={headingSectionIconStyles} />
        </button>
      </div>
      {isOpen && <ul>{children}</ul>}
    </section>
  )
}

interface MenuItemProps {
  name: string
  description?: string
  price: string
  image?: string
}

export const MenuItem = ({
  name,
  description,
  price,
  image,
}: MenuItemProps) => {
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

    maxWidth: '424px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
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
    <li style={itemStyles}>
      <div style={itemInfoStyles}>
        <span style={itemInfoLabelStyles}>{name}</span>
        {description && <p style={itemInfoDetailStyles}>{description}</p>}
        <span style={itemInfoPriceStyles}>{price}</span>
      </div>
      <div style={itemImageContainerStyles}>
        {image && (
          <Image
            src={image}
            alt={name}
            style={itemImagemStyles}
            width={128}
            height={85}
          />
        )}
      </div>
    </li>
  )
}
