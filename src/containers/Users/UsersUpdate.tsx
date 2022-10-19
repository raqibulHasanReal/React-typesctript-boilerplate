import { Typography } from '@/components/atoms';
import { usersAPI } from '@/libs/api';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Card, Col, Form, message, Row } from 'antd';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { SkeletonUsersUpdate } from './SkeletonUsersUpdate';
import { UsersForm } from './UsersForm';

export const UsersUpdate = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const { userID } = useParams() as unknown as { userID: number };
	const [form] = Form.useForm();

	const { isLoading: isUserLoading } = useQuery(['user'], () => usersAPI.user(userID!), {
		enabled: !!userID,
		cacheTime: 0,
		onSuccess: ({ groups, ...rest }) => {
			form.setFieldsValue({
				...rest,
				groups: groups.filter((id) => id !== 1),
			});
		},
	});

	const handleCancel = useCallback(() => {
		navigate(-1);
	}, [navigate]);

	const { mutate: handleSubmit, isLoading } = useMutation(
		(values: API.UserUpdatePayload) => usersAPI.updateUser(userID!, values),
		{
			onSuccess: () => {
				navigate(-1);
				message.success(t('User has been updated!'));
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
							{t('Update user')}
						</Typography.Title>
					</Col>
				</Row>
			</Col>

			<Col span={24}>
				<Card>
					<Row>
						<Col md={{ span: 12, offset: 6 }}>
							{isUserLoading ? (
								<SkeletonUsersUpdate />
							) : (
								<Form form={form} layout='vertical' size='large' onFinish={handleSubmit}>
									<UsersForm onCancel={handleCancel} isLoading={isLoading} isEmailDisabled />
								</Form>
							)}
						</Col>
					</Row>
				</Card>
			</Col>
		</Row>
	);
};
