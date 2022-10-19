/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Currency {
	id: number;
	is_active: boolean;
	currency_code: string;
	name: string;
	country_name: string;
}

export interface CurrencyResponse {
	count: number;
	next?: any;
	previous?: any;
	results: Currency[];
}

export interface CreateCurrencyPayload {
	name: string;
	currency_code: string;
	country_name: string;
}
