export const PUBLIC_ROUTES = {
	SIGNIN: '/',
	FORGOT_PASSWORD: 'forgot-password',
	RESET_PASSWORD: 'password-reset/:id/:token',
};

export const PRIVATE_ROUTES = {
	DASHBOARD: '',
	PROFILE: 'profile',
	USERS: 'users',
	USERS_CREATE: 'users/create',
	USERS_UPDATE: 'users/edit/:userID',
};
