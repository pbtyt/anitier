'use client';

import { IAuthForm } from '@/entities/auth';
import { authService } from '@/entities/auth/services/auth.service';
import { SITE_ROUTES_BASE } from '@/shared/config/page-url.config';
import { Button } from '@/shared/ui/Button';
import { Field } from '@/shared/ui/Field/ui/Field';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './AuthForm.module.scss';

export function AuthForm() {
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

	return (
		<div className={styles.wrapper}>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<Field
					id='email'
					label='Почта:'
					placeholder='Введите почту:'
					type='Email'
					{...register('email', { required: 'Email is required!' })}
				/>
				<Field
					id='password'
					label='Пароль: '
					placeholder='Введите пароль: '
					type='password'
					{...register('password', {
						required: 'Password is required!',
					})}
				/>
				<div className={styles.buttonsWrapper}>
					<Button
						disabled={!isValid}
						onClick={() => setIsLoginForm(true)}
						buttonText={isLoginForm ? 'Войти' : 'Зарегистрироваться'}
					/>
					<Button
						className={styles.regForm}
						onClick={e => {
							e.preventDefault();
							setIsLoginForm(prev => !prev);
						}}
						buttonColor='transparent'
						buttonText={
							isLoginForm
								? 'У вас нет учетной записи? Зарегистрируйтесь!'
								: 'Уже есть учетная запись? Войдите в него!'
						}
					/>
					{/* <Button
						onClick={() => setIsLoginForm(false)}
						buttonText='Зарегистрироваться'
					/> */}
				</div>
			</form>
		</div>
	);
}
