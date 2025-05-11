import { CardSelection } from './CardSelection/CardSelection';
import styles from './ChoosePage.module.scss';

export function ChoosePage() {
	return (
		<main className={styles.main}>
			<CardSelection />
		</main>
	);
}
