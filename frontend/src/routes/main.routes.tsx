import React from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

import { CreatePost, Home, MainLayout, Post } from 'pages';
import { checkAuthorizationLoader, Routes } from 'helpers';



export const MainWithLayoutRoutes: RouteObject = {
    path: Routes.MAIN,
    element: <MainLayout />,
    children: [
        {
            index: true,
            element: <Home />,
        },
        {
            path: Routes.POST,
            element: <Post />,
        },
        {
            loader: checkAuthorizationLoader,
            path: Routes.CREATE_POST,
            element: <CreatePost />,
        },
        {
            path: '*',
            element: <Navigate to='/' />,
        },
    ],
};

