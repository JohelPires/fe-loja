import { CART_ADD_ITEM } from '../constants/cartConstants'

import React from 'react'

function cartReducer(state = { cartItems: [] }, action) {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload

      const existItem = state.cartItems.find((x) => x.produto === item.produto)

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.produto === existItem.produto ? item : x
          ),
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        }
      }
      break

    default:
      return state
      break
  }
}

export default cartReducer
