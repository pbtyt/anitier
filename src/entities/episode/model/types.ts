export interface IEpisodeResponse {
	id: string;
	createdAt: string;
	updatedAt: string;

	title: string;
}

export type EpisodeFormStateType = Partial<
	Omit<IEpisodeResponse, 'id' | 'updatedAt' | 'createdAt'>
>;

type EpisodeRatingType = { criteriaId: string; rating: number };
export type EpisodeUpdateType = EpisodeFormStateType &
	Partial<{
		ratings: Partial<EpisodeRatingType[]>;
	}>;
