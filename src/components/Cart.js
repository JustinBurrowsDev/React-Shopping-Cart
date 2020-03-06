import React from "react"
import { useCart } from "../hooks"

export default props => {
  const { cart } = useCart()

  return (
    <div className="cart">
      <h1>Cart</h1>
      {cart.map(product => (
        <div className="product cart">
          <img src={product.img.thumb} />
          <p>{product.title}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  )
}
