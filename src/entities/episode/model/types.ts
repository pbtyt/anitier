//TODO: Rewrite all types

import { CriteriaType } from '@/entities/card';

export interface IEpisodeRatingResponse {
	id: string;

	rating: number;
	episodeId: string;
	criteriaId: string;

	criteria: CriteriaType;
}

export interface IEpisodeResponse {
	id: string;
	createdAt: string;
	updatedAt: string;

	title: string;
	number: number;

	episodeRating: IEpisodeRatingResponse[];

	totalEpisodeRating: number;
}

export type EpisodeFormStateType = Partial<
	Omit<IEpisodeResponse, 'id' | 'updatedAt' | 'createdAt'>
>;

type EpisodeRatingType = { criteriaId: string; rating: number };
export type EpisodeUpdateType = EpisodeFormStateType &
	Partial<{
		ratings: Partial<EpisodeRatingType[]>;
	}>;
