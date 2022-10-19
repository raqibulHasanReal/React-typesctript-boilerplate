/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Permission {
	id: number;
	name: string;
	content_type_id?: number;
	codename: string;
}

export interface PermissionsResponse {
	id: number;
	app_label: string;
	model: string;
	model_name: string;
	permissions: Permission[];
}

export type UserRolePayload = Omit<UserRole, 'id' | 'total_permission' | 'total_user'>;

export interface UserRole {
	id: number;
	name: string;
	permissions: number[];
	total_permission: number;
	total_user: number;
}

export interface UserRolesResponse {
	count: number;
	next?: any;
	previous?: any;
	results: UserRole[];
}

export interface APIKey {
	id: number;
	key: string;
	is_active: boolean;
	name: string;
}

export interface APIKeysResponse {
	result: APIKey[];
}

export interface APIKeyRevokedResponse {
	id: number;
	revoked: boolean;
}

export interface ConfigurationsResponse {
	id: number;
	company_name: string;
	logo?: any;
	favicon?: any;
	login_page_bg_image?: any;
	website: string;
	email: string;
	admin_email: string;
	telephone?: any;
	created_at: Date;
	updated_at: Date;
	base_domain_admin_portal?: string;
	base_domain_customer_portal?: string;
}

export type UpdateConfigurationsPayload = Omit<
	ConfigurationsResponse,
	'id' | 'created_at' | 'updated_at'
>;
