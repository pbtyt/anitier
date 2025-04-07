import clsx from 'clsx';
import { PropsWithChildren, useCallback } from 'react';
import { useDropDownContext } from '../DropDownProvider/DropDownProvider';
import styles from './DropDownItem.module.scss';

export interface IDropDownItemProps {
	ddId: string;
}

export function DropDownItem({
	ddId,
	children,
}: PropsWithChildren<IDropDownItemProps>) {
	const { selectedID, setSelectedID, setPreview } = useDropDownContext();
	const handleOnDDItemClick = useCallback(() => {
		setSelectedID(ddId);
		setPreview(ddId);
	}, []);

	return (
		<li
			onClick={handleOnDDItemClick}
			className={clsx(styles.item, ddId === selectedID && styles.active)}
		>
			{children}
		</li>
	);
}

DropDownItem.displayName = 'DropDownItem';
