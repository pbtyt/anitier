'use client';

import { IAuthForm } from '@/entities/auth';
import { authService } from '@/entities/auth/services/auth.service';
import { SITE_ROUTES_BASE } from '@/shared/config/page-url.config';
import { Field } from '@/shared/ui/Field/ui/Field';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './AuthForm.module.scss';

export function AuthForm() {
	const { register, handleSubmit, reset } = useForm<IAuthForm>({
		mode: 'onChange',
	});
	const [isLoginForm, setIsLoginForm] = useState<boolean>(false);
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

	return (
		<div className={styles.wrapper}>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<Field
					id='email'
					label='Email:'
					placeholder='Enter Email:'
					type='Email'
					{...register('email', { required: 'Email is required!' })}
				/>
				<Field
					id='password'
					label='Password: '
					placeholder='Enter password: '
					type='password'
					{...register('password', {
						required: 'Password is required!',
					})}
				/>
				<div className={styles.buttonsWrapper}>
					<button onClick={() => setIsLoginForm(true)}>Login</button>
					<button onClick={() => setIsLoginForm(false)}>Register</button>
				</div>
			</form>
		</div>
	);
}
