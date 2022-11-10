import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useLoaderData } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { FaUser } from 'react-icons/fa';
import { Image } from 'react-bootstrap';

const Service = () => {
    const services = useLoaderData()

    const [reviews, setReviews] = useState()

    fetch('http://localhost:5000/reviews')
        .then(response => response.json())
        .then(data => {

            data.map(review => {
                setReviews(review)
                return review.serviceId === services._id
            });

        })

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
                                        <PhotoView src={services?.img}>
                                            <Card.Img variant="top" src={services?.img} />
                                        </PhotoView>
                                    </PhotoProvider>

                                    <Card.Body>
                                        <Card.Title className='text-center'>{services?.title}</Card.Title>
                                        <Card.Text >
                                            {services?.details}
                                        </Card.Text>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item className='text-center'>Service Charge: {services?.fee}</ListGroup.Item>

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

                                <Card style={{ width: '25rem', height: '20rem', margin: 'auto' }}>

                                    <Image
                                        style={{ height: '100px' }}
                                        roundedCircle
                                        src={reviews?.img || <FaUser></FaUser>}>
                                    </Image>
                                    <Card.Body>
                                        <Card.Title className='text-center'>{reviews?.reviewer || "No Review Found"}</Card.Title>
                                        <Card.Text >
                                            Date and Time  {services?.ts}
                                        </Card.Text>
                                        <Card.Text >
                                            {reviews?.review}
                                        </Card.Text>
                                    </Card.Body>


                                    <div className="d-grid gap-2">
                                        <Button variant="primary" type="submit" size="lg">
                                            <Link style={{ textDecoration: 'none', color: 'white' }} to={`/addreview/${services?._id}`}> Add Review</Link >
                                        </Button>
                                    </div>


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