import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useTitle from '../useTitle/useTitle';
// import Toast from 'react-bootstrap/Toast';
import toast from 'react-hot-toast';
import { Modal } from 'react-bootstrap';


const AddService = () => {
    useTitle('addservice');

    const notify = () => toast('Your have enrolled to the course successfully! Thank you')
    function StaticExample() {
        return (
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Modal body text goes here.</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        );
    }

    StaticExample()
    notify();
    alert('User added successfully');


    const [users, setUsers] = useState({})
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(users);
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(users),
        })
            .then(response => response.json())
            .then(data => {
                if (data.acknowledged) {
                    StaticExample()
                    notify();
                    alert('User added successfully');

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
                    <Form.Control onBlur={handleBlur} style={{ padding: "10px" }} type="text" name='title' placeholder="Service Name" /> <br />
                    <Form.Control onBlur={handleBlur} style={{ padding: "10px" }} type="number" name='fee' placeholder="Service Fee " /><br />
                    <Form.Control onBlur={handleBlur} style={{ padding: "10px" }} type="text" name='details' placeholder="Service details, please put minimum 100 words" /><br />
                    <Form.Control onBlur={handleBlur} style={{ padding: "10px" }} type="text" name='img' placeholder="images URL" /><br />

                </Form.Group>


                <Button className='w-100' variant="primary" type="submit" size="lg">
                    Submit to add service
                </Button>
            </Form>

        </div>
    );
};

export default AddService;