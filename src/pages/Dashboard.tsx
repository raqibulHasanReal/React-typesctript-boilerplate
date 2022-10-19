import { PRIVATE_ROUTES } from '@/routes/paths';
import { Link } from 'react-router-dom';

const Dashboard = () => (
	<div>
		<h1>Dashboard</h1>
		<Link to={PRIVATE_ROUTES.PROFILE}>Go to Profile</Link>
		<br />
	</div>
);

export default Dashboard;
