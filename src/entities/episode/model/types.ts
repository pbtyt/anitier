interface IEpisodeRatingResponse {
	id: string;

	rating: number;
	episodeId: string;
	criteriaId: string;
}

export interface IEpisodeResponse {
	id: string;
	createdAt: string;
	updatedAt: string;

	title: string;

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
