import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getProducts, useCart } from "../hooks"
import "../styles/Products.css"
import Cart from "./Cart"

console.log(getProducts)
export default props => {
  const [products, setProducts] = useState([])
  const { add } = useCart()

  useEffect(() => {
    getProducts(props.match.params.id).then(data => {
      setProducts(data)
    })

    getProducts().then(data => setProducts(data))
  }, [props.match.params])

  return (
    <div className="productContainer">
      <div className="products">
        {products.map(product => (
          <div className="product" key={product.id}>
            <p className="free">FREE SHIPPING</p>
            <img src={product.img.normal} />
            <Link className="productTitle" to={"/product/" + product.id}>
              {product.title}
            </Link>
            <hr></hr>
            <p>{product.price}</p>
            <button onClick={e => add(product)}>Add To Cart</button>
          </div>
        ))}
      </div>
      <div className="cart">
        <React.Fragment>
          <Cart />
        </React.Fragment>
      </div>
    </div>
  )
}
