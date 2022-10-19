/* eslint-disable @typescript-eslint/no-explicit-any */
export interface PaymentMethod {
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

export interface PaymentMethodsResponse {
	count: number;
	next?: any;
	previous?: any;
	results: PaymentMethod[];
}

export interface CreateMethodPayload {
	name: string;
	is_active: boolean;
}
