import { SITE_NAME } from '@/shared/constants/seo.constants';

import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `${SITE_NAME} | %s`,
	},
	description: '',
	// icons: {
	// 	icon: '/favicon32.png',
	// },
};

export default function ChooseMenuLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}
