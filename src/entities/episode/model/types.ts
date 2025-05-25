//TODO: Rewrite all types

import { type ICriteriaResponse } from '@/entities/criteria';

export interface IEpisodeRatingResponse {
	id: string;

	rating: number;
	episodeId: string;
	criteriaId: string;

	criteria: ICriteriaResponse;
}

export interface IEpisodeResponse {
	id: string;

	title: string;
	number: number;

	totalEpisodeRating: number;
	episodeRating: IEpisodeRatingResponse[];
}

export type EpisodeFormStateType = Partial<
	Omit<IEpisodeResponse, 'id' | 'updatedAt' | 'createdAt'>
>;

type EpisodeRatingType = { criteriaId: string; rating: number };
export type EpisodeUpdateType = EpisodeFormStateType &
	Partial<{
		ratings: Partial<EpisodeRatingType[]>;
	}>;
