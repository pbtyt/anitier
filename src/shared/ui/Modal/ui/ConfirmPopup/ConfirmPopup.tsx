'use client';

import { useModal } from '@/shared/hooks/useModal';
import { Button } from '@/shared/ui/Button';
import { PropsWithChildren, useCallback } from 'react';
import { Modal } from '../Modal';
import styles from './ConfirmPopup.module.scss';

interface IConfirmPopupProps {
	title?: string;
	cancelButtonText?: string;
	confirmButtonText?: string;

	onCancel?: () => void;
	onConfirm?: () => void;
}

export function ConfirmPopup({
	title = 'Вы точно уверены?',
	cancelButtonText = 'Отмена',
	confirmButtonText = 'Удалить',
	onCancel,
	onConfirm,
	children,
}: PropsWithChildren<IConfirmPopupProps>) {
	const { hideModal } = useModal();

	const handleOnCancel = useCallback(() => {
		hideModal();
		onCancel?.();
	}, []);

	const handleOnConfirm = useCallback(() => {
		hideModal();
		onConfirm?.();
	}, []);

	return (
		<Modal modalWidth='400px' className={styles.modalWrapper}>
			<Modal.Header title={title} />
			{children}
			<div className={styles.buttonsWrapper}>
				<Button
					buttonColor='gray'
					buttonText={cancelButtonText}
					onClick={handleOnCancel}
				/>
				<Button
					buttonColor='primary'
					buttonText={confirmButtonText}
					onClick={handleOnConfirm}
				/>
			</div>
		</Modal>
	);
}
