'use client'

import { WebSettings } from '@/@types/api-type'
import { createContext, ReactNode } from 'react'

interface IThemeContext {
  theme: WebSettings
}

export const ThemeContext = createContext({} as IThemeContext)

interface ThemeProviderProps {
  children: ReactNode
  themeData: WebSettings
}

export const ThemeProvider = ({ children, themeData }: ThemeProviderProps) => {
  return (
    <ThemeContext.Provider value={{ theme: themeData }}>
      {children}
    </ThemeContext.Provider>
  )
}
