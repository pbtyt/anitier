import styles from '../AddNewCard.module.scss';
import { CriteriaForm } from './criteriaForm/CriteriaForm';
import { CriteriaList } from './criteriaList/CriteriaList';
import { EditingCriteriaProvider } from './editingCriteriaContext/EditingCriteriaContext';

export const EditingCriteriaStep = () => {
	// const { title, cardStatus, cardType } = useAddNewCardContext();

	// useEffect(() => {
	// 	console.log(title);
	// 	console.log(cardStatus);
	// 	console.log(cardType);
	// }, []);
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
		</EditingCriteriaProvider>
	);
};

EditingCriteriaStep.CriteriaForm = CriteriaForm;
EditingCriteriaStep.CriteriaList = CriteriaList;
