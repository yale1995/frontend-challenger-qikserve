'use client'

import { Menu } from '@/@types/api-type'
import { createContext, ReactNode } from 'react'

interface IMenuContext {
  menu: Menu
}

export const MenuContext = createContext({} as IMenuContext)

interface ThemeProviderProps {
  children: ReactNode
  menuData: Menu
}

export const MenuProvider = ({ children, menuData }: ThemeProviderProps) => {
  return (
    <MenuContext.Provider value={{ menu: menuData }}>
      {children}
    </MenuContext.Provider>
  )
}
