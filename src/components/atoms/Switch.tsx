import { ConfigProvider, Switch as AntSwitch } from 'antd';
import classNames from 'classnames';
import { ComponentProps, FC, useContext } from 'react';

type AntSwitchProps = ComponentProps<typeof AntSwitch>;

export type SwitchProps = AntSwitchProps & {
	custom?: boolean;
};

export const Switch: FC<SwitchProps> = ({ className, custom, ...rest }) => {
	const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
	const prefixCls = getPrefixCls('switch');

	return (
		<AntSwitch
			{...rest}
			className={classNames(
				{
					[`${prefixCls}-custom`]: custom,
				},
				className
			)}
		/>
	);
};
