import { CustomStar } from '@/shared/ui/Star/Star';
import { Minus, Plus } from 'lucide-react';
import { useMemo } from 'react';
import styles from './Rating.module.scss';

interface RatingProps {
	rating: number;
	handleOnPlusClick: () => void;
	handleOnMinusClick: () => void;
}

export function Rating({
	rating,
	handleOnPlusClick,
	handleOnMinusClick,
}: RatingProps) {
	const stars = useMemo(
		() =>
			[...Array(5)].map((_, index) => (
				<CustomStar key={`star${index}`} isActive={rating > index} />
			)),
		[rating]
	);
	return (
		<div className={styles.criteriaSelectRating}>
			<button className={styles.controlButton} onClick={handleOnMinusClick}>
				<Minus width={24} className={styles.ratingButton} />
			</button>

			<div className={styles.starsWrapper}>{stars}</div>

			<button className={styles.controlButton} onClick={handleOnPlusClick}>
				<Plus width={24} className={styles.ratingButton} />
			</button>
		</div>
	);
}
