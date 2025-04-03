import { SITE_ROUTES_BASE } from '@/shared/config/page-url.config';
import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants';
import { Card, CardAdd } from '@/widgets/card';
import type { Metadata } from 'next';
import styles from './page.module.scss';

export const metadata: Metadata = {
	title: 'Главная страница',
	...NO_INDEX_PAGE,
};

// CHOOSE MENU
export default function ChosePage() {
	console.log(SITE_ROUTES_BASE.HOME);
	return (
		<main className={styles.main}>
			<section className={styles.cardsContainer}>
				<Card href={`${SITE_ROUTES_BASE.HOME}/1`} className={styles.card} />
				<Card href={`${SITE_ROUTES_BASE.HOME}/2`} className={styles.card} />
				<CardAdd className={styles.card} />
			</section>
		</main>
	);
}
