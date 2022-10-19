import { SettingsStationsTypesContainer } from '@/containers';
import { AccessBoundary } from 'react-access-boundary';

const SettingsStationsTypes = () => (
	<AccessBoundary to='VIEW_STATIONTYPE' isDefaultFallback>
		<SettingsStationsTypesContainer />
	</AccessBoundary>
);

export default SettingsStationsTypes;
