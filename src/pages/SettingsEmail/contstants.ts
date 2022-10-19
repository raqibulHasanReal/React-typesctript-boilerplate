import { translationKeys } from '@/config/translate/i18next';
import { lazy } from 'react';

export type MenuItem = {
	name: translationKeys;
	path: string;
	childrens?: MenuItem[];
	permission?: string;
};

export const permissions = [
	'ADD_EMAILEVENT',
	'CHANGE_EMAILEVENT',
	'VIEW_EMAILEVENT',
	'ADD_EMAILLOG',
	'CHANGE_EMAILLOG',
	'VIEW_EMAILLOG',
	'ADD_EMAILPROVIDER',
	'CHANGE_EMAILPROVIDER',
	'VIEW_EMAILPROVIDER',
];

export const EMAIL_SETTINGS_ROUTES = {
	EMAIL_EVENTS: 'events',
	EMAIL_PROVIDERS: 'providers',
};

export const emailSettingsRoutes = [
	{
		path: EMAIL_SETTINGS_ROUTES.EMAIL_EVENTS,
		Component: lazy(() => import('./SettingsEmailEvents')),
	},
	{
		path: EMAIL_SETTINGS_ROUTES.EMAIL_PROVIDERS,
		Component: lazy(() => import('./SettingsEmailProviders')),
	},
];

export const MENU_ITEMS: MenuItem[] = [
	{
		name: 'Email providers',
		path: EMAIL_SETTINGS_ROUTES.EMAIL_PROVIDERS,
		permission: 'VIEW_EMAILPROVIDER',
	},
	{
		name: 'Email events',
		path: EMAIL_SETTINGS_ROUTES.EMAIL_EVENTS,
		permission: 'VIEW_EMAILEVENT',
	},
];
