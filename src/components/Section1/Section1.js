import React from 'react';
import image1 from './image1.jpg'

const Section1 = () => {
    return (
        <div >

            <div style={{
                width: '100%', height: '500px',
                backgroundImage: `url(${image1})`,
                backgroundPosition: 'center',
                backgroundSize: 'fluid',
            }}>


                <div className='text-center fw-5'>
                    <h1 className='my-4' style={{ fontSize: '40px', color: 'green', fontWeight: 'bold', fontStyle: 'italic' }}>Get Your Dental Treatment in Happy Smile</h1>
                    <h2 style={{ fontSize: '25px', color: 'red', fontWeight: 'bold', fontStyle: 'italic' }}>Why Happy Smile?</h2>
                    <p style={{ fontSize: '25px', color: 'orange', fontWeight: 'bold', fontStyle: 'italic' }}>Providing the World Class Dentists Service</p>
                    <p style={{ fontSize: '25px', color: 'green', fontWeight: 'bold', fontStyle: 'italic' }}>Specialized in Dental Implant</p>
                    <p style={{ fontSize: '25px', color: 'green', fontWeight: 'bold', fontStyle: 'italic' }}>Complete Sevice of Dental in One Location</p>
                    <p style={{ fontSize: '25px', color: 'green', fontWeight: 'bold', fontStyle: 'italic' }}>Latest in Dental Technology for Customized Care</p>
                    <p style={{ fontSize: '25px', color: 'green', fontWeight: 'bold', fontStyle: 'italic' }}>On-Site State-of-the-Art Lab</p>
                    <p style={{ fontSize: '25px', color: 'green', fontWeight: 'bold', fontStyle: 'italic' }}>New Smile in One Day</p>
                </div>


            </div>

        </div >
    );
};

export default Section1;