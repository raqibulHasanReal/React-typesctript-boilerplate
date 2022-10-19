import { UsersContainer } from '@/containers';
import { AccessBoundary } from 'react-access-boundary';

const Users = () => (
	<AccessBoundary to='VIEW_USER' isDefaultFallback>
		<UsersContainer />
	</AccessBoundary>
);

export default Users;
