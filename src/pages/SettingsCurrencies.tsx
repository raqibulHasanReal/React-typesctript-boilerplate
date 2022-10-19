import { SettingsCurrenciesContainer } from '@/containers';
import { AccessBoundary } from 'react-access-boundary';

const SettingsCurrencies = () => (
	<AccessBoundary to='VIEW_PAYMENTMETHOD' isDefaultFallback>
		<SettingsCurrenciesContainer />
	</AccessBoundary>
);

export default SettingsCurrencies;
