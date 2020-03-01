import React, { useEffect, useState } from "react"
import { getProductView } from "../actions/product.js"

export default props => {
  const [productView, setProductView] = useState([])

  useEffect(() => {
    getProductView(props.match.params.id).then(product => {
      setProductView(productView)
    })
  }, [props.match.params])

  return (
    <div>
      <h1>Product View</h1>
    </div>
  )
}
