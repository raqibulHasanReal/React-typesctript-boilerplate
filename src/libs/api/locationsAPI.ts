import config from '@/config';
import { authService } from '../auth';
import {
	Country,
	CreateCountryPayload,
	CreateTerritoryPayload,
	SyncResponse,
	Territory,
} from './@types';
import { HttpAuthService } from './httpService';

class LocationsAPI {
	constructor(private http: HttpAuthService) {}

	territories() {
		return this.http.get<Territory[]>('territories/');
	}

	createTerritory(territory: CreateTerritoryPayload) {
		return this.http.post<Territory>('territories/', territory);
	}

	updateTerritory(ID: number, method: CreateTerritoryPayload) {
		return this.http.put<Territory>(`territories/${ID}/`, method);
	}

	territoriesSyncAll() {
		return this.http.post<SyncResponse>('territories/sync-all-company/', {});
	}

	updateTerritoryStatus(ID: number, is_active: boolean) {
		return this.http.patch<Territory>(`territories/${ID}/update-status/`, { is_active });
	}

	countries() {
		return this.http.get<Country[]>('countries/');
	}

	createCountry(country: CreateCountryPayload) {
		return this.http.post<Country>('countries/', country);
	}

	updateCountry(ID: number, method: CreateCountryPayload) {
		return this.http.put<Country>(`countries/${ID}/`, method);
	}

	countriesSyncAll() {
		return this.http.post<SyncResponse>('countries/sync-all-company/', {});
	}

	updateCountryStatus(ID: number, is_active: boolean) {
		return this.http.patch<Country>(`countries/${ID}/update-status/`, { is_active });
	}
}

const httpAuthService = new HttpAuthService(config.apiURL, authService);
export const locationsAPI = new LocationsAPI(httpAuthService);
