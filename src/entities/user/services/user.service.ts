import { axiosWithAuth } from '@/entities/auth';
import { IUserProfile, type UserFormType } from '../model/types';

class UserService {
	private BASE_URL = '/user/profile';

	async getProfile() {
		const response = await axiosWithAuth.get<IUserProfile>(this.BASE_URL);
		return response.data;
	}

	async update(data: UserFormType) {
		const response = await axiosWithAuth.put(this.BASE_URL, data);
		return response.data;
	}
}

export const userService = new UserService();
