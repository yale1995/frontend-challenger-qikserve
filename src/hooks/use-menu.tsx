import { useContext } from 'react'
import { MenuContext } from '@/contexts/menu-context'

export const useMenu = () => {
  const context = useContext(MenuContext)
  if (context === null) {
    throw new Error('useMenu must be used within a MenuProvider')
  }

  return context
}
