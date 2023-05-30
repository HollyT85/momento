import React from 'react'
import { Container, Navbar, Nav} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useCurrentUser } from '../contexts/CurrentUserContext'

const NavBar = () => {

    const currentUser = useCurrentUser()
    const loggedInIcons = (<>{currentUser?.username}</>)
    const loggedOutIcons = (<>
        <NavLink to="/signin">Sign In</NavLink>
        <NavLink to="/signup">Join</NavLink>
    </>)

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
            </Nav>
            {currentUser ? loggedInIcons : loggedOutIcons}
        </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default NavBar