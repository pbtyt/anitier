import { TypeFrom } from '@/shared/utils/utilTypes';

export type CardType = {
	id: number;
	title: string;
	posterUrl?: string;

	criteria: CriteriaType[];
};

export type CriteriaType = {
	id: string;
	title: string;
	weight: number;
};

export type EpisodeRatingType = { rating: number; criteriaId: string };
export type EpisodeType = {
	id: string;
	title: string;
	episodeRating: EpisodeRatingType[];
};

export interface ICardResponse {
	id: string;

	createdAt?: string;
	updatedAt?: string;

	title: string;
	posterUrl?: string;
	status?: CardStatusType;
	type?: CardTypeType;
	episodesNumber: number;

	criteria?: CriteriaType[];
	episodes?: EpisodeType[];
}

const Type = {
	TV: 'TV',
	FILM: 'FILM',
} as const;

const Status = {
	ONGOING: 'ONGOING',
	FINISHED: 'FINISHED',
} as const;

export type CardTypeType = TypeFrom<typeof Type>;
export type CardStatusType = TypeFrom<typeof Status>;

export type CardFormStateType = Partial<
	Omit<ICardResponse, 'id' | 'updatedAt' | 'createdAt'>
>;
