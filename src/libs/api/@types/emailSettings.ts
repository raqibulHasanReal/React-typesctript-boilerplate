/* eslint-disable @typescript-eslint/no-explicit-any */
export interface EmailEvent {
	id: number;
	name: string;
	slug: string;
	is_active: boolean;
}

export interface EmailEventsReponse {
	count: number;
	next?: any;
	previous?: any;
	results: EmailEvent[];
}

export interface EmailProvider {
	id: number;
	name: string;
	is_enable: boolean;
	is_active: boolean;
}

export interface EmailProvidersReponse {
	count: number;
	next?: any;
	previous?: any;
	results: EmailProvider[];
}
