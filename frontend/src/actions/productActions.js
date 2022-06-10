import axios from 'axios'

function listProducts() {
  return async (dispatch) => {
    try {
      dispatch({ type: 'PRODUCT_LIST_REQUEST' })
      const { data } = await axios.get('/api/produtos')
      dispatch({
        type: 'PRODUCT_LIST_SUCCESS',
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: 'PRODUCT_LIST_FAIL',
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
}

export default listProducts
