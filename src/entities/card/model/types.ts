//TODO: Rewrite all types

import { type CriteriaType } from '@/entities/criteria';
import { TypeFrom } from '@/shared/utils/utilTypes';

export type CardType = {
	id: number;
	title: string;
	posterUrl?: string;

	criteria: CriteriaType[];
};

export type EpisodeRatingType = { rating: number; criteriaId: string };
export type EpisodeType = {
	id: string;
	title: string;
	episodeRating: EpisodeRatingType[];
};

export interface ICardResponse {
	id: string;

	createdAt: string;
	updatedAt: string;

	title: string;
	posterUrl?: string;
	status: CardStatusType;
	type: CardTypeType;
	episodesNumber: number;
	totalCardRating: number;

	criteria?: CriteriaType[];
	episodes?: EpisodeType[];
}

export const Type = {
	TV: 'TV',
	FILM: 'FILM',
} as const;

export const Status = {
	ONGOING: 'ONGOING',
	FINISHED: 'FINISHED',
} as const;

export type CardTypeType = TypeFrom<typeof Type>;
export type CardStatusType = TypeFrom<typeof Status>;

export type CardFormStateType = Partial<
	Omit<ICardResponse, 'id' | 'updatedAt' | 'createdAt'>
>;
