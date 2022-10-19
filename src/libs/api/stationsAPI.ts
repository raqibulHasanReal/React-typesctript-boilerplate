import config from '@/config';
import { authService } from '../auth';
import {
	Station,
	StationPayload,
	StationsResponse,
	StationType,
	StationTypeResponse,
} from './@types';
import { Common } from './common';
import { HttpAuthService } from './httpService';

class StationsAPI extends Common {
	constructor(private http: HttpAuthService) {
		super(config.itemsPerPage);
	}

	types(page = 1) {
		const paginateURL = this.getPaginateURL(page, 'station-types/');
		return this.http.get<StationTypeResponse>(paginateURL);
	}

	createType(name: string) {
		return this.http.post<StationType>('station-types/', { name });
	}

	updateType(ID: number, name: string) {
		return this.http.put<StationType>(`station-types/${ID}/`, { name });
	}

	updateTypeStatus(ID: number, is_active: boolean) {
		return this.http.patch<StationType>(`station-types/${ID}/update-status/`, { is_active });
	}

	typesSyncAll() {
		return this.http.post<{ details: string }>('station-types/sync-all-company/', {});
	}

	stations(page = 1) {
		const paginateURL = this.getPaginateURL(page, 'stations/');
		return this.http.get<StationsResponse>(paginateURL);
	}

	createStation(payload: StationPayload) {
		return this.http.post<Station>('stations/', payload);
	}

	updateStation(ID: number, payload: StationPayload) {
		return this.http.put<Station>(`stations/${ID}/`, payload);
	}

	updateStationStatus(ID: number, is_active: boolean) {
		return this.http.patch<Station>(`stations/${ID}/update-status/`, { is_active });
	}

	stationsSyncAll() {
		return this.http.post<{ details: string }>('stations/sync-all-company/', {});
	}
}

const httpAuthService = new HttpAuthService(config.apiURL, authService);
export const stationsAPI = new StationsAPI(httpAuthService);
