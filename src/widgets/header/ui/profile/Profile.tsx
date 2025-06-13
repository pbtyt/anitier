'use client';
import { getAccessToken } from '@/entities/auth/services/token.service';
import { Button } from '@/shared/ui/Button';
import { ProfileImage } from '@/shared/ui/ProfileImage';
import { useEffect, useState } from 'react';

export function Profile() {
	const [isUserAuth, setIsUserAuth] = useState<boolean>(false);
	useEffect(() => {
		setIsUserAuth(!!getAccessToken());
	}, []);

	return !isUserAuth ? (
		<Button buttonText='Войти в аккаунт' buttonColor='primary' />
	) : (
		// <button ref={ref} onClick={openPopover}>
		// 	test
		// </button>

		<ProfileImage coverWidth={44} border />
	);
}
