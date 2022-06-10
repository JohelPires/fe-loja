import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import Produto from '../components/Produto'
import listProducts from '../actions/productActions'
import Loading from '../components/Loading'
import Message from '../components/Message'
// import axios from 'axios'
// import produtos from '../produtos'

function HomeScreen() {
  // const [produtos, setProdutos] = useState([])

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, produtos } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <>
      <h1>Nossos produtos</h1>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {produtos.map((produto) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <Produto produto={produto} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

export default HomeScreen
