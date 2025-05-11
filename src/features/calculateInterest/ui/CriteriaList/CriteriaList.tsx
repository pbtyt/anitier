'use client';

import { CriteriaType } from '@/entities/card';
import { useState } from 'react';
import { useRating } from '../../hooks/useRating';
import { Criteria } from '../Criteria/Criteria';
import styles from './CriteriaList.module.scss';

interface ICriteriaProps {
	criteria: CriteriaType[] | [];
}

export function CriteriaList({ criteria }: ICriteriaProps) {
	//{criteriaId: rating, ...}
	const [criteriaRatings, setCriteriaRatings] = useState<
		Record<string, number>
	>({});

	const handleRatingChange = (criteriaId: string, newRating: number) => {
		setCriteriaRatings(prev => ({
			...prev,
			[criteriaId]: newRating,
		}));
	};

	const { interest } = useRating(criteriaRatings, criteria);

	return (
		<>
			<div className={styles.wrapper}>
				{criteria.map(c => (
					<Criteria
						key={c.id}
						data={c}
						currentRating={criteriaRatings[c.id] || 0}
						onRatingChange={newRating => handleRatingChange(c.id, newRating)}
					/>
				))}
			</div>
			Interest: "{interest.toFixed(2)}"
		</>
	);
}
