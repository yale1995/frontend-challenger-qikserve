'use client'

import { useCart } from '@/hooks/use-cart'

export const Cart = () => {
  const { cartItems } = useCart()

  return (
    <div>
      <h1>cart</h1>

      {cartItems.map((item) => (
        <span key={item.productId}>{item.productName}</span>
      ))}
    </div>
  )
}
