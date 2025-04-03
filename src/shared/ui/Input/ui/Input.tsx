import clsx from 'clsx';
import { InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
}

export function Input({ className, ...rest }: InputProps) {
	return <input className={clsx(styles.input, className)} {...rest} />;
}
