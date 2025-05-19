import { CustomProgressBar } from '@/shared/ui/CustomProgressBar/CustomProgressBar';
import styles from './CriteriaTab.module.scss';

export function CriteriaTab({ cardId }: { cardId: string }) {
	return (
		<section className={styles.wrapper}>
			<CustomProgressBar percentage={80} />
		</section>
	);
}
