import { SettingsEmailProvidersContainer } from '@/containers';
import { AccessBoundary } from 'react-access-boundary';

const SettingsEmailProviders = () => (
	<AccessBoundary to='VIEW_EMAILPROVIDER' isDefaultFallback>
		<SettingsEmailProvidersContainer />
	</AccessBoundary>
);

export default SettingsEmailProviders;
