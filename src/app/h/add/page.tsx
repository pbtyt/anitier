import { AddNewCard } from '@/features/addnewcard';
import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Главная страница',
	...NO_INDEX_PAGE,
};

export default function AddPage() {
	return <AddNewCard />;
}
