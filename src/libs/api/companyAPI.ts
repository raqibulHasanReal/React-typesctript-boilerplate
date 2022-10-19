/* eslint-disable @typescript-eslint/ban-types */
import config from '@/config';
import { authService } from '../auth';
import {
	Company,
	CompanyConfigResponse,
	CompanyPayload,
	CompanyUserPayload,
	CompanyUserResponse,
	EmailProvider,
	EmailProviderConfigPayload,
	EmailProviderConfigResponse,
	PaymentConfigCreatePayload,
	PaymentConfigCreateResponse,
	PaymentConfigResponse,
	TenantDBPayload,
	TenantDBResponse,
	UnconfiguredPaymentMethod,
} from './@types';
import { Common } from './common';
import { HttpAuthService } from './httpService';

class CompanyAPI extends Common {
	constructor(private http: HttpAuthService) {
		super(config.itemsPerPage);
	}

	companies() {
		return this.http.get<Company[]>('companies/');
	}

	company(ID: number) {
		return this.http.get<Company>(`companies/${ID}/`);
	}

	createCompany(company: CompanyPayload) {
		return this.http.post<Company>('companies/', company);
	}

	updateCompany(ID: number, company: CompanyPayload) {
		return this.http.put<Company>(`companies/${ID}/`, company);
	}

	updateCompanyStatus(ID: number, is_active: boolean) {
		return this.http.patch<Company>(`companies/${ID}/update-status/`, { is_active });
	}

	createTenantDB(ID: number, payload: TenantDBPayload) {
		return this.http.post<TenantDBResponse>(`tenant/companies/${ID}/tenant-db/`, payload);
	}

	tenantDB(ID: number) {
		return this.http.get<TenantDBResponse>(`tenant/companies/${ID}/tenant-db/`);
	}

	updateTenantDB(ID: number, payload: TenantDBPayload) {
		return this.http.put<TenantDBResponse>(`tenant/companies/${ID}/tenant-db/update/`, payload);
	}

	migrateDB(ID: number) {
		return this.http.post<{}>(`tourbooker/companies/${ID}/db-migrate/`, {});
	}

	loadInitialData(ID: number) {
		return this.http.post<{}>(`tourbooker/companies/${ID}/load-data/`, {});
	}

	createCompanyUser(ID: number, payload: CompanyUserPayload) {
		return this.http.post<CompanyUserResponse>(`tourbooker/companies/${ID}/users/`, payload);
	}

	configurations(ID: number) {
		return this.http.get<CompanyConfigResponse>(`tourbooker/companies/${ID}/configuration/`);
	}

	updateConfigurations(ID: number, payload: CompanyConfigResponse) {
		return this.http.put<CompanyConfigResponse>(
			`tourbooker/companies/${ID}/configuration/`,
			payload
		);
	}

	// Email configurations
	unconfiguredEmailProviders(ID: number) {
		return this.http.get<EmailProvider[]>(
			`tourbooker/companies/${ID}/unconfigured-email-providers/`
		);
	}

	emailProviderConfig(ID: number, page = 1) {
		const paginateURL = this.getPaginateURL(
			page,
			`tourbooker/companies/${ID}/email-provider-configurations/`
		);
		return this.http.get<EmailProviderConfigResponse>(paginateURL);
	}

	createEmailProviderConfig(ID: number, payload: EmailProviderConfigPayload) {
		return this.http.post<EmailProviderConfigResponse>(
			`tourbooker/companies/${ID}/email-provider-configurations/`,
			payload
		);
	}

	updateEmailProviderConfig(ID: number, providerID: number, payload: EmailProviderConfigPayload) {
		return this.http.put<EmailProviderConfigResponse>(
			`tourbooker/companies/${ID}/email-provider-configurations/${providerID}/`,
			payload
		);
	}

	updateEmailProviderConfigStatus(ID: number, providerID: number, is_active: boolean) {
		return this.http.patch<EmailProviderConfigResponse>(
			`tourbooker/companies/${ID}/email-provider-configurations/${providerID}/update-status/`,
			{ is_active }
		);
	}

	updateEmailTemplates(ID: number, payload: API.EmailTeamplatePayload[]) {
		return this.http.put<EmailProviderConfigResponse['results'][0]['email_event_template']>(
			`tourbooker/companies/${ID}/email-event-template/`,
			payload
		);
	}

	// Payment configurations
	unconfiguredPaymentMethods(ID: number) {
		return this.http.get<UnconfiguredPaymentMethod[]>(
			`tourbooker/companies/${ID}/unconfigured-payment-methods/`
		);
	}

	paymentConfigurations(ID: number, page = 1) {
		const paginateURL = this.getPaginateURL(
			page,
			`tourbooker/companies/${ID}/payment-method-configurations/`
		);
		return this.http.get<PaymentConfigResponse>(paginateURL);
	}

	createPaymentConfig(ID: number, payload: PaymentConfigCreatePayload) {
		return this.http.post<PaymentConfigCreateResponse>(
			`tourbooker/companies/${ID}/payment-method-configurations/`,
			payload
		);
	}

	updatePaymentConfig(ID: number, configID: number, payload: PaymentConfigCreatePayload) {
		return this.http.put<PaymentConfigCreateResponse>(
			`tourbooker/companies/${ID}/payment-method-configurations/${configID}/`,
			payload
		);
	}

	updatePaymentConfigStatus(ID: number, configID: number, is_active: boolean) {
		return this.http.patch<PaymentConfigResponse>(
			`tourbooker/companies/${ID}/payment-method-configurations/${configID}/update-status/`,
			{ is_active }
		);
	}
}

const httpAuthService = new HttpAuthService(config.apiURL, authService);
export const companyAPI = new CompanyAPI(httpAuthService);
