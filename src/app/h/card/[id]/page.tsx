import { CardPage } from '@/_pages/cardPage';
import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Аниме',
	...NO_INDEX_PAGE,
};

// CHOOSE MENU
export default function CardPageRoute() {
	return <CardPage />;
}
