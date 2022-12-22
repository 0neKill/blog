import * as React from 'react';
import { RouterProvider } from 'react-router-dom';

import './index.scss';

import { routers } from './routes';


export const App: React.FunctionComponent = () => {
    return (
        <RouterProvider router={routers} />
    );
};
