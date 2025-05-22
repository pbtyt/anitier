'use client';

import clsx from 'clsx';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { ButtonSizeType, VariantType } from '../model/types';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	size?: ButtonSizeType;
	buttonColor?: VariantType;
	buttonText?: string;

	className?: string;
}

export function Button({
	size = 'md',
	buttonColor = 'primary',
	buttonText,

	className,
	children,
	...rest
}: PropsWithChildren<ButtonProps>) {
	return (
		<button
			className={clsx(
				className,
				styles.button,
				styles[`${buttonColor}`],
				styles[`${size}`]
			)}
			{...rest}
		>
			{children}
			{buttonText && <span>{buttonText}</span>}
		</button>
	);
}
