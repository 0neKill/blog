import { RouteObject ,redirect} from 'react-router-dom';
import React from 'react';

const Create: React.FunctionComponent = () => {
    return <div>Create </div>;
};

const Index: React.FunctionComponent = () => {
    return <div>Index </div>;
};

const authLoader = () => {
    console.log(1)
    return redirect('/create')
};

export const PublicRoutes: RouteObject = {
    path: '/',
    loader: authLoader,
    element: <Index />,
    children: [
        {
            path: 'create',
            element: <Create />,
        },
    ],
};




