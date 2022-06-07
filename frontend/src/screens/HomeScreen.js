import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Produto from '../components/Produto'
import produtos from '../produtos'

function HomeScreen() {
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
