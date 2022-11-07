import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../Banner/Banner';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Section1 from '../Section1/Section1';
import Section2 from '../Section2/Section2';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>

            <Outlet></Outlet>
            <Section1></Section1>
            <Section2></Section2>
            <Home></Home>
            <Footer></Footer>




        </div >
    );
};

export default Main;