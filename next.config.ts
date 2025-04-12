import { SITE_ROUTES_BASE } from '@/shared/config/page-url.config';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	trailingSlash: true,
	async redirects() {
		return [
			{
				source: '/',
				destination: SITE_ROUTES_BASE.CHOOSE,
				permanent: true,
			},
		];
	},
};

export default nextConfig;
