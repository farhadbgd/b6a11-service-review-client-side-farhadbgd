import React from 'react';
import { useLoaderData } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import useTitle from '../useTitle/useTitle';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Spinner from 'react-bootstrap/Spinner';




const Services = () => {
    // spinner loading
    function BasicExample() {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        );
    }
    BasicExample();
    useTitle('services');
    const services = useLoaderData();

    return (
        <div>

            <h1 className='text-center mt-5'>Services</h1>
            <div className="d-flex flex-wrap justify-content-evenly  m-4">
                {
                    services.map(service =>
                        <div >

                            <Row xs={1} md={2} lg={3} className="g-6 m-5">

                                <Col>

                                    <Card style={{ width: '18rem', height: '30rem' }}>
                                        <PhotoProvider>
                                            <PhotoView src={service.img}>
                                                <Card.Img variant="top" src={service.img} />
                                            </PhotoView>
                                        </PhotoProvider>

                                        <Card.Body>
                                            <Card.Title >{service.title}</Card.Title>
                                            <Card.Text >
                                                {service.details?.substring(0, 100)}
                                            </Card.Text>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroup.Item>Service Charge: USD {service.fee}</ListGroup.Item>
                                        </ListGroup>
                                        <Card.Body>
                                            <div className="d-grid gap-2">
                                                <Button variant="secondary" size="lg">
                                                    <Link style={{ textDecoration: 'none', color: 'orange' }} to={`/services/${service._id}`}> See Detailed</Link >
                                                </Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>

                            </Row>

                        </div>)
                }




            </div>
        </div >
    );
};

export default Services;