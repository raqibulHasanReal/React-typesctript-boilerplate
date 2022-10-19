import { Typography } from '@/components/atoms';
import { usersAPI } from '@/libs/api';
import { useMutation } from '@tanstack/react-query';
import { Card, Col, Form, message, Row } from 'antd';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { UsersForm } from './UsersForm';

export const UsersCreate = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const handleCancel = useCallback(() => {
		navigate(-1);
	}, [navigate]);

	const { mutate: handleSubmit, isLoading } = useMutation(
		(values: API.UserCreatePayload) => usersAPI.createUser(values),
		{
			onSuccess: () => {
				navigate(-1);
				message.success(t('User has been created!'));
			},
			onError: (error: Error) => {
				message.error(error.message);
			},
		}
	);

	return (
		<Row>
			<Col span={24} className='margin-4-bottom'>
				<Row align='middle'>
					<Col span={24}>
						<Typography.Title level={4} type='primary' className='margin-0'>
							{t('Create New User')}
						</Typography.Title>
					</Col>
				</Row>
			</Col>

			<Col span={24}>
				<Card>
					<Row>
						<Col md={{ span: 12, offset: 6 }}>
							<Form layout='vertical' size='large' onFinish={handleSubmit}>
								<UsersForm onCancel={handleCancel} isLoading={isLoading} />
							</Form>
						</Col>
					</Row>
				</Card>
			</Col>
		</Row>
	);
};
