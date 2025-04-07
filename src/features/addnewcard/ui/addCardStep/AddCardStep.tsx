import { Button } from '@/shared/ui/Button';
import { DropDown } from '@/shared/ui/DropDown';
import { Input } from '@/shared/ui/Input';
import { ImageUp } from 'lucide-react';
import { Dispatch, SetStateAction, useCallback } from 'react';
import styles from '../AddNewCard.module.scss';
import { useAddNewCardContext } from '../addNewCardContext/AddNewCardContext';

interface IAddCardStep {
	setNewStep: Dispatch<SetStateAction<number>>;
}

export function AddCardStep({ setNewStep }: IAddCardStep) {
	const { title, setTitle } = useAddNewCardContext();

	const isNextStepDisabled = title.trim().length === 0;
	const handleNextStepClick = useCallback(() => {
		if (isNextStepDisabled) return;

		setNewStep(2);
	}, [title]);

	return (
		<>
			<section className={styles.section}>
				<h3 className={styles.sectionTitle}>Информация о тайтле</h3>

				<h4 className={styles.sectionSubTitle}>Обложка</h4>
				<div className={styles.posterLoaderWrapper}>
					<input accept='image/*' type='file' hidden />
					<ImageUp size={48} strokeWidth={1} />
					<span>Нажмите или перетащите изображение</span>
				</div>

				<h4 className={styles.sectionSubTitle}>Название</h4>
				<Input
					placeholder='Оригинальное название'
					value={title}
					onChange={e => {
						setTitle(e.target.value);
						console.log(e.target.value);
					}}
				/>
				<Input
					placeholder='Название на английском'
					value={title}
					onChange={e => {
						setTitle(e.target.value);
						console.log(e.target.value);
					}}
				/>
				<Input
					placeholder='Название на русском'
					value={title}
					onChange={e => {
						setTitle(e.target.value);
						console.log(e.target.value);
					}}
				/>

				<h4 className={styles.sectionSubTitle}>Сведения</h4>

				<div className={styles.metadataWrapper}>
					{/* Тип */}
					<DropDown initialPreview='TV' menuTopOffset={5}>
						<DropDown.Item ddId='ddid-tv'>TV</DropDown.Item>
						<DropDown.Item ddId='ddid-film'>Фильм</DropDown.Item>
					</DropDown>
					{/* Статус тайтла */}
					<DropDown initialPreview='Онгоинг'>
						<DropDown.Item ddId='ddid-ongoing'>Онгоинг</DropDown.Item>
						<DropDown.Item ddId='ddid-complete'>Завершен</DropDown.Item>
					</DropDown>
					{/* Год Релиза */}
				</div>
			</section>

			<div className={styles.buttonsWrapper}>
				<Button
					buttonText='Далее'
					buttonColor='primary'
					className={styles.button}
					onClick={handleNextStepClick}
					disabled={isNextStepDisabled}
				/>
			</div>
		</>
	);
}
