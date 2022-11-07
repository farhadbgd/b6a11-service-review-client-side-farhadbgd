import React from 'react';
import { Outlet } from 'react-router-dom';
import CarouselSection from '../../Carousel/CarouselSection';

import Service from '../../Service/Service';
import Header from '../Header/Header';

import Section1 from '../Section1/Section1';
import Section2 from '../Section2/Section2';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <CarouselSection></CarouselSection>
            <Service></Service>
            <Outlet></Outlet>
            <Section1></Section1>
            <Section2></Section2>


        </div >
    );
};

export default Main;