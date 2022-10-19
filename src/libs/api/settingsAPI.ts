import config from '@/config';
import { authService } from '../auth';
import {
	APIKey,
	APIKeyRevokedResponse,
	APIKeysResponse,
	ConfigurationsResponse,
	Permission,
	PermissionsResponse,
	UpdateConfigurationsPayload,
	UserRole,
	UserRolePayload,
	UserRolesResponse,
} from './@types';
import { Common } from './common';
import { HttpAuthService } from './httpService';

class SettingsAPI extends Common {
	constructor(private http: HttpAuthService) {
		super(config.itemsPerPage);
	}

	permissions() {
		return this.http.get<Permission>('auth-permissions/');
	}

	contentPermissions() {
		return this.http.get<PermissionsResponse[]>('content-type-permissions/');
	}

	userRoles(page = 1) {
		const paginateURL = this.getPaginateURL(page, 'auth-groups/');
		return this.http.get<UserRolesResponse>(paginateURL);
	}

	userRole(ID: number) {
		return this.http.get<UserRole>(`auth-groups/${ID}/`);
	}

	updateUserRole(ID: number, payload: UserRolePayload) {
		return this.http.put<UserRole>(`auth-groups/${ID}/`, payload);
	}

	createUserRole(payload: UserRolePayload) {
		return this.http.post<UserRole>('auth-groups/', payload);
	}

	apiKeys() {
		return this.http.get<APIKeysResponse>('tenant/api-keys/');
	}

	apiKeyCreate(name: string) {
		return this.http.post<APIKey>('tenant/api-keys/', { name });
	}

	apiKeyRevoke(id: number) {
		return this.http.put<APIKeyRevokedResponse>(`tenant/api-keys/${id}/revoke-access/`, {
			id,
			revoked: true,
		});
	}

	configurations() {
		return this.http.get<ConfigurationsResponse>('configuration/');
	}

	updateConfigurations(payload: UpdateConfigurationsPayload) {
		return this.http.put<ConfigurationsResponse>('configuration/', payload);
	}
}

const httpAuthService = new HttpAuthService(config.apiURL, authService);
export const settingsAPI = new SettingsAPI(httpAuthService);
