import { Spin } from '@/components/atoms';
import { Result } from 'antd';
import { lazy, Suspense, useCallback } from 'react';
import { useAccessContext } from 'react-access-boundary';
import { Navigate, Route, Routes } from 'react-router-dom';
import {
	LOCATIONS_SETTINGS_ROUTES,
	MENU_ITEMS,
	permissions,
	stationsSettingsRoutes,
} from './contstants';

const NestedLayout = lazy(() => import('@/components/layouts/NestedLayout'));

const SettingsStations = () => {
	const { isAllowedTo } = useAccessContext();

	const isAllowedPermission = useCallback(
		(permission: string | string[]) => {
			if (Array.isArray(permission)) {
				for (const item of permission) {
					if (isAllowedTo(item)) {
						return true;
					}
				}

				return false;
			}

			return isAllowedTo(permission);
		},
		[isAllowedTo]
	);

	if (!isAllowedPermission(permissions)) {
		return (
			<Result
				status='403'
				title='403'
				subTitle='Sorry, you are not authorized to access this page.'
			/>
		);
	}

	return (
		<Routes>
			<Route
				path=''
				element={
					<NestedLayout
						items={MENU_ITEMS}
						breadcrumbs={['Settings', 'Locations']}
						breadcrumbClass='margin-4-top margin-4-bottom'
					/>
				}
			>
				<Route path='' element={<Navigate to={LOCATIONS_SETTINGS_ROUTES.COUNTRIES} replace />} />
				{stationsSettingsRoutes.map(({ path, Component }, i) => (
					<Route
						key={i}
						path={path}
						element={
							<Suspense fallback={<Spin type='content-centre' size='large' />}>
								<Component />
							</Suspense>
						}
					/>
				))}
			</Route>
		</Routes>
	);
};

export default SettingsStations;
