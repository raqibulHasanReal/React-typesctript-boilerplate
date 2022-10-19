/* eslint-disable @typescript-eslint/ban-types */
import config from '@/config';
import { authService } from '../auth';
import { EmailEvent, EmailEventsReponse, EmailProvider, EmailProvidersReponse } from './@types';
import { Common } from './common';
import { HttpAuthService } from './httpService';

class EmailSettingsAPI extends Common {
	constructor(private http: HttpAuthService) {
		super(config.itemsPerPage);
	}

	events(page = 1) {
		const paginateURL = this.getPaginateURL(page, 'email-events/');
		return this.http.get<EmailEventsReponse>(paginateURL);
	}

	event(ID: number) {
		return this.http.get<EmailEvent>(`email-events/${ID}/`);
	}

	updateEvent(ID: number, name: string) {
		return this.http.put<EmailEvent>(`email-events/${ID}/`, { name });
	}

	updateEventStatus(ID: number, is_active: boolean) {
		return this.http.patch<EmailEvent>(`email-events/${ID}/update-status/`, { is_active });
	}

	createEvent(name: string) {
		return this.http.post<EmailEvent>('email-events/', { name });
	}

	providers(page = 1) {
		const paginateURL = this.getPaginateURL(page, 'email-providers/');
		return this.http.get<EmailProvidersReponse>(paginateURL);
	}

	provider(ID: number) {
		return this.http.get<EmailProvider>(`email-providers/${ID}/`);
	}

	updateProvider(ID: number, name: string) {
		return this.http.put<EmailProvider>(`email-providers/${ID}/`, { name });
	}

	updateProviderStatus(ID: number, is_active: boolean) {
		return this.http.patch<EmailProvider>(`email-providers/${ID}/update-status/`, { is_active });
	}

	createProvider(name: string) {
		return this.http.post<EmailProvider>('email-providers/', { name });
	}

	providersSyncAll() {
		return this.http.post<{ details: string }>('email-providers/sync-all-company/', {});
	}

	eventsSyncAll() {
		return this.http.post<{ details: string }>('email-events/sync-all-company/', {});
	}
}

const httpAuthService = new HttpAuthService(config.apiURL, authService);
export const emailSettingsAPI = new EmailSettingsAPI(httpAuthService);
