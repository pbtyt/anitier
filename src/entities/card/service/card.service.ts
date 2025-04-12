import { axiosWithAuth } from '@/shared/interceptors';
import { CardFormStateType, ICardResponse } from '../model/types';

class CardService {
	private BASE_ROOT = '/card';

	async getCards() {
		const response = await axiosWithAuth.get<ICardResponse[]>(this.BASE_ROOT);

		return response;
	}

	async createCard(data: CardFormStateType) {
		const response = await axiosWithAuth.post<ICardResponse>(
			this.BASE_ROOT,
			data
		);
		return response;
	}

	async updateCard(id: string, data: CardFormStateType) {
		const response = await axiosWithAuth.put<ICardResponse>(
			`${this.BASE_ROOT}/${id}`,
			data
		);
		return response;
	}

	async deleteCard(id: string) {
		const response = await axiosWithAuth.delete<ICardResponse>(
			`${this.BASE_ROOT}/${id}`
		);
		return response;
	}
}

export const cardService = new CardService();
