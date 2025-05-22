'use client';

import { Criteria } from '@/entities/criteria';
import {
	CriteriaActionDelete,
	CriteriaActionEdit,
} from '@/features/criteriaActions';
import styles from './CriteriaWithActions.module.scss';

interface ICriteriaWithActionsProps {
	id: string;
	title: string;
	weight: number;
}

export function CriteriaWithActions({
	id,
	title,
	weight,
}: ICriteriaWithActionsProps) {
	return (
		<div className={styles.wrapper}>
			<Criteria title={title} weight={weight} />
			<CriteriaActionDelete criteriaId={id} />
			<CriteriaActionEdit
				criteriaId={id}
				data={{ title: title, weight: weight }}
			/>
		</div>
	);
}
