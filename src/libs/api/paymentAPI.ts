import config from '@/config';
import { authService } from '../auth';
import { CreateMethodPayload, PaymentMethod, PaymentMethodsResponse } from './@types';
import { Common } from './common';
import { HttpAuthService } from './httpService';

class PaymentAPI extends Common {
	constructor(private http: HttpAuthService) {
		super(config.itemsPerPage);
	}

	methods(page = 1) {
		const paginateURL = this.getPaginateURL(page, 'payment-methods/');
		return this.http.get<PaymentMethodsResponse>(paginateURL);
	}

	createMethod(method: CreateMethodPayload) {
		return this.http.post<PaymentMethod>('payment-methods/', method);
	}

	updateMethod(ID: number, method: CreateMethodPayload) {
		return this.http.put<PaymentMethod>(`payment-methods/${ID}/`, method);
	}

	updateMethodStatus(ID: number, is_active: boolean) {
		return this.http.patch<PaymentMethod>(`payment-methods/${ID}/update-status/`, { is_active });
	}

	methodsSyncAll() {
		return this.http.post<{ details: string }>('payment-method/sync-all-company/', {});
	}
}

const httpAuthService = new HttpAuthService(config.apiURL, authService);
export const paymentAPI = new PaymentAPI(httpAuthService);
