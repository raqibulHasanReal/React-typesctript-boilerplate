import { Button, Switch } from '@/components/atoms';
import { usersAPI } from '@/libs/api';
import { readableText } from '@/utils/helpers';
import { useQuery } from '@tanstack/react-query';
import { Col, Form, Input, Row, Select } from 'antd';
import { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

type Props = {
	isLoading?: boolean;
	isEmailDisabled?: boolean;
	onCancel?: () => void;
	saveButtonText?: string;
};

export const UsersForm: FC<Props> = ({
	isLoading: isSaveBtnLoading,
	isEmailDisabled,
	onCancel,
	saveButtonText,
}) => {
	const { t } = useTranslation();

	const { isLoading, data } = useQuery(['userRoles'], () => usersAPI.userFilteredRoles());

	const roleOptions = useMemo(() => {
		if (data?.length) {
			return data.map(({ id, name }) => ({
				label: readableText(name),
				value: id,
			}));
		}

		return [];
	}, [data]);

	return (
		<>
			<Form.Item
				label={t('First Name')}
				name='first_name'
				rules={[{ required: true, message: t('First name is required!') }]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				label={t('Last Name')}
				name='last_name'
				rules={[{ required: true, message: t('Last name is required!') }]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				label={t('Email Address')}
				name='email'
				rules={[
					{ required: true, message: t('Email address is required!') },
					{ type: 'email', message: t('Email address is invalid!') },
				]}
			>
				<Input disabled={isEmailDisabled} />
			</Form.Item>
			<Form.Item label={t('Role')} name='groups'>
				<Select
					mode='multiple'
					placeholder={t('Choose a role')}
					loading={isLoading}
					options={roleOptions}
				/>
			</Form.Item>
			<Form.Item
				name='is_superuser'
				label={t('Is this user a super admin?')}
				valuePropName='checked'
			>
				<Switch custom checkedChildren={t('Yes')} unCheckedChildren={t('No')} />
			</Form.Item>
			<Row gutter={16} align='middle'>
				<Col xs={12}>
					<Button block type='cancel' htmlType='button' onClick={onCancel}>
						{t('Cancel')}
					</Button>
				</Col>
				<Col xs={12}>
					<Button block type='primary' htmlType='submit' loading={isSaveBtnLoading}>
						{saveButtonText ? saveButtonText : t('Save')}
					</Button>
				</Col>
			</Row>
		</>
	);
};
