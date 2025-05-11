'use client';

import { CriteriaType, EpisodeRatingType } from '@/entities/card';
import { SetStateType } from '@/shared/utils/utilTypes';
import { useRating } from '../../hooks/useRating';
import { Criteria } from '../Criteria/Criteria';
import styles from './CriteriaList.module.scss';

interface ICriteriaProps {
	criteria: CriteriaType[] | [];
	episodeRating: EpisodeRatingType[] | [];
	setEpisodeRating: SetStateType<EpisodeRatingType[]>;
}

export function CriteriaList({
	criteria,
	episodeRating,
	setEpisodeRating,
}: ICriteriaProps) {
	const handleRatingChange = (criteriaId: string, newRating: number) => {
		setEpisodeRating(prev =>
			prev.map(item =>
				item.criteriaId === criteriaId ? { ...item, rating: newRating } : item
			)
		);
	};

	const { interest } = useRating(episodeRating, criteria);

	return (
		<>
			<div className={styles.wrapper}>
				{criteria.map(c => (
					<Criteria
						key={c.id}
						data={c}
						currentRating={
							episodeRating.find(cr => cr.criteriaId === c.id)?.rating || 0
						}
						onRatingChange={newRating => handleRatingChange(c.id, newRating)}
					/>
				))}
			</div>
			Interest: "{interest.toFixed(2)}"
		</>
	);
}
