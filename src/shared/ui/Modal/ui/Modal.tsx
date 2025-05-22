'use client';

import { useModal } from '@/shared/hooks/useModal';
import { useOutside } from '@/shared/hooks/useOutside';
import clsx from 'clsx';
import { X } from 'lucide-react';
import { CSSProperties, PropsWithChildren, useCallback } from 'react';
import styles from './Modal.module.scss';

interface IHeaderProps {
	title: string;
	className?: string;
}

function Header({ title, className }: IHeaderProps) {
	const { hideModal } = useModal();
	const handleOnModalClose = useCallback(() => {
		hideModal();
	}, []);

	return (
		<div className={clsx(styles.title, className)}>
			<span>{title}</span>
			<button className={styles.closeButton} onClick={handleOnModalClose}>
				<X size={12} />
			</button>
		</div>
	);
}

interface ModalProps {
	modalWidth: string;
	attachmentPos?: 'left' | 'right';
	alignPos?: 'center' | 'top' | 'down';
	style?: CSSProperties;
	className?: string;
	fullScreenModal?: boolean;
}

export function Modal({
	modalWidth,
	attachmentPos = 'left',
	alignPos = 'center',
	style,
	className,
	fullScreenModal,
	children,
}: PropsWithChildren<ModalProps>) {
	const { hideModal } = useModal();
	const { ref: modalRef, isShow } = useOutside(
		true,
		!fullScreenModal ? hideModal : () => {}
	);
	return (
		isShow && (
			<div
				style={style}
				className={clsx(styles.modalOverlay, styles[`${attachmentPos}Attach`])}
			>
				<div
					className={clsx(
						styles.modalWrapper,
						className,
						styles[`${alignPos}Align`]
					)}
					style={{ width: modalWidth }}
					ref={modalRef}
				>
					{children}
				</div>
			</div>
		)
	);
}

Modal.Header = Header;
