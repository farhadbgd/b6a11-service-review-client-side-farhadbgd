import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <Accordion className='mt-4'>
            <Accordion.Item eventKey="0">
                <Accordion.Header>4.1 What is cors?</Accordion.Header>
                <Accordion.Body>
                    Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>4.2 Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                <Accordion.Body>
                    Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

                    The name of other User Authentication Platforms are.
                    1. Stytch.

                    2. Ory.

                    3. Supabase.

                    4. Okta.

                    5. PingIdentity.

                    6. Keycloak.

                    7. Frontegg.

                    8. Authress.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>4.3 How does the private route work?</Accordion.Header>
                <Accordion.Body>
                    The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>4.4 What is Node? How does Node work?</Accordion.Header>
                <Accordion.Body>
                    It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. Working of Node.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default Blog;