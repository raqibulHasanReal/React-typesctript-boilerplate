import { Typography } from '@/components/atoms';
import config from '@/config';
import { usersAPI } from '@/libs/api';
import { readableText } from '@/utils/helpers';
import { useQuery } from '@tanstack/react-query';
import { Col, Row, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import moment from 'moment';
import { useCallback, useMemo } from 'react';
import { useAccessContext } from 'react-access-boundary';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { StatusColumn } from './StatusColumn';

export const Users = () => {
	const { t } = useTranslation();
	const { isAllowedTo } = useAccessContext();
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const currentPage = useMemo(() => parseInt(searchParams.get('page') || '1'), [searchParams]);

	const { isLoading, data } = useQuery(['users', currentPage], () => usersAPI.users(currentPage));

	const handlePageChange = useCallback(
		(page: number) => {
			navigate(page > 1 ? `?page=${page}` : '');
		},
		[navigate]
	);

	const usersList = useMemo(() => {
		return data?.results?.length ? data.results : [];
	}, [data]);

	const columns: ColumnsType<API.User> = [
		{
			title: t('Name'),
			dataIndex: 'first_name',
			render: (_, record) => {
				const fullName = `${record.first_name} ${record.last_name}`;

				if (isAllowedTo('CHANGE_USER')) {
					return <Link to={`edit/${record.id}`}>{fullName}</Link>;
				}

				return fullName;
			},
		},
		{ title: t('Email'), dataIndex: 'email' },
		{
			width: '180px',
			title: t('Role'),
			dataIndex: 'groups_details',
			render: (groups_details: API.User['groups_details']) => {
				return groups_details.map(({ name }) => readableText(name)).join(', ');
			},
		},
		{
			title: t('Last Login'),
			dataIndex: 'last_login',
			render: (last_login) => {
				if (last_login) {
					return moment(new Date(last_login), 'YYYYMMDD').fromNow();
				}

				return '-';
			},
		},
		{
			title: t('Status'),
			dataIndex: 'is_active',
			render: (is_active, record) => (
				<StatusColumn userID={record.id} status={is_active ? 'Active' : 'Inactive'} />
			),
		},
	];

	return (
		<Row align='middle'>
			<Col span={24} className='margin-4-bottom'>
				<Row align='middle'>
					<Col span={12}>
						<Typography.Title level={4} type='primary' className='margin-0'>
							{t('Users')}
						</Typography.Title>
					</Col>
					<Col span={12} style={{ textAlign: 'right' }}>
						{isAllowedTo('ADD_USER') && (
							<Link className='ant-btn ant-btn-primary ant-btn-lg' to='create'>
								{t('Create user')}
							</Link>
						)}
					</Col>
				</Row>
			</Col>

			<Col span={24}>
				<Table
					rowKey='id'
					loading={isLoading}
					columns={columns}
					dataSource={usersList}
					pagination={{
						pageSize: config.itemsPerPage,
						current: currentPage,
						total: data?.count || 0,
						onChange: handlePageChange,
					}}
				/>
			</Col>
		</Row>
	);
};
