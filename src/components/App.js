import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import Products from "./Products"
import ProductView from "./ProductView"

export default props => {
  return (
    <Router>
      <div className="wrapper">
        <Route exact path="/" component={Products} />
        <Route path="/product/:id" component={ProductView} />
      </div>
    </Router>
  )
}
