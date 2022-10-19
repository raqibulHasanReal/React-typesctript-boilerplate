import { SettingsPaymentMethodsContainer } from '@/containers';
import { AccessBoundary } from 'react-access-boundary';

const SettingsPaymentMethods = () => (
	<AccessBoundary to='VIEW_PAYMENTMETHOD' isDefaultFallback>
		<SettingsPaymentMethodsContainer />
	</AccessBoundary>
);

export default SettingsPaymentMethods;
