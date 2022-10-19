import { Switch } from '@/components/atoms';
import { translationKeys } from '@/config/translate/i18next';
import { usersAPI } from '@/libs/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { message, Popconfirm } from 'antd';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

type Props = {
	userID: number;
	status: 'Active' | 'Inactive';
};

export const StatusColumn: FC<Props> = ({ status, userID }) => {
	const [isChecked, setChecked] = useState(status === 'Active');
	const { t } = useTranslation();
	const queryClient = useQueryClient();

	const { mutate, isLoading } = useMutation(() => usersAPI.updateUserStatus(userID, !isChecked), {
		onSuccess: () => {
			setChecked((prev) => !prev);
			queryClient.invalidateQueries(['users']);
			message.success(t('Profile has been updated!'));
		},
		onError: (error: Error) => {
			message.error(error.message);
		},
	});

	const handleChange = () => mutate();

	return (
		<Popconfirm
			placement='leftTop'
			title={t(`Are you sure to ${isChecked ? 'deactive' : 'active'}?` as translationKeys)}
			onConfirm={handleChange}
			okText={t('Yes')}
			cancelText={t('No')}
			disabled={isLoading}
		>
			<Switch custom checked={isChecked} checkedChildren={t('On')} unCheckedChildren={t('Off')} />
		</Popconfirm>
	);
};
