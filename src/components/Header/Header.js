import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Image, NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AuthContext } from '../../Context/AuthProvider';
import { FaUser } from 'react-icons/fa';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="white">

                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src="./favicon.png"
                            width="60"
                            height="60"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Brand style={{ fontSize: '25px', color: 'orange', fontWeight: 'bold', fontStyle: 'italic' }} href="/">Happy Smile</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav style={{ fontSize: '20px', color: 'orange', fontWeight: 'bold' }} className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/blog">Blog</Nav.Link>
                            <Nav.Link href="/services">Services</Nav.Link>

                        </Nav>
                        <Nav>

                            <NavLink className="d-flex align-items-center px-2 text-dark" style={{ textDecoration: 'none' }}>

                                {
                                    user?.uid ?
                                        <>
                                            <span>{user?.displayName ? user.displayName : user.email}</span>
                                            <Link variant="light" onClick={handleLogOut} className="d-flex align-items-center px-2" style={{ textDecoration: 'none', fontSize: '15px', color: 'red', fontWeight: 'bold' }}>Logout</Link>
                                            <Link variant="light" to={'/addservice'} className="d-flex align-items-center px-2" style={{ textDecoration: 'none', fontSize: '15px', color: 'green', fontWeight: 'bold' }}>Add Service</Link>
                                            <Link variant="light" to={'/myreview'} className="d-flex align-items-center px-2 " style={{ textDecoration: 'none', fontSize: '15px', color: 'orange', fontWeight: 'bold' }}>My Reviews</Link>
                                        </>
                                        :
                                        <>
                                            <Link to='/login' className="d-flex align-items-center px-2 text-dark" style={{ textDecoration: 'none' }}>Login</Link>
                                            <Link to='/register' className="d-flex align-items-center px-2 text-dark" style={{ textDecoration: 'none' }}>Register</Link>
                                        </>
                                }

                            </NavLink>

                            <NavLink title={user?.displayName} className="d-flex align-items-center px-2 text-dark" style={{ textDecoration: 'none' }}>
                                {user?.photoURL ?
                                    <Image
                                        style={{ height: '30px' }}
                                        roundedCircle
                                        src={user?.photoURL}>
                                    </Image>
                                    : <FaUser></FaUser>

                                }

                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;

