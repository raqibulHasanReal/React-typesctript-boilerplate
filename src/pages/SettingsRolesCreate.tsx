import { SettingsRolesCreateContainer } from '@/containers';
import { AccessBoundary } from 'react-access-boundary';

const SettingsRolesCreate = () => (
	<AccessBoundary to='ADD_GROUP' isDefaultFallback>
		<SettingsRolesCreateContainer />
	</AccessBoundary>
);

export default SettingsRolesCreate;
