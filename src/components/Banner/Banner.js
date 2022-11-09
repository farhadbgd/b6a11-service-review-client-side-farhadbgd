import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import slide1 from './slide1.jpg'
import slide2 from './slide2.jpg'
import slide3 from './slide3.jpg'

const Banner = () => {
    return (
        <div>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5 style={{ fontSize: '25px', color: 'red', fontWeight: 'bold' }}>FEEL GREAT ABOUT
                            YOUR SMILE</h5>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5 style={{ fontSize: '25px', color: 'red', fontWeight: 'bold' }}>
                            We are a focused <br></br>
                            on dental <span style={{ fontSize: '25px', color: 'green', fontWeight: 'bold' }}>hygiene</span><br></br>
                            and teeth <span style={{ fontSize: '25px', color: 'white', fontWeight: 'bold' }}>whitening</span></h5>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5 style={{ fontSize: '25px', color: 'red', fontWeight: 'bold', fontStyle: 'italic' }}>
                            <span>Smile With Confidence</span> <br></br>
                            <span style={{ fontSize: '25px', color: 'green', fontWeight: 'bold', fontStyle: 'italic' }}>PERSONALIZED</span><br></br>
                            <span style={{ fontSize: '25px', color: 'white', fontWeight: 'bold', fontStyle: 'italic' }}>HIGH QUALITY DENTAL CARE</span></h5>
                        <h5>
                        </h5>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;