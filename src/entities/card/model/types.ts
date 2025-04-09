import { TypeFrom } from '@/shared/utils/utilTypes';

export type CardType = {
	id: number;
	title: string;
	posterSrc?: string;

	criteria: CriteriaType[];
};

export type CriteriaType = {
	id: number;
	weight: number;
	title: string;
};

export interface ICardResponse {
	id: string;

	createdAt?: string;
	updatedAt?: string;

	title: string;
	poster?: string;
	status?: CardStatusType;
	type?: CardTypeType;
	episodesNumber: number;
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
