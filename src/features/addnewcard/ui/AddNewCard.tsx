'use client';

import { useCallback, useState } from 'react';
import { AddCardStep } from './addCardStep/AddCardStep';
import styles from './AddNewCard.module.scss';
import { AddNewCardProvider } from './addNewCardContext/AddNewCardContext';
import { EditingCriteriaStep } from './editingCriteriaStep/EditingCriteriaStep';
import { Steps } from './steps/Steps';

export function AddNewCard() {
	const [stepNumber, setStepNumber] = useState<number>(1);
	console.log('AddNewCard rendered');

	const renderStep = useCallback(() => {
		switch (stepNumber) {
			case 1:
				return <AddCardStep setNewStep={setStepNumber} />;
			case 2:
				return <EditingCriteriaStep />;
		}
	}, [stepNumber]);

	return (
		<AddNewCardProvider>
			<div className={styles.wrapper}>
				<Steps stepNumber={stepNumber} />
				<main className={styles.main}>{renderStep()}</main>
			</div>
		</AddNewCardProvider>
	);
}
