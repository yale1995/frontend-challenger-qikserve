import { useContext } from 'react'
import { SettingsContext } from '@/contexts/settings-contexts'

export const useSettings = () => {
  const context = useContext(SettingsContext)
  if (context === null) {
    throw new Error('useSettings must be used within a SettingsProvider')
  }

  return context
}
