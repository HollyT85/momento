import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";



import { Form, Button, Image, Col, Row, Container, Alert } from "react-bootstrap";
import axios from "axios";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";

const SignInForm = () => {

    const setCurrentUser = useSetCurrentUser()

    const[signInData, setSignInData] = useState({
        user: '',
        password: '',
    })
    const {username, password} = signInData;

    const [errors, setErrors] = useState({});

    const history = useHistory();

    const handleChange = (event) =>{
        setSignInData({
            ...signInData,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const {data} = await axios.post("/dj-rest-auth/login/", signInData);
            setCurrentUser(data.user)
            history.push("/");
        } catch (err) {
            setErrors(err.response?.data);
        }
        };

    return (
    <Row>
        <Col>
        <Container>
            <h1>Sign In</h1>
            <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" name='username' value={username} onChange={handleChange} />
        </Form.Group>
        {errors.username?.map((message, idx)=> 
        <Alert variant='warning' key='idx'>{message}</Alert>)}

        <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" name='password' value={password} onChange={handleChange} />
        </Form.Group>
        {errors.password?.map((message, idx)=> 
        <Alert variant='warning' key='idx'>{message}</Alert>)}

        <Button variant="primary" type="submit">
        Sign In
        </Button>
        {errors.non_field_errors?.map((message, idx)=> 
        <Alert variant='warning' key='idx'>{message}</Alert>)}
    </Form>

        </Container>
        <Container>
            <Link to="/signup">
            Don't have an account? <span>Join us here.</span> 
            </Link>
        </Container>
        </Col>
        <Col>
        <Image
            src={
            "https://codeinstitute.s3.amazonaws.com/AdvancedReact/hero.jpg"
            }
        />
        </Col>
    </Row>
    );
};

export default SignInForm;