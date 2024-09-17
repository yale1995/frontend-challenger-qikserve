import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type ScreenType = 'menu' | 'cart'

interface ScreenState {
  currentScreen: ScreenType
}

const initialState: ScreenState = {
  currentScreen: 'menu',
}

const screenSlice = createSlice({
  name: 'screen',
  initialState,
  reducers: {
    setScreen: (state, action: PayloadAction<ScreenType>) => {
      state.currentScreen = action.payload
    },
  },
})

export const { setScreen } = screenSlice.actions

export default screenSlice.reducer
