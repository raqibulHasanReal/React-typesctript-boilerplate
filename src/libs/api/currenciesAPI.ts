import config from '@/config';
import { authService } from '../auth';
import { CreateCurrencyPayload, Currency, CurrencyResponse, SyncResponse } from './@types';
import { Common } from './common';
import { HttpAuthService } from './httpService';

class CurrencyAPI extends Common {
	constructor(private http: HttpAuthService) {
		super(config.itemsPerPage);
	}

	currencies(page = 1) {
		const paginateURL = this.getPaginateURL(page, 'currencies/');
		return this.http.get<CurrencyResponse>(paginateURL);
	}

	createCurrency(currency: CreateCurrencyPayload) {
		return this.http.post<Currency>('currencies/', currency);
	}

	updateCurrency(ID: number, method: CreateCurrencyPayload) {
		return this.http.put<Currency>(`currencies/${ID}/`, method);
	}

	updateCurrencyStatus(ID: number, is_active: boolean) {
		return this.http.patch<Currency>(`currencies/${ID}/update-status/`, { is_active });
	}

	currenciesSyncAll() {
		return this.http.post<SyncResponse>('currencies/sync-all-company/', {});
	}
}

const httpAuthService = new HttpAuthService(config.apiURL, authService);
export const currencyAPI = new CurrencyAPI(httpAuthService);
