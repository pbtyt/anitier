import { Modal } from '@/shared/ui/Modal';
import { SetStateType } from '@/shared/utils/utilTypes';
import styles from './UploadImageModal.module.scss';

interface IUploadImageModal {
	preview: string | null;
	setPreview: SetStateType<string | null>;
}

export function UploadImageModal({ preview, setPreview }: IUploadImageModal) {
	// useEffect(() => {}, []);

	return (
		<Modal modalWidth='400px' className={styles.modalWrapper}>
			<Modal.Header title='Загрузка постера' />
		</Modal>
	);
}
