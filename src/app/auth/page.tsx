import { AuthForm } from '@/features/auth';
import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Главная страница',
	...NO_INDEX_PAGE,
};

// AUTH
export default function AuthPage() {
	return <AuthForm />;
}
