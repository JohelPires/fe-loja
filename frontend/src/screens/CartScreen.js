import React, { useEffect } from 'react'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
  ListGroupItem,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import addToCart from '../actions/cartActions'

function CartScreen() {
  let { id } = useParams()

  const navigate = useNavigate()

  let [searchParams, setSearchParams] = useSearchParams()

  const qtd = searchParams.get('qtd') ? Number(searchParams.get('qtd')) : 1

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qtd))
    }
  }, [dispatch, id, qtd])

  function removeFromCartHandler(id) {
    console.log('remove')
  }

  function checkoutHandler() {
    navigate('/login?redirect=shipping')
  }

  return (
    <Row>
      <Col md={8}>
        <h1>Carrinho</h1>
        {cartItems.length === 0 ? (
          <Message>
            Seu carrinho esta vazio. <Link to='/'>Voltar</Link>
          </Message>
        ) : (
          <ListGroup>
            {cartItems.map((item) => (
              <ListGroupItem key={item.produto}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.nome} fluid rounded />
                  </Col>
                  <Col md={4}>
                    <Link to={`/produto/${item.produto}`}>{item.nome}</Link>
                  </Col>
                  <Col md={2}>R${item.price}</Col>
                  <Col md={2}>
                    <Form.Control
                      as='select'
                      value={item.qtd}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.produto, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type='button'
                      onClick={() => removeFromCartHandler(item.produto)}
                      className='btn btn-light'
                    >
                      <i className='fas fa-trash' />
                    </Button>
                  </Col>
                </Row>
              </ListGroupItem>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroupItem>
              <h4>
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qtd, 0)})
                itens
              </h4>
              R$
              {cartItems
                .reduce((acc, item) => acc + item.price * item.qtd, 0)
                .toFixed(2)}
            </ListGroupItem>
            <ListGroupItem className='text-center'>
              <Button
                type='button'
                className='btn-block btn-success'
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Finalizar compra
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  )
}

export default CartScreen
