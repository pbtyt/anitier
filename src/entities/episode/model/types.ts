import { type ICriteriaResponse } from '@/entities/criteria';

export interface IEpisodeResponse {
	id: string;

	title: string;
	number: number;

	totalEpisodeRating: number;
	episodeRating: IEpisodeRatingResponse[];
}

export interface IEpisodeRatingResponse {
	id: string;

	rating: number;

	episodeId: string;
	criteriaId: string;

	criteria: ICriteriaResponse;
}

export type EpisodeFormStateType = Partial<
	Omit<IEpisodeResponse, 'id' | 'updatedAt' | 'createdAt'>
>;

export type EpisodeRatingType = { criteriaId: string; rating: number };
export type EpisodeUpdateType = EpisodeFormStateType &
	Partial<{
		ratings: Partial<EpisodeRatingType[]>;
	}>;
