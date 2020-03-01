import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getProducts } from "../actions/product.js"
import "../styles/Products.css"

console.log(getProducts)
export default props => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    // getProduct(props.match.params.id).then(data => {
    //   setProduct(data)
    // })

    getProducts().then(data => setProducts(data))
  }, [props.match.params])

  return (
    <div className="grid">
      {products.map(product => (
        <div key={product.id}>
          <p>FREE SHIPPING</p>
          <img src={`/assets/${product.sku}_1.jpg`} />
          <Link to={"/product/" + product.id}>{product.title}</Link>
          <p>{product.price}</p>
          <button>Add To Cart</button>
        </div>
      ))}
    </div>
  )
}
