import { ModalContext } from '@/app/(providers)/modal-provider';
import { toggleBodyOverflow } from '@/shared/utils/toggleBodyOverflow';
import { ReactNode, useContext } from 'react';

export const useModal = () => {
	const { activeModals, setActiveModals } = useContext(ModalContext);

	const showModal = (modalWindow: ReactNode) => {
		toggleBodyOverflow(false);

		setActiveModals([...activeModals, modalWindow]);
	};

	const hideModal = () => {
		if (activeModals.length === 1) toggleBodyOverflow(true);

		setActiveModals([...activeModals.slice(0, -1)]);
	};

	return { showModal, hideModal };
};
