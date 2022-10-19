import { UsersUpdateContainer } from '@/containers';
import { AccessBoundary } from 'react-access-boundary';

const UsersUpdate = () => (
	<AccessBoundary to='CHANGE_USER' isDefaultFallback>
		<UsersUpdateContainer />
	</AccessBoundary>
);

export default UsersUpdate;
