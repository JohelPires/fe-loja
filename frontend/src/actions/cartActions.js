import axios from 'axios'
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants'

import React from 'react'

export function addToCart(id, qtd) {
  return async (dispatch, getState) => {
    const { data } = await axios.get(`/api/produtos/${id}`)

    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        produto: data._id,
        nome: data.nome,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qtd,
      },
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
  }
}

export function removeFromCart(id) {
  return (dispatch, getState) => {
    dispatch({
      type: CART_REMOVE_ITEM,
      payload: id,
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
  }
}

// export default addToCart
