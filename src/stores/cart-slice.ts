import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
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
      const existingItem = state.items.find((item) => item.id === newItem.id)

      if (existingItem) {
        existingItem.quantity++
      } else {
        state.items.push({ ...newItem, quantity: 1 })
      }
      state.total += newItem.price
    },
  },
})

export const { addItem } = cartSlice.actions
export default cartSlice.reducer
