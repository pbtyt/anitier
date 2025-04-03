'use client';

import clsx from 'clsx';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { VariantType } from '../model/types';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	buttonColor?: VariantType;
	buttonText?: string;
	border?: boolean;
	className?: string;
}

export function Button({
	buttonColor = 'primary',
	buttonText,
	border = false,
	className,
	children,
	...rest
}: PropsWithChildren<ButtonProps>) {
	return (
		<button
			className={clsx(className, styles.button, styles[`${buttonColor}`])}
			{...rest}
		>
			{border && <div className={styles.buttonBorder}></div>}
			{children}
			{buttonText && <span>{buttonText}</span>}
		</button>
	);
}
