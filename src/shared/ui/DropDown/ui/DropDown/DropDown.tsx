import { useOutside } from '@/shared/hooks/useOutside';
import clsx from 'clsx';
import { CSSProperties, PropsWithChildren } from 'react';
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

interface IDropDownProps {
	initialPreview: string;
	menuTopOffset?: number;
	className?: string;
}

function DropDownContent({
	initialPreview,
	menuTopOffset,
	className,
	children,
}: PropsWithChildren<IDropDownProps>) {
	const { preview } = useDropDownContext();
	const { isShow, ref, setIsShow } = useOutside(false);

	const menuSettings = {
		'--dd-top-offset': `${menuTopOffset ?? 0}px`,
	} as CSSProperties;

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
export function DropDown({
	initialPreview,
	menuTopOffset,
	className,
	children,
}: PropsWithChildren<IDropDownProps>) {
	return (
		<DropDownProvider>
			<DropDownContent
				initialPreview={initialPreview}
				menuTopOffset={menuTopOffset}
				className={className}
			>
				{children}
			</DropDownContent>
		</DropDownProvider>
	);
}

DropDown.Item = DropDownItem;
