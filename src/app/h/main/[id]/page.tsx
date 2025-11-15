import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants';
import type { Metadata } from 'next';
import styles from './page.module.scss';

export const metadata: Metadata = {
	...NO_INDEX_PAGE,
};

export default function HomePage() {
	// const { id: animeID } = useParams<{ id: string }>();
	return <main className={styles.main}></main>;
}
