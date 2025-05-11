import { ChoosePage } from '@/_pages/choosePage';
import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Главная страница',
	...NO_INDEX_PAGE,
};

// CHOOSE MENU
export default function ChoosePageRoute() {
	return <ChoosePage />;
}
