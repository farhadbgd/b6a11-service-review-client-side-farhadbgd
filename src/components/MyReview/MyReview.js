import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../useTitle/useTitle';
import { useLoaderData } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


const MyReview = () => {
    useTitle('myreview')
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState()


    fetch('http://localhost:5000/reviews')
        .then(response => response.json())
        .then(data => {

            data.filter(review => {
                setReviews(review)
                return review.email === user.email
            });


        })

    const handleDelete = (e) => {

        fetch(`http://localhost:5000/reviews/${e},{
            method: 'DELETE',
        }`)
        console.log(e)
    }

    return (
        <div>
            <h1>My Review</h1>
            <Card style={{ width: '18rem' }}>
                <Card.Header>{reviews?.serviceName || "No Review Found"}</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>{reviews?.review || "No Review Found"}</ListGroup.Item>

                </ListGroup>
            </Card>
            <Button className='w-100' variant="primary" type="submit" size="lg">
                Edit
            </Button>
            <Button onClick={() => handleDelete(reviews.serviceId)} className='w-100 my-4' variant="secondary" type="submit" size="lg">
                Delete
            </Button>

        </div>
    );
};

export default MyReview;


