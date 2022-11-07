import React from 'react';
import { Link } from 'react-router-dom';



const Footer = () => {

    return (
        <div className='my-4 text-center bg-info'>

            <Link className='mx-2 text-dark'>Terms of Use</Link>
            <Link className='mx-2 text-dark'>Privacy Policy</Link>
            <Link className='mx-2 text-dark'>Refund Policy</Link>
            <Link className='mx-2 text-dark'>Terms of Use</Link>
            <Link className='mx-2 text-dark'>Reschedule Policy</Link> <br></br>

            © 2009-2022 – Developer Program. All Rights Reserved.

        </div>


    );
};

export default Footer;