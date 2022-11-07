import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Section1 = () => {
    return (
        <div>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=First slide&bg=f5f5f5"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>Section one</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>


            </Carousel>
        </div>
    );
};

export default Section1;