'use client'

import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '@/stores/store'
import { ScreenType, setScreen } from '@/stores/screen-slice'

export const useScreen = () => {
  const dispatch = useDispatch<AppDispatch>()
  const currentScreen = useSelector(
    (state: RootState) => state.screen.currentScreen,
  )

  const changeScreen = (screen: ScreenType) => {
    dispatch(setScreen(screen))
  }

  return {
    currentScreen,
    changeScreen,
  }
}
