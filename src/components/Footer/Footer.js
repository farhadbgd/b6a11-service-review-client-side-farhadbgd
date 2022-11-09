import React from 'react';
import { FaFacebook, FaInstagram, FaSmile, FaTwitter, FaYahoo } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="page-footer font-small blue pt-4 mt-4" style={{ backgroundColor: 'orange' }}>
                <div className="container-fluid text-left text-md-left">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <p>Hello!<br></br>
                                I'm a dentist who fears going to the dentist.<br></br>
                                Dentistry, differently.<br></br>
                                No white coats. No judgments. No pressure. A place where we take dentistry seriously, but not ourselves. A place to laugh, have fun, and be family.<br></br>
                            </p>
                        </div>

                        <hr className="clearfix w-100 d-md-none pb-0" />

                        <div className="col-md-3 mb-md-0 mb-3 text-center">
                            <p style={{ fontSize: '25px', color: 'green', fontWeight: 'bold', fontStyle: 'italic' }} href="/">Happy Smile</p>
                            <FaSmile style={{ fontSize: '50px', color: 'white', fontWeight: 'bold', fontStyle: 'italic' }} ></FaSmile>

                        </div>

                        <div className="col-md-3 mb-md-0 mb-3">
                            <p className="text-center" >Find us</p>
                            <ul style={{ fontSize: '25px', margin: '20px' }}>
                                <Link><FaTwitter style={{ fontSize: '25px', margin: '20px' }}></FaTwitter></Link>
                                <Link><FaInstagram style={{ fontSize: '25px', margin: '20px' }}></FaInstagram></Link>
                                <Link><FaYahoo style={{ fontSize: '25px', margin: '20px' }}></FaYahoo></Link>

                                <Link><FaFacebook style={{ fontSize: '25px' }}></FaFacebook></Link>

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright text-center pb-3">© 2020 Copyright:
                    <a href="https://mdbootstrap.com/"> happy_smile.com</a>
                </div>

            </footer>
        </div>
    );
};

export default Footer;