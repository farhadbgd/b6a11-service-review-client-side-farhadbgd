import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../useTitle/useTitle';

const Login = () => {
    useTitle('login');
    const [error, setError] = useState('');
    const { signIn, setLoading, providerLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider()
    const from = location.state?.from?.pathname || '/';

    const googleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                navigate(from, { replace: true });

            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    const gitSignIn = () => {
        providerLogin(gitProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                navigate(from, { replace: true });

            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true });

            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })


    }

    return (
        <div style={{ background: 'orange' }} className='w-50 m-auto'>
            <div >
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Password" required />
                    </Form.Group>
                    <div className="d-grid gap-2 my-4">
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </div>
                    <Form.Text className="text-danger">
                        {error}
                    </Form.Text>
                </Form>
            </div>
            <div className="d-grid gap-2 my-4">
                <Button onClick={googleSignIn} variant="primary">Log in with Gmail</Button>{' '}
            </div>
            <div className="d-grid gap-2 my-4">
                <Button onClick={gitSignIn} variant="success">Log in with Git</Button>{' '}
            </div>
            <div className="d-grid gap-2 my-4">
                <Button variant="success">If you have no account, please <Link to={'/register'} className="text-dark">Register</Link></Button>{' '}
            </div>
        </div>
    );
};

export default Login;