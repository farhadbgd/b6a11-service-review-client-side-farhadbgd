import React from 'react';
import { Outlet } from 'react-router-dom';
import AddService from '../AddService/AddService';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Section1 from '../Section1/Section1';
import Section2 from '../Section2/Section2';
import Service from '../Service/Service';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>

            <Footer></Footer>

        </div >
    );
};

export default Main;