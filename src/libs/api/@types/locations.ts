export interface Territory {
	id: number;
	is_active: boolean;
	created_at: string;
	updated_at: string;
	name: string;
	created_by: string | null;
	updated_by: string | null;
}
export interface CreateTerritoryPayload {
	name: string;
}

export interface Country {
	id: number;
	name: string;
	country_code: string;
	territory: number;
	is_active: boolean;
}

export interface CreateCountryPayload {
	name: string;
	territory: number;
	country_code: number;
}

export interface SyncResponse {
	detail: string;
	response_list: { detail: string }[];
}
