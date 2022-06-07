import React from 'react'
import { Card } from 'react-bootstrap'

function Produto({ produto }) {
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`/product/${produto._id}`}>
        <Card.Img src={produto.image} variant='top' />
      </a>

      <Card.Body>
        <a
          className='text-decoration-none text-reset'
          href={`/product/${produto._id}`}
        >
          <Card.Title as='div'>
            <strong>{produto.nome}</strong>
          </Card.Title>
        </a>
      </Card.Body>
      <Card.Text as='div'>
        <div className='my-3'>
          {produto.rating} de {produto.numReviews} avaliações.
        </div>
      </Card.Text>
      <Card.Text as='h3'>R${produto.price}</Card.Text>
    </Card>
  )
}

export default Produto
