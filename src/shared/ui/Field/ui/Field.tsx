import { forwardRef } from 'react';
import { Input } from '../../Input';
import styles from './Field.module.scss';

interface InputFieldProps {
	id: string;
	label: string;
	extra?: string;
	placeholder: string;
	variant?: string;
	state?: 'error' | 'success';
	disabled?: boolean;
	type?: string;
	isNumber?: boolean;
}

export const Field = forwardRef<HTMLInputElement, InputFieldProps>(
	(
		{ label, id, extra, type, placeholder, state, disabled, isNumber, ...rest },
		ref
	) => (
		<div className={styles.wrapper}>
			<label htmlFor={id} className={styles.label}>
				{label}
			</label>
			<Input
				ref={ref}
				type={type}
				id={id}
				placeholder={placeholder}
				className={styles.input}
				disabled={disabled}
				onKeyDown={(event: any) => {
					if (
						isNumber &&
						!/[0-9]/.test(event.key) &&
						event.key !== 'Backspace' &&
						event.key !== 'Tab' &&
						event.key !== 'Enter' &&
						event.key !== 'ArrowLeft' &&
						event.key !== 'ArrowRight'
					) {
						event.preventDefault();
					}
				}}
				{...rest}
			/>
		</div>
	)
);

Field.displayName = 'field';
