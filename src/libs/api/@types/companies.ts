/* eslint-disable @typescript-eslint/no-explicit-any */
export interface TenantDBPayload {
	db_type: string;
	db_name: string;
	db_user: string;
	db_password: string;
	db_host: string;
	db_port: string;
	tenant?: number;
}

export interface TenantDBResponse {
	id: number;
	tenant: number;
	domain: string;
	db_name: string;
	db_user: string;
	db_password: string;
	db_host: string;
	db_port: number;
	db_type: string;
	is_active: boolean;
}

export interface CompanyPayload {
	name: string;
	email: string;
	domain: string;
	subdomain_prefix: string;
}

export interface CompanyOnBoardSteps {
	company: number;
	company_created: boolean;
	database_created: boolean;
	database_migrated: boolean;
	initial_data_loaded: boolean;
	user_created: boolean;
}

export interface Company {
	id: number;
	name: string;
	email: string;
	logo?: any;
	domain: string;
	subdomain_prefix: string;
	domain_admin_portal: string;
	domain_customer_portal: string;
	company_on_board_steps: CompanyOnBoardSteps;
	is_active: boolean;
	created_at?: string;
}

export interface CompaniesResponse {
	count: number;
	next?: any;
	previous?: any;
	results: Company[];
}

export interface CompanyUserPayload {
	first_name: string;
	last_name: string;
	email: string;
	is_superuser: boolean;
}

export interface CompanyUserGroupsDetail {
	id: number;
	name: string;
}

export interface CompanyUserResponse {
	id: number;
	groups_details: CompanyUserGroupsDetail[];
	last_login?: any;
	is_superuser: boolean;
	created_at: Date;
	updated_at: Date;
	first_name: string;
	last_name: string;
	email: string;
	is_staff: boolean;
	is_passenger: boolean;
	is_active: boolean;
	date_joined: Date;
	created_by?: any;
	updated_by?: any;
	groups: number[];
	user_permissions: any[];
}

export interface CompanyConfigResponse {
	id: number;
	is_active: boolean;
	created_at: Date;
	updated_at: Date;
	company_name: string;
	organization_number: string;
	color_code: string;
	logo: string;
	favicon?: any;
	login_page_bg_image?: any;
	website: string;
	email: string;
	admin_email: string;
	telephone?: any;
	booking_fee?: any;
	first_payment_day?: any;
	residue_payment_day?: any;
	passenger_content_update_days?: any;
	passenger_schedule_mail_send_days?: any;
	default_currency: string;
}

export interface EmailProviderConfigPayload {
	email_provider: number;
	from_email: string;
	api_key: string;
	is_active?: boolean;
}

export interface EmailEventTemplate {
	id: number;
	email_event_name: string;
	is_active: boolean;
	created_at: Date;
	updated_at: Date;
	template_id: string;
	created_by?: any;
	updated_by?: any;
	email_event: number;
	email_provider: number;
}

interface EmailProvider {
	id: number;
	is_active: boolean;
	created_at: Date;
	updated_at: Date;
	name: string;
	slug?: any;
	logo?: any;
	created_by?: any;
	updated_by?: any;
}

export interface EmailProviderConfig {
	id: number;
	email_provider: EmailProvider;
	api_key: string;
	username?: any;
	password?: any;
	base_url?: any;
	from_email: string;
	is_active: boolean;
	email_event_template: EmailEventTemplate[];
}

export interface EmailProviderConfigResponse {
	count: number;
	next?: any;
	previous?: any;
	results: EmailProviderConfig[];
}

export interface EmailTeamplatePayload {
	id: number;
	email_event: number;
	email_provider: number;
	template_id: number | string;
}

export interface UnconfiguredPaymentMethod {
	id: number;
	name: string;
	logo?: string;
	is_available: boolean;
	is_active: boolean;
}

export interface PaymentConfigMethod {
	id: number;
	is_active: boolean;
	created_at: Date;
	updated_at: Date;
	name: string;
	logo?: any;
	is_available: boolean;
	created_by?: any;
	updated_by?: any;
}

export interface PaymentConfig {
	id: number;
	is_active: boolean;
	created_at: Date;
	updated_at: Date;
	username: string;
	password: string;
	base_url: string;
	success_url: string;
	notification_url: string;
	private_key_name: string;
	created_by?: any;
	updated_by?: any;
	payment_method: PaymentConfigMethod;
}

export interface PaymentConfigResponse {
	count: number;
	next?: any;
	previous?: any;
	results: PaymentConfig[];
}

export interface PaymentConfigCreatePayload {
	payment_method: number;
	username: string;
	password: string;
	base_url: string;
	success_url: string;
	notification_url: string;
	private_key_name: string;
}

export interface PaymentConfigCreateResponse extends PaymentConfigCreatePayload {
	id: number;
	is_active: boolean;
	created_by?: any;
	updated_by?: any;
}
