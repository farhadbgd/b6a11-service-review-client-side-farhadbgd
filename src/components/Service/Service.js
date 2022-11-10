import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useLoaderData } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Service = () => {
    const services = useLoaderData()
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => console.log(data))
    }, []);

    return (

        <Container >
            <Row className="d-flex flex-wrap justify-content-evenly  m-4">
                <Col>
                    <h2 className='text-center'>Service Details</h2>
                    <div style={{ width: '30rem', margin: 'auto' }}>

                        <Row xs={1} md={2} lg={3} className="g-6 m-5">

                            <Col>

                                <Card style={{ width: '30rem', margin: 'auto' }}>
                                    <PhotoProvider>
                                        <PhotoView src={services.img}>
                                            <Card.Img variant="top" src={services?.img} />
                                        </PhotoView>
                                    </PhotoProvider>

                                    <Card.Body>
                                        <Card.Title className='text-center'>{services.title}</Card.Title>
                                        <Card.Text >
                                            {services.details}
                                        </Card.Text>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item className='text-center'>Service Charge: {services.fee}</ListGroup.Item>

                                    </ListGroup>

                                </Card>
                            </Col>

                        </Row>
                    </div>
                </Col>
                <Col>
                    <h2 className='text-center'>Review</h2>
                    <div style={{ width: '30rem', margin: 'auto' }}>


                        <Row xs={1} md={2} lg={3} className="g-6 m-5">

                            <Col>

                                <Card style={{ width: '30rem', margin: 'auto' }}>
                                    <Card.Img variant="top" src={services.img} />
                                    <Card.Body>
                                        <Card.Title className='text-center'>{services.reviewer}</Card.Title>
                                        <Card.Text >
                                            Date and Time  {services.ts}
                                        </Card.Text>
                                        <Card.Text >
                                            {services.review}
                                        </Card.Text>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item className='text-center'>Add Review</ListGroup.Item>
                                    </ListGroup>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                            {/* <Form.Text className="text-muted">
                                                We'll never share your email with anyone else.
                                            </Form.Text> */}
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>

                                        <div className="d-grid gap-2">
                                            <Button variant="primary" type="submit" size="lg">
                                                <Link style={{ textDecoration: 'none', color: 'white' }} to={``}> Submit</Link >
                                            </Button>
                                        </div>

                                    </Form>
                                </Card>
                            </Col>

                        </Row>
                    </div>

                </Col>
            </Row>
        </Container>



    );
};

export default Service;