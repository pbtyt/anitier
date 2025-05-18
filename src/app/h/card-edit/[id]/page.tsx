import { EditCardPage } from '@/_pages/editCardPage';
import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Редактировать',
	...NO_INDEX_PAGE,
};

export default async function CardPageRoute({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	return <EditCardPage id={id} />;
}
