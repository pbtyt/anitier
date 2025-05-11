import { CriteriaType } from '@/entities/card';

type CriteriaRatingType = { criteriaId: string; rating: number };
export const calculateInterest = (
	criteriaRating: CriteriaRatingType[],
	criteria: CriteriaType[]
) => {
	const totalWeight = criteria.reduce((acc, c) => acc + c.weight, 0);

	return criteriaRating.reduce((acc, c) => {
		//TODO: Rename
		const criteriaConfig = criteria.find(cr => cr.id === c.criteriaId);
		return acc + ((criteriaConfig?.weight || 0) / totalWeight) * c.rating;
	}, 0);
};
