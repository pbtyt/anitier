import clsx from 'clsx';
import { PropsWithChildren, useCallback } from 'react';
import { useDropDownContext } from '../DropDownProvider/DropDownProvider';
import styles from './DropDownItem.module.scss';

export interface IDropDownItemProps<T> {
	ddId: string;
	data: T;
	preview: string;
}

export function DropDownItem<T>({
	ddId,
	data,
	preview,
	children,
}: PropsWithChildren<IDropDownItemProps<T>>) {
	const { selectedID, setSelectedID, setPreview, setData } =
		useDropDownContext<T>();

	const handleOnDDItemClick = useCallback(() => {
		setSelectedID(ddId);
		setPreview(preview);
		setData(data);
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
