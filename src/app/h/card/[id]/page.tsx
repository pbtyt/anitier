import { CardPage } from '@/_pages/cardPage';
import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Аниме',
	...NO_INDEX_PAGE,
};

export default async function CardPageRoute({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	return <CardPage cardId={id} />;
}
