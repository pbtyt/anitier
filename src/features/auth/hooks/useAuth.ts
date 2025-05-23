import { IAuthForm } from '@/entities/auth';
import { authService } from '@/entities/auth/services/auth.service';
import { SITE_ROUTES_BASE } from '@/shared/config/page-url.config';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

export function useAuth() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { isValid },
	} = useForm<IAuthForm>({
		mode: 'onChange',
	});
	const [isLoginForm, setIsLoginForm] = useState<boolean>(true);
	const { push } = useRouter();

	const { mutate } = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data: IAuthForm) =>
			authService.main(isLoginForm ? 'login' : 'register', data),

		onSuccess() {
			console.log('success');
			reset();
			push(SITE_ROUTES_BASE.CHOOSE);
		},
	});

	const onSubmit: SubmitHandler<IAuthForm> = data => {
		mutate(data);
	};

	return {
		register,
		handleSubmit,
		onSubmit,
		isValid,
		setIsLoginForm,
		isLoginForm,
	};
}
