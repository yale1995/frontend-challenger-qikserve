'use client'

import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart-slice'
import screenReducer from './screen-slice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    screen: screenReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
