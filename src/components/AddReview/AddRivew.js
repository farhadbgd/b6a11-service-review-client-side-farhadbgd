import React, { useContext, useState } from 'react';
import useTitle from '../useTitle/useTitle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../../Context/AuthProvider';
import { useLoaderData } from "react-router-dom";
import { Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';

const AddRivew = () => {
    // dinamic title
    useTitle('addreview');
    // Set the toast
    const notify = () => toast("Review added successfully");
    const { user } = useContext(AuthContext);
    console.log(user);
    const { _id, title } = useLoaderData();

    const [users, setUsers] = useState({})
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = user?.email || 'unregistered';
        const img = user?.photoURL || <FaUser></FaUser>
        const message = form.message.value;
        const review = {
            serviceName: title,
            serviceId: _id,
            reviewer: name,
            email: email,
            review: message,
            img: img
        }


        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review),
        })
            .then(response => response.json())
            .then(data => {
                if (data.acknowledged) {
                    notify();
                    <ToastContainer />
                }
                console.log(data);
                e.target.reset();
            })

    }
    const handleBlur = (e) => {
        const name = e.target.name;
        const nameValue = e.target.value;
        const newUser = { ...users };
        newUser[name] = nameValue;
        setUsers(newUser);
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onBlur={handleBlur} style={{ padding: "10px" }} type="text" name='name' placeholder="Enter your name" required /> <br />
                    <Form.Control onBlur={handleBlur} style={{ padding: "10px" }} type="text" defaultValue={user?.email} name='photo url' /><br />
                    <Form.Control onBlur={handleBlur} style={{ padding: "10px" }} type="text" name='img' placeholder="Photo url" /><br />
                    <Form.Control onBlur={handleBlur} style={{ padding: "10px", height: '200px' }} type="message" name='message' placeholder="Write your review" required /><br />
                </Form.Group>
                <Button className='w-100' variant="primary" type="submit" size="lg">
                    Submit to add Review
                </Button>
            </Form>
            <ToastContainer />

        </div>
    );
};

export default AddRivew;