'use client'

import { Venue } from '@/@types/api-type'
import { ReactNode, createContext } from 'react'

type VenueWithoutWebSettings = Omit<Venue, 'webSettings'>

interface ISettingsContext {
  settings: VenueWithoutWebSettings
}

export const SettingsContext = createContext({} as ISettingsContext)

interface SettingsProviderProps {
  children: ReactNode
  settingsData: VenueWithoutWebSettings
}

export const SettingsProvider = ({
  children,
  settingsData,
}: SettingsProviderProps) => {
  return (
    <SettingsContext.Provider value={{ settings: settingsData }}>
      {children}
    </SettingsContext.Provider>
  )
}
