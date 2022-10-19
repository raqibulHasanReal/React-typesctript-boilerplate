import { lazy } from 'react';
import { PRIVATE_ROUTES } from './paths';

export const privateRoutes = [
	{
		path: PRIVATE_ROUTES.DASHBOARD,
		Component: lazy(() => import('@/pages/Dashboard')),
	},
	{
		path: PRIVATE_ROUTES.USERS,
		Component: lazy(() => import('@/pages/Users')),
	},
	{
		path: PRIVATE_ROUTES.USERS_CREATE,
		Component: lazy(() => import('@/pages/UsersCreate')),
	},
	{
		path: PRIVATE_ROUTES.USERS_UPDATE,
		Component: lazy(() => import('@/pages/UsersUpdate')),
	},
	{
		path: PRIVATE_ROUTES.PROFILE,
		Component: lazy(() => import('@/pages/Profile')),
	},
];
