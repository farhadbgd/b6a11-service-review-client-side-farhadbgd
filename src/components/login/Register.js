import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { AuthContext } from "../../Context/AuthProvider";
import useTitle from "../useTitle/useTitle";


const Register = () => {

    useTitle('register');
    const { createUser } = useContext(AuthContext);


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(e => console.error(e));
    }

    return (
        <div style={{ background: 'grey' }} className='w-50 m-auto'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name="photoURL" type="text" placeholder="Phot URL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>
                <div className="d-grid gap-2 my-4">
                    <Button variant="primary" type="submit" >
                        Register
                    </Button>
                </div>
                <div className="d-grid gap-2 my-4">
                    <Button variant="success">If you have an account, please <Link to={'/login'} className="text-dark">Login</Link></Button>{' '}
                </div>

            </Form>
        </div>
    );
};

export default Register;