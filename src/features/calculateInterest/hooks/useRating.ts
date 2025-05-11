import { CriteriaType, EpisodeRatingType } from '@/entities/card';
import { useEffect, useMemo } from 'react';
import { calculateInterest } from '../helpers/calculateInterest';

export const useRating = (
	criteriaRatings: EpisodeRatingType[],
	criteria: CriteriaType[]
) => {
	const interest = useMemo(
		() => calculateInterest(criteriaRatings, criteria),
		[criteriaRatings]
	);
	useEffect(() => {}, [interest]);

	return { interest };
};
