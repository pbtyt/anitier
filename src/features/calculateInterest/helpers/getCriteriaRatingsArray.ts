interface RatingItem {
	criteriaId: string;
	rating: number;
}

export const getCriteriaRatingsArray = (
	ratings: Record<string, number>
): RatingItem[] => {
	return Object.entries(ratings).map(([criteriaId, rating]) => ({
		criteriaId,
		rating,
	}));
};
