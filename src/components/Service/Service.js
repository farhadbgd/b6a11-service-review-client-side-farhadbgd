import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useLoaderData } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Service = () => {
    const services = useLoaderData()
    return (



        <div>
            <h1>Services Page{services?.length || 0}</h1>
            <div className="d-flex flex-wrap justify-content-evenly  m-4">

                {
                    services?.slice(0, 3).map(service =>



                        <div >

                            <Row xs={1} md={2} lg={3} className="g-6 m-5">

                                <Col>

                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={service.img} />
                                        <Card.Body>
                                            <Card.Title>{service.title}</Card.Title>
                                            <Card.Text>
                                                {service.details.substring(0, 100)}
                                            </Card.Text>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroup.Item>Service Charge: {service.fee}</ListGroup.Item>
                                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                        </ListGroup>
                                        <Card.Body>
                                            <Card.Link href="#">Card Link</Card.Link>
                                            <Card.Link href="#">Another Link</Card.Link>
                                        </Card.Body>
                                    </Card>
                                </Col>

                            </Row>

                        </div>)
                }




            </div>
        </div>


    );
};

export default Service;