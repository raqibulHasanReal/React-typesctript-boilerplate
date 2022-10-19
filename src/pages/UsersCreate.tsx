import { UsersCreateContainer } from '@/containers';
import { AccessBoundary } from 'react-access-boundary';

const UsersCreate = () => (
	<AccessBoundary to='ADD_USER' isDefaultFallback>
		<UsersCreateContainer />
	</AccessBoundary>
);

export default UsersCreate;
