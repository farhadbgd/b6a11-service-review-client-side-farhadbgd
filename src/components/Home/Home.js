import React from 'react';
import Banner from '../Banner/Banner';
import Section1 from '../Section1/Section1';
import Section2 from '../Section2/Section2';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Section1></Section1>
            <Section2></Section2>
        </div>
    );
};

export default Home;