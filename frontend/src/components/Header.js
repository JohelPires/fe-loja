import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

function Header() {
  return (
    <header>
      <Navbar bg='primary' variant='dark' expand='sm' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'>Floresta Encantadora</Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='ms-auto my-2 my-lg-0'
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href='/cart'>
                <i className='fas fa-shopping-cart'></i> Carrinho
              </Nav.Link>
              <Nav.Link href='/login'>
                <i className='fas fa-user'></i> Entrar
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
