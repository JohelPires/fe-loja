import axios from 'axios'
import {
  PRODUCT_DETAILS_FAILED,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAILED,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from '../constants/productConstants'

function listProducts() {
  return async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_LIST_REQUEST })
      const { data } = await axios.get('/api/produtos')
      dispatch({
        type: PRODUCT_LIST_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: PRODUCT_LIST_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
}

function listProductDetails(id) {
  return async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_DETAILS_REQUEST })
      const { data } = await axios.get(`/api/produtos/${id}`)
      dispatch({
        type: PRODUCT_DETAILS_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: PRODUCT_DETAILS_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
}

export { listProductDetails }
export default listProducts
