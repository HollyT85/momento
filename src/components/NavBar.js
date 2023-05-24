import React from 'react'
import { Container, Navbar, Nav} from 'react-bootstrap'

const NavBar = () => {
    return (
    <Navbar bg="light" expand="md">
        <Container>
        <Navbar.Brand>Momento</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Sign In</Nav.Link>
            <Nav.Link>Join</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default NavBar