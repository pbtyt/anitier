'use client';

import { useDeleteCriteria } from '@/entities/criteria/hooks/useDeleteCriteria';
import { CriteriaFormStateType } from '@/entities/criteria/model/types';
import { useModal } from '@/shared/hooks/useModal';
import { Edit, Trash2 } from 'lucide-react';
import { useCallback } from 'react';
import { EditCriteriaModal } from '../EditCriteriaModal/EditCriteriaModal';
import styles from './CriteriaActions.module.scss';

export function CriteriaActionDelete({ criteriaId }: { criteriaId: string }) {
	const { deleteCriteria } = useDeleteCriteria();
	const handleOnDelete = useCallback(() => {
		deleteCriteria(criteriaId);
	}, []);

	return (
		<button className={styles.trashButton} onClick={handleOnDelete}>
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
