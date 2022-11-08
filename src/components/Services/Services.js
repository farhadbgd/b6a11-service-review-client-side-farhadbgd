import React from 'react';
import { useLoaderData } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Services = () => {
    const services = useLoaderData()

    return (
        <div>
            <h1>Services Page{services.length}</h1>
        </div>
    );
};

export default Services;