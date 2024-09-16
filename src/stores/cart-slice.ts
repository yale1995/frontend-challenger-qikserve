'use client'

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CartItem {
  productId: number
  productName: string
  productPrice: number
  productQuantity: number
  modifierId: number | null
  modifierName: string | null
  modifierPrice: number | null
}

interface CartState {
  items: CartItem[]
  total: number
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    total: 0,
  } as CartState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload
      const existingItem = state.items.find(
        (item) => item.productId === newItem.productId,
      )

      if (existingItem) {
        existingItem.productQuantity++
      } else {
        state.items.push({ ...newItem, productQuantity: 1 })
      }
      state.total +=
        (newItem.modifierPrice ?? newItem.productPrice) *
        newItem.productQuantity
    },
  },
})

export const { addItem } = cartSlice.actions
export default cartSlice.reducer
