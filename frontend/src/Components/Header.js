import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { LinkContainer} from 'react-router-bootstrap';
const Header = () => {
  return (
<Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>MyShop</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to='/cart'>
            <Nav.Link>
              <i className="fas  fa-cart-plus"></i>
              Cart</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/login'>
            <Nav.Link>
              <i className="fas fa-user"></i>
              Sign in
            </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
</Navbar>
  )
}

export default Header;