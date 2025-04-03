'use client';

import { Fragment, useContext } from 'react';
import { ModalContext } from '../(providers)/modal-provider';

export function Modals() {
	const { activeModals } = useContext(ModalContext);
	return activeModals.map((modal, index) => (
		<Fragment key={index}>{modal}</Fragment>
	));
}
