import { SettingsRolesContainer } from '@/containers';
import { AccessBoundary } from 'react-access-boundary';

const SettingsRoles = () => (
	<AccessBoundary to='VIEW_GROUP' isDefaultFallback>
		<SettingsRolesContainer />
	</AccessBoundary>
);

export default SettingsRoles;
