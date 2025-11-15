'use client';

import { remToPx } from '@/shared/utils/math';
import clsx from 'clsx';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Children, PropsWithChildren, useRef, useState } from 'react';
import styles from './Scroll.module.scss';

enum ArrowDirection {
	Left = -1,
	Right = 1,
}
const arrowsConfig = {
	[ArrowDirection.Left]: (
		<ChevronLeft
			color='rgba(255, 255, 255, 0.96)'
			size={40}
			style={{
				position: 'absolute',

				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
			}}
		/>
	),
	[ArrowDirection.Right]: (
		<ChevronRight
			color='rgba(255, 255, 255, 0.96)'
			size={40}
			style={{
				position: 'absolute',

				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
			}}
		/>
	),
} as const;

interface IScrollArrowProps {
	direction: ArrowDirection;
	onClick: (direction: ArrowDirection) => void;
}
export function ScrollArrow({ direction, onClick }: IScrollArrowProps) {
	const [isHover, setIsHover] = useState(false);
	const hoverStateStyles = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		transform: `translateX(${direction}px)`,
	};
	return (
		<div
			className={clsx(
				styles.arrowWrapper,
				direction === ArrowDirection.Right ? styles.right : styles.left
			)}
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
		>
			<button
				className={styles.arrow}
				style={isHover ? hoverStateStyles : {}}
				onClick={() => onClick(direction)}
			>
				{arrowsConfig[direction]}
			</button>
		</div>
	);
}

export const useScroll = (itemsAmount: number) => {
	const scrollableRef = useRef<HTMLDivElement>(null);

	const onScroll = (direction: ArrowDirection) => {
		if (!scrollableRef.current || !itemsAmount) return;

		const gapAmount = itemsAmount - 1;
		const scrollableAreaWidth = scrollableRef.current.scrollWidth;
		const pureScrollableAreaWidth = scrollableAreaWidth - remToPx(gapAmount);

		const scrollStep = pureScrollableAreaWidth / itemsAmount + remToPx(1);

		scrollableRef.current.scrollLeft += direction * scrollStep;
	};

	return { scrollableRef, onScroll };
};

interface IScrollProps {
	withArrows?: boolean;
}
export function Scroll({
	children,
	withArrows = false,
}: PropsWithChildren<IScrollProps>) {
	if (!children) return <>use with children prop!</>;

	const { scrollableRef, onScroll } = useScroll(Children.count(children));
	return (
		<div className={styles.wrapper}>
			<div className={styles.scrollable} ref={scrollableRef}>
				{children}
			</div>

			{withArrows && (
				<>
					<ScrollArrow direction={ArrowDirection.Right} onClick={onScroll} />
					<ScrollArrow direction={ArrowDirection.Left} onClick={onScroll} />
				</>
			)}
		</div>
	);
}
