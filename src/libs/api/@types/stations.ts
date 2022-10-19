/* eslint-disable @typescript-eslint/no-explicit-any */

export interface StationType {
	id: number;
	name: string;
	is_active: boolean;
}

export interface StationTypeResponse {
	count: number;
	next?: any;
	previous?: any;
	results: StationType[];
}

export interface StationPayload {
	name: string;
	station_type: number;
}

export interface StationTypeDetails {
	id: number;
	name: string;
	is_active: boolean;
}

export interface Station {
	id: number;
	name: string;
	station_type: number;
	description?: any;
	station_code: string;
	is_active: boolean;
	station_type_details: StationTypeDetails;
}

export interface StationsResponse {
	count: number;
	next?: any;
	previous?: any;
	results: Station[];
}
