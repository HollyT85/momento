import React from 'react'
import { Container, Navbar, Nav} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext'
import Avatar from './Avatar'
import axios from 'axios'



const NavBar = () => {

    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    const handleSignOut = async () => {
    try {
        await axios.post("dj-rest-auth/logout/");
        setCurrentUser(null);
    } catch (err) {
        console.log(err);
    }
    };

    const loggedInIcons = (<>
    <NavLink to="/feed">Posts</NavLink>
    <NavLink to="/liked">Liked Posts</NavLink>
    <NavLink to="/" onClick={handleSignOut}>Sign Out</NavLink>
    <NavLink to={`/profiles/${currentUser?.profile_id}`}>Profile</NavLink>
    <Avatar src={currentUser?.profile_image} text="Profile" height={40} />
    {currentUser?.username}
    </>)
    const loggedOutIcons = (<>
        <NavLink to="/signin">Sign In</NavLink>
        <NavLink to="/signup">Join</NavLink>
    </>)
    const addPostIcon = (<>
        <NavLink to="/posts/create">New Post</NavLink>
    </>)

    return (
    <Navbar bg="light" expand="md">
        <Container>
            <NavLink to="/">
                <Navbar.Brand>Momento</Navbar.Brand>
            </NavLink>
            {currentUser && addPostIcon}
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