import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Produto from '../components/Produto'
import axios from 'axios'
// import produtos from '../produtos'

function HomeScreen() {
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    const fetchProdutos = async () => {
      const { data } = await axios.get('/api/produtos/')

      setProdutos(data)
    }

    fetchProdutos()
  }, [])

  return (
    <>
      <h1>Nossos produtos</h1>
      <Row>
        {produtos.map((produto) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Produto produto={produto} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
