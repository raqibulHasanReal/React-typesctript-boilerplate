import { SettingsTerritoriesContainer } from '@/containers';
import { AccessBoundary } from 'react-access-boundary';

const SettingsTeritorries = () => (
	<AccessBoundary to='VIEW_COUNTRY' isDefaultFallback>
		<SettingsTerritoriesContainer />
	</AccessBoundary>
);

export default SettingsTeritorries;
