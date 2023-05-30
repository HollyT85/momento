import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";



import { Form, Button, Image, Col, Row, Container, Alert } from "react-bootstrap";
import axios from "axios";

const SignUpForm = () => {

    const[signUpData, setSignUpData] = useState({
        user: '',
        password1: '',
        password2: '',
    })
    const {username, password1, password2} = signUpData;

    const [errors, setErrors] = useState({});

    const history = useHistory();

    const handleChange = (event) =>{
        setSignUpData({
            ...signUpData,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("/dj-rest-auth/registration/", signUpData);
            history.push("/signin");
        } catch (err) {
            setErrors(err.response?.data);
        }
        };

    return (
    <Row>
        <Col>
        <Container>
            <h1>sign up</h1>
            <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" name='username' value={username} onChange={handleChange} />
        </Form.Group>
        {errors.username?.map((message, idx)=> 
        <Alert variant='warning' key='idx'>{message}</Alert>)}

        <Form.Group className="mb-3" controlId="password1">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" name='password1' value={password1} onChange={handleChange} />
        </Form.Group>
        {errors.password1?.map((message, idx)=> 
        <Alert variant='warning' key='idx'>{message}</Alert>)}

        <Form.Group className="mb-3" controlId="password2">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Re-enter password" name='password2' value={password2} onChange={handleChange} />
        </Form.Group>
        {errors.password2?.map((message, idx)=> 
        <Alert variant='warning' key='idx'>{message}</Alert>)}

        <Button variant="primary" type="submit">
        Submit
        </Button>
        {errors.non_field_errors?.map((message, idx)=> 
        <Alert variant='warning' key='idx'>{message}</Alert>)}
    </Form>

        </Container>
        <Container>
            <Link to="/signin">
            Already have an account? <span>Sign in</span>
            </Link>
        </Container>
        </Col>
        <Col>
        <Image
            src={
            "https://codeinstitute.s3.amazonaws.com/AdvancedReact/hero2.jpg"
            }
        />
        </Col>
    </Row>
    );
};

export default SignUpForm;