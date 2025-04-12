import { useCardStore } from '@/entities/card';
import { Button } from '@/shared/ui/Button';
import { Trash } from 'lucide-react';
import { useCallback, useEffect } from 'react';
import { useAddNewCardContext } from '../../addNewCardContext/AddNewCardContext';
import { useEditingCriteriaContext } from '../editingCriteriaContext/EditingCriteriaContext';
import styles from './CriteriaList.module.scss';

//SOLID POSHEL NXA V ETOM KOMPONENTE
//TODO: Remove Button from this component
export function CriteriaList() {
	const { title } = useAddNewCardContext();

	const { addCard, removeAll } = useCardStore();

	const { criteria, setCriteria } = useEditingCriteriaContext();

	const isSaveDisable = criteria.length === 0;

	const handleDeleteClick = useCallback(
		(id: number) => {
			setCriteria(criteria.filter(c => c.id !== id));
		},
		[criteria]
	);

	const handleSaveClick = useCallback(() => {
		if (isSaveDisable) return;

		addCard({ criteria: criteria, title: title, posterSrc: '' });

		// DEBUG ONLY
		// removeAll();
	}, [criteria]);

	useEffect(() => {
		console.log(criteria);
	}, [criteria]);

	return (
		<>
			{criteria.length > 0 && (
				<ul className={styles.container}>
					{criteria.map(c => (
						<li className={styles.criteria} key={c.id}>
							<div className={styles.wrapper}>
								<span>{c.title}</span>

								<div className={styles.weightWrapper}>
									<span>{c.weight}</span>
								</div>
							</div>

							<button
								className={styles.trashButton}
								onClick={() => handleDeleteClick(c.id)}
							>
								<Trash size={16} strokeWidth={2} />
								<span>Удалить</span>
							</button>
						</li>
					))}
				</ul>
			)}

			<Button
				buttonText='Сохранить'
				buttonColor='primary'
				className={styles.button}
				onClick={handleSaveClick}
				disabled={isSaveDisable}
			/>
		</>
	);
}
