import axios, { CreateAxiosDefaults } from 'axios';
import { authService } from '../entities/auth/services/auth.service';
import {
	getAccessToken,
	removeFromStorage,
} from '../entities/auth/services/token.service';
import { errorCatch } from './error';

const options: CreateAxiosDefaults = {
	baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
	headers: {
		'Content-Type': 'application/json',
	},
	withCredentials: true,
};

const uploadOptions: CreateAxiosDefaults = {
	baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
	headers: {
		'Content-Type': 'multipart/form-data',
	},
	withCredentials: true,
};

const axiosClassic = axios.create(options);
const axiosUpload = axios.create(uploadOptions);
const axiosWithAuth = axios.create(options);

axiosWithAuth.interceptors.request.use(config => {
	const accessToken = getAccessToken();

	if (config?.headers && accessToken)
		config.headers.Authorization = `Bearer ${accessToken}`;

	return config;
});

axiosWithAuth.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config;
		if (
			error?.response?.status === 401 ||
			errorCatch(error) === 'jwt expired' ||
			(errorCatch(error) === 'jwt must be provided' &&
				error.config &&
				!error.config._isRetry)
		) {
			originalRequest._isRetry = true;
			try {
				await authService.getNewTokens();
				return axiosWithAuth.request(originalRequest);
			} catch (error) {
				if (errorCatch(error) === 'jwt expired') removeFromStorage();
			}
		}

		throw error;
	}
);

export { axiosClassic, axiosUpload, axiosWithAuth };
