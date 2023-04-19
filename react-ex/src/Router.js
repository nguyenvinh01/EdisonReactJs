import React from 'react';
import { createBrowserRouter } from 'react-router-dom'
import Layout from './Bai14/Layout';
import PostDetails from './Bai14/PostDetails';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [{
            path: '/home',
            element: <div>Home</div>
        }]
    },
    {
        path: "/about",
        element: <div>About Us</div>
    },
    {
        path: '/post/:postId',
        element: <PostDetails />
    }
])

export default router;