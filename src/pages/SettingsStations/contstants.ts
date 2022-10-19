import { translationKeys } from '@/config/translate/i18next';
import { lazy } from 'react';

export type MenuItem = {
	name: translationKeys;
	path: string;
	childrens?: MenuItem[];
	permission?: string;
};

export const permissions = [
	'ADD_STATION',
	'CHANGE_STATION',
	'VIEW_STATION',
	'ADD_STATIONTYPE',
	'CHANGE_STATIONTYPE',
	'VIEW_STATIONTYPE',
];

export const STATIONS_SETTINGS_ROUTES = {
	STATIONS: '',
	TYPES: 'types',
};

export const stationsSettingsRoutes = [
	{
		path: STATIONS_SETTINGS_ROUTES.STATIONS,
		Component: lazy(() => import('./SettingsStations')),
	},
	{
		path: STATIONS_SETTINGS_ROUTES.TYPES,
		Component: lazy(() => import('./SettingsStationsTypes')),
	},
];

export const MENU_ITEMS: MenuItem[] = [
	{
		name: 'All stations',
		path: STATIONS_SETTINGS_ROUTES.STATIONS,
		permission: 'VIEW_STATION',
	},
	{
		name: 'Station types',
		path: STATIONS_SETTINGS_ROUTES.TYPES,
		permission: 'VIEW_STATIONTYPE',
	},
];
