import { createBrowserRouter } from "react-router-dom";
import AddService from "../AddService/AddService";
import Blog from "../Blog/Blog";
import Home from "../Home/Home";
import Login from "../login/Login";
import Register from "../login/Register";
import Main from "../Main/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Service from "../Service/Service";
import Services from "../Services/Services";


export const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                loader: () => fetch('http://localhost:5000/services'),
                element: <Home></Home>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/services/:id",
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <Service></Service>
            },
            {
                path: "/services",
                loader: () => fetch('http://localhost:5000/services'),
                element: <PrivateRoute><Services></Services></PrivateRoute>

            },
            {
                path: "/login",
                element: <Login></Login>

            },
            {
                path: "/register",
                element: <Register></Register>

            },
            {
                path: "/addservice",
                element: <PrivateRoute><AddService></AddService></PrivateRoute>

            }
        ]


    },


])




// import React from 'react';

// const Routes = () => {
//     return (
//         <div>

//         </div>
//     );
// };

// export default Routes;