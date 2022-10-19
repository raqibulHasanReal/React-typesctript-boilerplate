import { ReactComponent as DashboardIcon } from '@/assets/images/sidebar/dashboard.svg';
import { ReactComponent as UserIcon } from '@/assets/images/sidebar/user.svg';
import { translationKeys } from '@/config/translate/i18next';
import { PRIVATE_ROUTES } from '@/routes/paths';

export type MenuItem = {
	name: translationKeys;
	path: string;
	end?: boolean;
	ItemIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
	childrens?: MenuItem[];
	permission?: string | string[];
};

export const MENU_ITEMS: MenuItem[] = [
	{
		name: 'Dashboard',
		ItemIcon: DashboardIcon,
		path: PRIVATE_ROUTES.DASHBOARD,
		end: true,
	},
	{
		name: 'Employee',
		ItemIcon: UserIcon,
		path: PRIVATE_ROUTES.USERS,
		childrens: [
			{
				name: 'All Employee',
				path: PRIVATE_ROUTES.USERS,
				// permission: 'VIEW_USER',
				end: true,
			},
			{
				name: 'Create Employee',
				path: PRIVATE_ROUTES.USERS_CREATE,
				permission: 'ADD_USERS',
			},
		],
	},
];
