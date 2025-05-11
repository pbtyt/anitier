import { CardType } from '@/entities/card/model/types';
import { CARD_STORAGE_KEY } from '@/shared/constants/localstorage.constants';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ICardStore {
	cards: Array<CardType>;

	addCard: (newCard: Omit<CardType, 'id'>) => void;
	removeAll: () => void;
}

export const useCardStore = create<ICardStore>()(
	persist(
		(set, get) => ({
			cards: [] as CardType[],
			addCard(newCard: Omit<CardType, 'id'>) {
				set(state => {
					const newID = state.cards.length > 0 ? state.cards.at(-1)!.id + 1 : 0;

					return {
						cards: [
							...state.cards,
							{
								id: newID,
								title: newCard.title,
								posterUrl: newCard.posterUrl,
								criteria: newCard.criteria,
							},
						],
					};
				});
			},
			removeAll() {
				set(state => {
					return { cards: [] };
				});
			},
		}),
		{
			name: CARD_STORAGE_KEY,
		}
	)
);
