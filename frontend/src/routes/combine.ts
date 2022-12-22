import { createBrowserRouter } from 'react-router-dom';

import { MainWithLayoutRoutes } from './main.routes';
import { AuthorizationRoutes } from './authorization.routes';

export const routers = createBrowserRouter([AuthorizationRoutes, MainWithLayoutRoutes]);
