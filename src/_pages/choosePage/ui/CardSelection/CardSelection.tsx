'use client';

import { Card } from '@/entities/card';
import { useCards } from '@/entities/card/hooks/useCards';
import { CardAdd } from '../CardAdd/CardAdd';
import styles from './CardSelection.module.scss';

export function CardSelection() {
	const { items } = useCards();

	return (
		<section className={styles.cardsContainer}>
			{items?.map(card => (
				<Card
					key={card.id}
					cardData={{
						id: card.id,
						title: card.title,
						posterUrl: card.posterUrl!,
					}}
				/>
			))}
			<CardAdd className={styles.card} />
		</section>
	);
}
