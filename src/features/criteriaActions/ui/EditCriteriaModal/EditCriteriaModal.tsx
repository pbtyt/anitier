'use client';

import { useUpdateCriteria } from '@/entities/criteria/hooks/useUpdateCriteria';
import { CriteriaFormStateType } from '@/entities/criteria/model/types';
import { Button } from '@/shared/ui/Button';
import { Field } from '@/shared/ui/Field/ui/Field';
import { Modal } from '@/shared/ui/Modal';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './EditCriteriaModal.module.scss';

export function EditCriteriaModal({
	id,
	data,
}: {
	id: string;
	data: CriteriaFormStateType;
}) {
	const { updateCriteria } = useUpdateCriteria();

	const { register, handleSubmit } = useForm<CriteriaFormStateType>({
		values: data,
	});

	const onSubmit: SubmitHandler<CriteriaFormStateType> = data => {
		console.log(data);
		updateCriteria({
			id: id,
			data: data,
		});
	};

	return (
		<Modal modalWidth={'400px'} className={styles.modalWrapper}>
			<Modal.Header title='Редактирование критерия' />

			<form
				id='update-criteria-form'
				onSubmit={handleSubmit(onSubmit)}
				className={styles.editCriteriaForm}
			>
				<Field
					id='criteria-title'
					placeholder={'Имя критерия...'}
					label='Название'
					{...register('title')}
				/>

				<Field
					id='criteria-weight'
					placeholder={'Ценность критерия...'}
					label='Ценность'
					{...register('weight', { valueAsNumber: true })}
				/>
			</form>
			<div className={styles.footer}>
				<Button
					buttonColor='primary'
					buttonText='Обновить'
					type='submit'
					form='update-criteria-form'
				/>
			</div>
		</Modal>
	);
}
