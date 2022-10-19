import { Col, Row, Skeleton } from 'antd';

export const SkeletonUsersUpdate = () => {
	return (
		<>
			<Skeleton.Input active style={{ height: 25, marginBottom: 4, borderRadius: 5 }} />
			<Skeleton.Input active block size='large' style={{ marginBottom: 24, borderRadius: 5 }} />
			<Skeleton.Input active style={{ height: 25, marginBottom: 4, borderRadius: 5 }} />
			<Skeleton.Input active block size='large' style={{ marginBottom: 24, borderRadius: 5 }} />
			<Skeleton.Input active style={{ height: 25, marginBottom: 4, borderRadius: 5 }} />
			<Skeleton.Input active block size='large' style={{ marginBottom: 24, borderRadius: 5 }} />
			<Skeleton.Input active style={{ height: 25, marginBottom: 4, borderRadius: 5 }} />
			<Skeleton.Input active block size='large' style={{ marginBottom: 24, borderRadius: 5 }} />
			<Skeleton.Input active style={{ height: 25, marginBottom: 4, borderRadius: 5 }} />
			<Skeleton.Input
				active
				block
				size='large'
				style={{ width: 70, minWidth: 70, height: 36, marginBottom: 24, borderRadius: 100 }}
			/>
			<Row gutter={16}>
				<Col span={12}>
					<Skeleton.Button active block size='large' />
				</Col>
				<Col span={12}>
					<Skeleton.Button active block size='large' />
				</Col>
			</Row>
		</>
	);
};
