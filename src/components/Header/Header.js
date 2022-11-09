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

    console.log(user)
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
                    <Navbar.Brand href="/">Happy Smile</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/blog">Blog</Nav.Link>
                            <Nav.Link href="/services">Services</Nav.Link>
                            <NavDropdown title="Services" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.2">
                                    Teeth Cleaning
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.2">
                                    Teeth Whitening
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.2">
                                    Dental Extractions
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Root Canals
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>

                            <NavLink className="d-flex align-items-center px-2 text-dark" style={{ textDecoration: 'none' }}>

                                {
                                    user?.uid ?
                                        <>
                                            <span>{user?.displayName ? user.displayName : user.email}</span>
                                            <Link variant="light" onClick={handleLogOut} className="d-flex align-items-center px-2 text-dark" style={{ textDecoration: 'none' }}>Logout</Link>
                                            <Link variant="light" onClick={handleLogOut} className="d-flex align-items-center px-2 text-dark" style={{ textDecoration: 'none' }}>Add Service</Link>
                                            <Link variant="light" onClick={handleLogOut} className="d-flex align-items-center px-2 text-dark" style={{ textDecoration: 'none' }}>See Your Review</Link>
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

