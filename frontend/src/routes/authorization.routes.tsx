import { RouteObject } from 'react-router-dom';

import { AuthorizationLayout, SingIn, SingUp } from 'pages';
import { checkAuthorizationLoader, Routes } from 'helpers';



export const AuthorizationRoutes: RouteObject = {
    element: <AuthorizationLayout />,
    loader: checkAuthorizationLoader,
    children: [
        {
            path: Routes.SING_IN,
            element: <SingIn />,
        },
        {
            path: Routes.SING_UP,
            element: <SingUp/>,
        },
    ],
};
