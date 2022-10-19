import { SettingsEmailEventsContainer } from '@/containers';
import { AccessBoundary } from 'react-access-boundary';

const SettingsEmailEvents = () => (
	<AccessBoundary to='VIEW_EMAILEVENT' isDefaultFallback>
		<SettingsEmailEventsContainer />
	</AccessBoundary>
);

export default SettingsEmailEvents;
