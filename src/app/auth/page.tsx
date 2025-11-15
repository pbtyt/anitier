import { AuthPage } from '@/_pages/authPage';
import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Авторизация',
	...NO_INDEX_PAGE,
};

// AUTH
export default function AuthPageRoute() {
	return <AuthPage />;
}
