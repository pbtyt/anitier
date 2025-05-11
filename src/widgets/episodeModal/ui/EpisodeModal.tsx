'use client';

import { CriteriaType, EpisodeRatingType } from '@/entities/card';
import { useUpdateCardEpisode } from '@/entities/episode/hooks/useUpdateCardEpisode';
import { CriteriaList } from '@/features/calculateInterest/ui/CriteriaList/CriteriaList';
import { useModal } from '@/shared/hooks/useModal';
import { Button } from '@/shared/ui/Button';
import { Modal } from '@/shared/ui/Modal';
import { X } from 'lucide-react';
import { useCallback, useState } from 'react';
import styles from './EpisodeModal.module.scss';

export function EpisodeModal({
	id,
	criteria,
	episodeRating,
}: {
	id: string;
	criteria?: CriteriaType[];
	episodeRating?: EpisodeRatingType[];
}) {
	const { hideModal } = useModal();
	const handleOnModalClose = useCallback(() => {
		hideModal();
	}, []);

	const [criteriaRatings, setCriteriaRatings] = useState<EpisodeRatingType[]>(
		episodeRating ?? []
	);
	console.log(criteriaRatings);

	const { updateCardEpisode } = useUpdateCardEpisode({
		onSuccess() {
			hideModal();
		},
	});

	const handleOnSaveClick = useCallback(() => {
		updateCardEpisode({ id: id, data: { ratings: criteriaRatings } });
	}, [criteriaRatings]);

	return (
		<Modal className={styles.modalWrapper} modalWidth='400px'>
			<div className={styles.title}>
				<span>Оценка</span>
				<button className={styles.closeButton} onClick={handleOnModalClose}>
					<X size={12} />
				</button>
			</div>

			<CriteriaList
				criteria={criteria ?? []}
				episodeRating={criteriaRatings}
				setEpisodeRating={setCriteriaRatings}
			/>

			<div className={styles.controlsWrapper}>
				<Button
					buttonText='Сохранить'
					buttonColor='primary'
					className={styles.button}
					onClick={handleOnSaveClick}
				/>
				<Button
					buttonText='Отмена'
					buttonColor='gray'
					className={styles.button}
					onClick={() => hideModal()}
				/>
			</div>
		</Modal>
	);
}
