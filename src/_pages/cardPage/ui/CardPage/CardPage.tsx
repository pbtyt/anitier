import { CardInfoSection } from './CardInfoSection/CardInfoSection';
import styles from './CardPage.module.scss';

export function CardPage({ cardId }: { cardId: string }) {
	return (
		<main className={styles.wrapper}>
			<CardInfoSection cardId={cardId} />
		</main>
	);
}
