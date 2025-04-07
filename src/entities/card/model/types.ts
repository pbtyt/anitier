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
