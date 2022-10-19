import { Typography } from '@/components/atoms';
import { companyAPI } from '@/libs/api';
import { useQuery } from '@tanstack/react-query';
import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

export const CompanyIdentity = () => {
	const { t } = useTranslation();
	const { companyID } = useParams() as unknown as { companyID: number };

	const { data } = useQuery(['company', companyID], () => companyAPI.company(companyID));

	return (
		<Fragment>
			{data?.name && (
				<Typography.Title noMargin level={5}>
					{data.name}
				</Typography.Title>
			)}
			{data?.domain_admin_portal && (
				<a
					href={data.domain_admin_portal}
					target='_blank'
					style={{ fontSize: 14 }}
					rel='noreferrer'
				>
					{t('Admin Portal')}
				</a>
			)}
			{data?.domain_customer_portal && (
				<a
					href={data.domain_customer_portal}
					target='_blank'
					style={{ fontSize: 14, marginLeft: 10 }}
					rel='noreferrer'
				>
					{t('Customer Portal')}
				</a>
			)}
		</Fragment>
	);
};
