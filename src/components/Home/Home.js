import React from 'react';
import Banner from '../Banner/Banner';
import Section1 from '../Section1/Section1';
import Section2 from '../Section2/Section2';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useLoaderData } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';




const Home = () => {
    const services = useLoaderData()




    return (
        <div>
            <Banner></Banner>

            <div>
                <div className="d-flex flex-wrap justify-content-evenly  m-4">
                    {
                        // services?.slice(0, 3).map(service =>
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
                                                <Card.Title>{service.title}</Card.Title>
                                                <Card.Text>
                                                    {service.details.substring(0, 100)}
                                                </Card.Text>
                                            </Card.Body>
                                            <ListGroup className="list-group-flush">
                                                <ListGroup.Item>Service Charge: USD {service.fee}</ListGroup.Item>

                                            </ListGroup>
                                            <Card.Body>

                                                <div className="d-grid gap-2">
                                                    <Button variant="secondary" size="lg">
                                                        <Link style={{ textDecoration: 'none', color: 'white' }} to={`/services/${service._id}`}> View Detailed</Link>
                                                    </Button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>

                            </div>)

                    }
                    <div className="d-grid gap-2">
                        <Button variant="secondary" size="lg">
                            <Link style={{ textDecoration: 'none', color: 'white' }} to='/services'> See all</Link >
                        </Button>
                    </div>
                </div>
            </div>
            <Section1></Section1>
            <Section2></Section2>
        </div>
    );
};

export default Home;