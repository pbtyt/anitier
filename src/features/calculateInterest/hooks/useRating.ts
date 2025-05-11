import { CriteriaType } from '@/entities/card';
import { useEffect, useMemo } from 'react';
import { calculateInterest } from '../helpers/calculateInterest';
import { getCriteriaRatingsArray } from '../helpers/getCriteriaRatingsArray';

export const useRating = (
	criteriaRatings: Record<string, number>,
	criteria: CriteriaType[]
) => {
	const interest = useMemo(
		() => calculateInterest(getCriteriaRatingsArray(criteriaRatings), criteria),
		[criteriaRatings]
	);
	useEffect(() => {}, [interest]);

	return { interest };
};
