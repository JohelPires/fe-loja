import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import produtos from '../produtos'
import { useParams, useNavigate, Link } from 'react-router-dom'
import {
  Col,
  Row,
  Image,
  ListGroup,
  ListGroupItem,
  Card,
  Button,
  Form,
} from 'react-bootstrap'
import Rating from '../components/Rating'
import { listProductDetails } from '../actions/productActions'
import Loading from '../components/Loading'
import Message from '../components/Message'

function ProductScreen() {
  let { id } = useParams()
  const navigate = useNavigate()
  // const produto = produtos.find((p) => p._id === id)

  const [qtd, setQtd] = useState(1)

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, produto } = productDetails

  useEffect(() => {
    dispatch(listProductDetails(id))
  }, [dispatch])

  function addToCartHandler() {
    navigate(`/cart/${id}?qtd=${qtd}`)
  }

  return (
    <div>
      <Link className='btn btn-primary my-3 py-2' to='/'>
        Voltar
      </Link>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant='danger' children={error} />
      ) : (
        <Row>
          <Col md={4}>
            <Image src={produto.image} alt={produto.nome} fluid />
          </Col>
          <Col md={5}>
            <ListGroup variant='flush'>
              <ListGroupItem>
                <h3>{produto.nome}</h3>
              </ListGroupItem>
              <ListGroupItem>
                <Rating
                  value={produto.rating}
                  numReviews={produto.numReviews}
                />
              </ListGroupItem>
              <ListGroupItem>
                <h4>R${produto.price}</h4>
              </ListGroupItem>
              <ListGroupItem>
                <p>{produto.description}</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroupItem>
                  <Row>
                    <Col>Preço:</Col>
                    <Col>
                      <strong>R${produto.price}</strong>
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {produto.countInStock > 0 ? (
                        <p>Disponível</p>
                      ) : (
                        <p>Produto indisponível</p>
                      )}
                    </Col>
                  </Row>
                </ListGroupItem>

                {produto.countInStock > 0 && (
                  <ListGroupItem>
                    <Row>
                      <Col>Quantidade:</Col>
                      <Col>
                        <Form.Control
                          as='select'
                          value={qtd}
                          onChange={(e) => setQtd(e.target.value)}
                        >
                          {[...Array(produto.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroupItem>
                )}

                <ListGroupItem className='text-center'>
                  <Button
                    onClick={addToCartHandler}
                    className='btn-block btn-success'
                    type='button'
                    disabled={produto.countInStock === 0}
                  >
                    Adicionar ao carrinho
                  </Button>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  )
}

export default ProductScreen
