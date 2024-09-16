// /folder/useCart.ts

import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '@/stores/store'
import { addItem, CartItem } from '@/stores/cart-slice'

export const useCart = () => {
  const dispatch = useDispatch<AppDispatch>()
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const cartTotal = useSelector((state: RootState) => state.cart.total)

  const addToCart = (item: CartItem) => {
    dispatch(addItem(item))
  }

  return {
    cartItems,
    cartTotal,
    addToCart,
  }
}
