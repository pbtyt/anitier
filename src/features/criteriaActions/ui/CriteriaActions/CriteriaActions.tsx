'use client';

import { CriteriaFormStateType } from '@/entities/criteria';
import { useDeleteCriteria } from '@/entities/criteria/hooks/useDeleteCriteria';
import { useModal } from '@/shared/hooks/useModal';
import { ConfirmPopup } from '@/shared/ui/Modal';
import { Edit, Trash2 } from 'lucide-react';
import { useCallback } from 'react';
import { EditCriteriaModal } from '../EditCriteriaModal/EditCriteriaModal';
import styles from './CriteriaActions.module.scss';

export function CriteriaActionDelete({ criteriaId }: { criteriaId: string }) {
	const { deleteCriteria } = useDeleteCriteria();
	const handleOnDelete = useCallback(() => {
		deleteCriteria(criteriaId);
	}, []);

	const { showModal } = useModal();

	return (
		<button
			className={styles.trashButton}
			onClick={() => {
				showModal(<ConfirmPopup onConfirm={handleOnDelete} />);
			}}
		>
			<Trash2 size={24} />
		</button>
	);
}

export function CriteriaActionEdit({
	criteriaId,
	data,
}: {
	criteriaId: string;
	data: CriteriaFormStateType;
}) {
	const { showModal } = useModal();
	const handleOnEdit = useCallback(() => {
		showModal(<EditCriteriaModal id={criteriaId} data={data} />);
	}, [data, showModal]);
	return (
		<button className={styles.editButton} onClick={handleOnEdit}>
			<Edit size={24} />
		</button>
	);
}
