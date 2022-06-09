function productListReducer(state = { produtos: [] }, action) {
  switch (action.type) {
    case 'PRODUCT_LIST_REQUEST':
      return { loading: true, produtos: [] }
    case 'PRODUCT_LIST_SUCCESS':
      return { loaing: false, produtos: action.payload }
    case 'PRODUCT_LIST_FAILED':
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export default productListReducer
