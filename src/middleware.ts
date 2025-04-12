import { EnumTokens } from '@/entities/auth/model/types';
import { NextRequest, NextResponse } from 'next/server';
import { SITE_ROUTES_BASE } from './shared/config/page-url.config';

export async function middleware(request: NextRequest, response: NextResponse) {
	const { url, cookies } = request;

	const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value;

	const isAuthPage = url.includes('/auth');

	if (isAuthPage && refreshToken) {
		return NextResponse.redirect(new URL(SITE_ROUTES_BASE.CHOOSE, url));
	}

	if (isAuthPage) {
		return NextResponse.next();
	}

	if (!refreshToken) {
		return NextResponse.redirect(new URL('/auth', request.url));
	}

	return NextResponse.next();
}

//TODO: FIX ME
export const config = {
	matcher: ['/h/:path*', '/auth/:path'],
};
