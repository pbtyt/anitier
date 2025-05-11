import clsx from 'clsx';
import { forwardRef, InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
}
export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ className, ...rest }, ref) => {
		return (
			<input ref={ref} className={clsx(styles.input, className)} {...rest} />
		);
	}
);
