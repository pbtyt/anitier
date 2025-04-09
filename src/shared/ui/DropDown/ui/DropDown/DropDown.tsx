'use client';

import { useEffectAfterMount } from '@/shared/hooks/useEffectAfterMount';
import { useOutside } from '@/shared/hooks/useOutside';
import clsx from 'clsx';
import { CSSProperties, PropsWithChildren, useEffect } from 'react';
import { DropDownItem } from '../DropDownItem/DropDownItem';
import {
	DropDownProvider,
	useDropDownContext,
} from '../DropDownProvider/DropDownProvider';
import styles from './DropDown.module.scss';

{
	/* 
	{Children.map(children, (child, index) => {
		const item = child as ReactElement<
			PropsWithChildren<IDropDownItemProps>
		>;
		if (item.type === DropDownItem) {
			return cloneElement(item, { ...item.props, ddId: index });
		}

		return child;
	})}
	*/
}

interface IDropDownProps<T> {
	initialPreview: string;
	initialData: T;
	menuTopOffset?: number;
	//TODO: Maybe onSelect Func Need Only Data Param?
	onSelect?: (ddiD: string, preview: string, data: T) => void;
	className?: string;
}

function DropDownContent<T>({
	initialPreview,
	initialData,
	menuTopOffset,

	onSelect,
	className,
	children,
}: PropsWithChildren<IDropDownProps<T>>) {
	const {
		selectedID,
		preview,
		data: dropDownItemData,
		setData,
	} = useDropDownContext<T>();
	const { isShow, ref, setIsShow } = useOutside(false);

	const menuSettings = {
		'--dd-top-offset': `${menuTopOffset ?? 0}px`,
	} as CSSProperties;

	useEffect(() => {
		//TODO: ???? AHAHHAHAHAHAHH
		setData(initialData);
	}, []);

	useEffectAfterMount(() => {
		onSelect?.(selectedID, preview, dropDownItemData);
	}, [selectedID]);

	return (
		<div
			className={clsx(styles.wrapper, className)}
			onClick={() => setIsShow(true)}
			ref={ref}
		>
			<button className={styles.button}>{preview || initialPreview}</button>
			<ul
				style={menuSettings}
				className={clsx(styles.menu, isShow && styles.opened)}
			>
				{children}
			</ul>
		</div>
	);
}

//NOTE: DO NOT MODIFY THIS
export function DropDown<T>({
	initialPreview,
	initialData,
	menuTopOffset,
	onSelect,
	className,
	children,
}: PropsWithChildren<IDropDownProps<T>>) {
	return (
		<DropDownProvider<T>>
			<DropDownContent<T>
				initialPreview={initialPreview}
				initialData={initialData}
				menuTopOffset={menuTopOffset}
				onSelect={onSelect}
				className={className}
			>
				{children}
			</DropDownContent>
		</DropDownProvider>
	);
}

DropDown.Item = DropDownItem;
