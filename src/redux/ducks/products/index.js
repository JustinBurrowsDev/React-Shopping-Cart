// 1. imports
import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"

// 2. action definitions

const GET_PRODUCTS = "products/GET_PRODUCTS"

// 3. initial state
const initialState = {
  products: []
}

// 4. reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.payload }
    default:
      return state
  }
}

// 5. action creators
//go get the products
export function getProducts() {
  return new Promise((resolve, reject) => {
    axios
      .get("/products")
      .then(resp => {
        resolve(resp.data)
        console.log(resp.data)
      })
      .catch(e => {
        reject()
      })
  })
}

//when i click on the product i should see a overview
export function getProductView(id) {
  return new Promise((resolve, reject) => {
    axios
      .get(`./product/${id}?_embed=products`)
      .then(resp => {
        resolve(resp.data)
        console.log(resp.data)
      })
      .catch(e => {
        reject()
      })
  })
}

// 6. custom hook
export function useProducts() {
  const dispatch = useDispatch()
  const products = useSelector(appState => appState.productState.products)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return { products }
}
