import { SettingsRolesUpdateContainer } from '@/containers';
import { AccessBoundary } from 'react-access-boundary';

const SettingsRolesUpdate = () => (
	<AccessBoundary to='CHANGE_GROUP' isDefaultFallback>
		<SettingsRolesUpdateContainer />
	</AccessBoundary>
);

export default SettingsRolesUpdate;
