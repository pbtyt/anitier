'use client';

import { CriteriaType } from '@/entities/card';
import { CriteriaList } from '@/features/calculateInterest/ui/CriteriaList/CriteriaList';
import { useModal } from '@/shared/hooks/useModal';
import { Button } from '@/shared/ui/Button';
import { Modal } from '@/shared/ui/Modal';
import { X } from 'lucide-react';
import { useCallback } from 'react';
import styles from './EpisodeModal.module.scss';

export function EpisodeModal({
	id,
	criteria,
}: {
	id: string;
	criteria?: CriteriaType[];
}) {
	console.log(id, criteria);

	const { hideModal } = useModal();
	const handleOnModalClose = useCallback(() => {
		hideModal();
	}, []);

	return (
		<Modal className={styles.modalWrapper} modalWidth='400px'>
			<div className={styles.title}>
				<span>Оценка</span>
				<button className={styles.closeButton} onClick={handleOnModalClose}>
					<X size={12} />
				</button>
			</div>

			<CriteriaList criteria={criteria ?? []} />

			<div className={styles.controlsWrapper}>
				<Button
					buttonText='Сохранить'
					buttonColor='primary'
					className={styles.button}
				/>
				<Button
					buttonText='Отмена'
					buttonColor='gray'
					className={styles.button}
				/>
			</div>
		</Modal>
	);
}
