import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

function Produto({ produto }) {
  return (
    <Card className='my-3 p-3 rounded tamanho-do-cartao-custom-css'>
      <Link to={`/product/${produto._id}`}>
        <Card.Img src={produto.image} variant='top' />
      </Link>
      <Card.Body>
        <Link to={`/product/${produto._id}`}>
          <Card.Title as='div'>
            <strong>{produto.nome}</strong>
          </Card.Title>
        </Link>
      </Card.Body>
      <Card.Text as='div'>
        <Rating value={produto.rating} numReviews={produto.numReviews} />
      </Card.Text>
      <Card.Text as='h3'>R${produto.price}</Card.Text>
    </Card>
  )
}

export default Produto
