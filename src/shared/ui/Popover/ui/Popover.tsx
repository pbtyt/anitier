'use client';

import { ElementPositionType } from '@/shared/types/base.types';
import { getPosition } from '@/shared/utils/getElementPosition';
import { getSize } from '@/shared/utils/getElementSize';
import { SetStateType } from '@/shared/utils/utilTypes';
import {
	createContext,
	CSSProperties,
	PropsWithChildren,
	ReactNode,
	RefObject,
	useContext,
	useMemo,
	useRef,
	useState,
} from 'react';
import { createPortal } from 'react-dom';

type PopoverContextType = {
	activePopover: ReactNode;
	setActivePopover: SetStateType<ReactNode>;
};
const PopoverContext = createContext<PopoverContextType>({
	activePopover: null,
	setActivePopover: () => null,
});
export const usePopoverContext = () => useContext(PopoverContext);
export const PopoverProvider = ({ children }: PropsWithChildren<unknown>) => {
	const [activePopover, setActivePopover] = useState<ReactNode>();
	const value = useMemo(
		() => ({
			activePopover,
			setActivePopover,
		}),
		[activePopover]
	);
	return (
		<PopoverContext.Provider value={value}>{children}</PopoverContext.Provider>
	);
};

interface IPopoverProps {
	id: string;
	position: ElementPositionType;
	popoverRef?: RefObject<HTMLDivElement | null>;
	className?: string;
	style?: CSSProperties;
}

export function Popover({
	id,
	popoverRef,
	position,
	className,
	children,
}: PropsWithChildren<IPopoverProps>) {
	return createPortal(
		<div id={id}>
			<div
				ref={popoverRef}
				className={className}
				style={{
					zIndex: '100',
					position: 'absolute',
					inset: `${position.top}px auto auto ${position.left}px`,
					transform: 'translate(-50%, -0%)',
				}}
			>
				{children}
			</div>
		</div>,
		document.getElementById('popover-root')!
	);
}

type TypeOut<T extends HTMLElement> = {
	openPopover: () => void;
	ref: RefObject<T | null>;
};
export function usePopover<T extends HTMLElement>(
	PopoverElement: ReactNode
): TypeOut<T> {
	const { setActivePopover } = usePopoverContext();
	const ref = useRef<T>(null);

	const openPopover = () => {
		if (!ref.current) return;

		const elementSize = getSize(ref.current);
		const elementPosition = getPosition(ref.current);
		const popoverSpawnPosition: ElementPositionType = {
			top: elementPosition.top + elementSize.height,
			left: elementPosition.left + elementSize.width,
		};

		setActivePopover(
			<Popover id='popover' position={popoverSpawnPosition}>
				{PopoverElement}
			</Popover>
		);
	};

	return { ref, openPopover };
}
