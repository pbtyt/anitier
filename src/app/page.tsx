import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants';
import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
	title: 'Главная страница',
	...NO_INDEX_PAGE,
};

export default function HomePage() {
	return <main className={styles.main}></main>;
}
