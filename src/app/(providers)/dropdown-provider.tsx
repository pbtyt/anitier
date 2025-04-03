'use client';

import {
	type ElementPositionType,
	type ElementSizeType,
} from '@/shared/types/base.types';
import {
	createContext,
	Dispatch,
	PropsWithChildren,
	ReactNode,
	SetStateAction,
	useState,
} from 'react';

export type DropDownContextType = {
	isDropDown: boolean;
	setIsDropDown: Dispatch<SetStateAction<boolean>>;
	DropDownPosition: ElementPositionType;
	setDropDownPosition: Dispatch<SetStateAction<ElementPositionType>>;
	dropDownMenuSize: ElementSizeType;
	setDropDownMenuSize: Dispatch<SetStateAction<ElementSizeType>>;
	dropDownMenu: ReactNode;
	setDropDownMenu: Dispatch<SetStateAction<ReactNode>>;
};

export const DropDownContext = createContext<DropDownContextType>({
	isDropDown: false,
	setIsDropDown: () => false,
	DropDownPosition: { left: 0, top: 0 },
	setDropDownPosition: () => {},
	dropDownMenuSize: { width: 0, height: 0 },
	setDropDownMenuSize: () => {},
	dropDownMenu: null,
	setDropDownMenu: () => null,
});

export function DropDownProvider({ children }: PropsWithChildren<unknown>) {
	const [isDropDown, setIsDropDown] = useState<boolean>(false);
	const [DropDownPosition, setDropDownPosition] = useState<ElementPositionType>(
		{
			left: 0,
			top: 0,
		}
	);
	const [dropDownMenuSize, setDropDownMenuSize] = useState<ElementSizeType>({
		width: 0,
		height: 0,
	});

	const [dropDownMenu, setDropDownMenu] = useState<ReactNode>(null);
	return (
		<DropDownContext.Provider
			value={{
				isDropDown,
				setIsDropDown,
				DropDownPosition,
				setDropDownPosition,
				dropDownMenuSize,
				setDropDownMenuSize,
				dropDownMenu,
				setDropDownMenu,
			}}
		>
			{children}
		</DropDownContext.Provider>
	);
}
