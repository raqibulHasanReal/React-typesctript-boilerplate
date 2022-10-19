import { translationKeys } from '@/config/translate/i18next';
import { lazy } from 'react';

export type MenuItem = {
	name: translationKeys;
	path: string;
	childrens?: MenuItem[];
	permission?: string;
};

export const permissions = ['ADD_COUNTRY', 'CHANGE_COUNTRY', 'VIEW_COUNTRY'];

export const LOCATIONS_SETTINGS_ROUTES = {
	COUNTRIES: 'countries',
	TERRITORIES: 'terittories',
};

export const stationsSettingsRoutes = [
	{
		path: LOCATIONS_SETTINGS_ROUTES.COUNTRIES,
		Component: lazy(() => import('./SettingsCountries')),
	},
	{
		path: LOCATIONS_SETTINGS_ROUTES.TERRITORIES,
		Component: lazy(() => import('./SettingsTerittories')),
	},
];

export const MENU_ITEMS: MenuItem[] = [
	{
		name: 'All countries',
		path: LOCATIONS_SETTINGS_ROUTES.COUNTRIES,
		permission: 'VIEW_COUNTRY',
	},
	{
		name: 'All territories',
		path: LOCATIONS_SETTINGS_ROUTES.TERRITORIES,
		permission: 'VIEW_COUNTRY',
	},
];
