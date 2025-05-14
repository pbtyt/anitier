import { CardInfoSection } from './CardInfoSection/CardInfoSection';
import styles from './CardPage.module.scss';
import { TabSection } from './TabsSection/TabSection';

export function CardPage({ cardId }: { cardId: string }) {
	return (
		<main className={styles.wrapper}>
			<CardInfoSection cardId={cardId} />
			<TabSection cardId={cardId} />
		</main>
	);
}
