'use client';

import { Fragment, useContext } from 'react';
import { createPortal } from 'react-dom';
import { ModalContext } from '../(providers)/modal-provider';

export function Modals() {
	const { activeModals } = useContext(ModalContext);
	return activeModals.map((modal, index) =>
		//NOTE: Not tested well
		createPortal(
			<Fragment key={index}>{modal}</Fragment>,
			document.getElementById('modal-root')!
		)
	);
}
