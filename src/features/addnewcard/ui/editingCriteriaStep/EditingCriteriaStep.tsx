import { useCreateCard } from '@/entities/card/hooks/useCreateCard';
import { Button } from '@/shared/ui/Button';
import styles from '../AddNewCard.module.scss';
import { useAddNewCardContext } from '../addNewCardContext/AddNewCardContext';
import { CriteriaForm } from './criteriaForm/CriteriaForm';
import { CriteriaList } from './criteriaList/CriteriaList';
import {
	EditingCriteriaProvider,
	useEditingCriteriaContext,
} from './editingCriteriaContext/EditingCriteriaContext';

const AddNewCard = () => {
	const { title, cardStatus, cardType } = useAddNewCardContext();
	const { criteria } = useEditingCriteriaContext();
	const { createCard } = useCreateCard();
	return (
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
						criteria: criteria,
					})
				}
			/>
		</div>
	);
};

export const EditingCriteriaStep = () => {
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

			<AddNewCard />
		</EditingCriteriaProvider>
	);
};

EditingCriteriaStep.CriteriaForm = CriteriaForm;
EditingCriteriaStep.CriteriaList = CriteriaList;
