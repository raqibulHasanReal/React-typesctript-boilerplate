import { translationKeys } from '@/config/translate/i18next';
import { Breadcrumb, Col, Row } from 'antd';
import { FC, useCallback } from 'react';
import { useAccessContext } from 'react-access-boundary';
import { useTranslation } from 'react-i18next';
import { NavLink, Outlet } from 'react-router-dom';
import { MenuItem } from '../DashboardLayout/LayoutSider/constants';
import { CompanyIdentity } from './CompanyIdentity';
import { NavItems } from './styles';

type NestedLayoutProps = {
	items: MenuItem[];
	breadcrumbs: string[];
	breadcrumbClass?: string;
	isCompany?: boolean;
};

const NestedLayout: FC<NestedLayoutProps> = (props) => {
	const { items, breadcrumbs, breadcrumbClass, isCompany } = props;
	const { isAllowedTo } = useAccessContext();
	const { t } = useTranslation();

	const isAllowedPermission = useCallback(
		(permission: string | string[]) => {
			if (Array.isArray(permission)) {
				for (const item of permission) {
					return isAllowedTo(item);
				}

				return false;
			}

			return isAllowedTo(permission);
		},
		[isAllowedTo]
	);

	return (
		<Row gutter={16}>
			<Col span={6}>
				{isCompany && <CompanyIdentity />}
				<Breadcrumb className={breadcrumbClass} separator='>'>
					{breadcrumbs.map((e, i) => (
						<Breadcrumb.Item key={i}>{t(e as translationKeys)}</Breadcrumb.Item>
					))}
				</Breadcrumb>

				<NavItems>
					{items.map(({ name, path, permission }, index) => {
						if (permission && !isAllowedPermission(permission)) {
							return null;
						}

						return (
							<li key={index}>
								<NavLink to={path} end>
									{name}
								</NavLink>
							</li>
						);
					})}
				</NavItems>
			</Col>
			<Col span={18}>
				<Outlet />
			</Col>
		</Row>
	);
};

export default NestedLayout;
