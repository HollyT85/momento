import React from 'react'
import { Container, Navbar, Nav} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
    <Navbar bg="light" expand="md">
        <Container>
            <NavLink to="/">
                <Navbar.Brand>Momento</Navbar.Brand>
            </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/signin">Sign In</NavLink>
                <NavLink to="/signup">Join</NavLink>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default NavBar