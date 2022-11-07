import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import Home from "../Home/Home";
import Main from "../Main/Main";
import Service from "../Service/Service";


export const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/service",
                element: <Service></Service>
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