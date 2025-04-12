import { useCreateCard } from '@/entities/card';
import { Button } from '@/shared/ui/Button';
import { useEffect } from 'react';
import styles from '../AddNewCard.module.scss';
import { useAddNewCardContext } from '../addNewCardContext/AddNewCardContext';
import { CriteriaForm } from './criteriaForm/CriteriaForm';
import { CriteriaList } from './criteriaList/CriteriaList';
import { EditingCriteriaProvider } from './editingCriteriaContext/EditingCriteriaContext';

export const EditingCriteriaStep = () => {
	const { title, cardStatus, cardType } = useAddNewCardContext();

	const { createCard } = useCreateCard();

	useEffect(() => {
		console.log(title);
		console.log(cardStatus);
		console.log(cardType);

		return () => {
			console.log('Unmounted');
		};
	}, []);

	return (
		<EditingCriteriaProvider>
			<section className={styles.section}>
				<h3 className={styles.sectionTitle}>Добавить критерии</h3>

				<EditingCriteriaStep.CriteriaForm />
			</section>

			<section className={styles.section}>
				<h3 className={styles.sectionTitle}>Список критерий</h3>

				<EditingCriteriaStep.CriteriaList />
			</section>

			<div className={styles.buttonsWrapper}>
				<Button
					buttonText='Добавить'
					buttonColor='primary'
					className={styles.button}
					onClick={() =>
						createCard({
							title: title,
							episodesNumber: 23,
							status: cardStatus,
							type: cardType,
						})
					}
				/>
			</div>
		</EditingCriteriaProvider>
	);
};

EditingCriteriaStep.CriteriaForm = CriteriaForm;
EditingCriteriaStep.CriteriaList = CriteriaList;
