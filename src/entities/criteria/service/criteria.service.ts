import { axiosWithAuth } from '@/shared/interceptors';
import { CriteriaFormStateType, type ICriteriaResponse } from '../model/types';

class CriteriaService {
	private BASE_ROOT = '/card/criteria';

	async getCriteria(cardId: string) {
		const response = await axiosWithAuth.get<ICriteriaResponse[]>(
			`${this.BASE_ROOT}/${cardId}/`
		);

		return response;
	}

	async createCriteria(cardId: string, data: CriteriaFormStateType) {
		const response = await axiosWithAuth.post<ICriteriaResponse>(
			`${this.BASE_ROOT}/${cardId}`,
			data
		);
		return response;
	}

	async updateCriteria(id: string, data: CriteriaFormStateType) {
		const response = await axiosWithAuth.put<ICriteriaResponse>(
			`${this.BASE_ROOT}/${id}`,
			data
		);
		return response;
	}

	async deleteCriteria(id: string) {
		const response = await axiosWithAuth.delete<ICriteriaResponse>(
			`${this.BASE_ROOT}/${id}`
		);
		return response;
	}
}

export const criteriaService = new CriteriaService();
