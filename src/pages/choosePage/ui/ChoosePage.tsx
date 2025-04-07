import { CardAdd } from './CardAdd/CardAdd';
import styles from './ChoosePage.module.scss';

export function ChoosePage() {
	return (
		<main className={styles.main}>
			<section className={styles.cardsContainer}>
				<CardAdd className={styles.card} />
			</section>
		</main>
	);
}
