// 1. imports
import axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"

// 2. action definitions
const ADD_TO_CART = "cart/add_to_cart"
const REMOVE_FROM_CART = "cart/REMOVE_FROM_CART"

// 3. initial state
const initialState = {
  cart: []
}

// 4. reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      }
    default:
      return state
  }
}

// 5. action creators
// add to cart

function addToCart(product) {
  return {
    type: ADD_TO_CART,
    payload: product
  }
}

// 6. custom hook
export function useCart() {
  const dispatch = useDispatch()
  const add = product => dispatch(addToCart(product))
  const cart = useSelector(appState => appState.cartState.cart)

  return { add, cart }
}
