export interface IEpisodeResponse {
	id: string;
	createdAt: string;
	updatedAt: string;

	title: string;
}

export type EpisodeFormStateType = Partial<
	Omit<IEpisodeResponse, 'id' | 'updatedAt' | 'createdAt'>
>;
