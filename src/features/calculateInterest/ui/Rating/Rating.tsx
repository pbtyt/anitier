import { Minus, Plus, Star } from 'lucide-react';
import { useMemo } from 'react';
import styles from './Rating.module.scss';

interface RatingProps {
	rating: number;
	handleOnPlusClick: () => void;
	handleOnMinusClick: () => void;
}

const ActiveStarProps = { fill: 'var(--at-star-active-color)', strokeWidth: 0 };
const EmptyStarProps = {
	fill: 'var(--at-star-inactive-color)',
	strokeWidth: 0,
};

export function Rating({
	rating,
	handleOnPlusClick,
	handleOnMinusClick,
}: RatingProps) {
	const stars = useMemo(
		() =>
			[...Array(5)].map((_, index) => (
				<Star
					key={`star${index}`}
					{...(rating > index ? ActiveStarProps : EmptyStarProps)}
					width={30}
					height={30}
				/>
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
