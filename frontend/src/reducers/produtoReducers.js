import {
  PRODUCT_DETAILS_FAILED,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAILED,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from '../constants/productConstants'

function productListReducer(state = { produtos: [] }, action) {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, produtos: [] }
    case PRODUCT_LIST_SUCCESS:
      return { loaing: false, produtos: action.payload }
    case PRODUCT_LIST_FAILED:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

function productDetailsReducer(state = { produto: { reviews: [] } }, action) {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state }
    case PRODUCT_DETAILS_SUCCESS:
      return { loaing: false, produto: action.payload }
    case PRODUCT_DETAILS_FAILED:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export { productDetailsReducer, productListReducer }
