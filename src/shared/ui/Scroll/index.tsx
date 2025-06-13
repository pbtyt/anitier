'use client';

import { getSize } from '@/shared/utils/getElementSize';
import { clsx } from 'clsx';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
	PropsWithChildren,
	RefObject,
	useCallback,
	useRef,
	useState,
} from 'react';
import styles from './scroll.module.css';

//TODO: Rewrite This Component

enum ArrowDirection {
	Left = -1,
	Right = 1,
}

interface IArrow {
	scrollRef: RefObject<HTMLDivElement | null>;
	scrollStep: number;
	direction: ArrowDirection;

	//TODO: Rename
	normalize: number;
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
};

function Arrow({ scrollRef, scrollStep, direction, normalize }: IArrow) {
	const [arrowHover, setArrowHover] = useState<boolean>(false);

	const onScrollClick = useCallback(() => {
		if (!scrollRef?.current) return;

		if (direction === ArrowDirection.Right) {
			if (
				scrollRef.current.scrollLeft >=
				getSize(scrollRef.current).width - normalize
			)
				setArrowHover(false);
			scrollRef.current.scrollLeft += scrollStep;
		} else {
			if (scrollRef.current.scrollLeft <= 0 + normalize) setArrowHover(false);
			scrollRef.current.scrollLeft -= scrollStep;
		}
	}, [scrollRef.current]);

	return (
		<div
			className={styles.arrowWrapper}
			style={
				direction === ArrowDirection.Right
					? { right: '0', justifyContent: 'end' }
					: { left: '0', justifyContent: 'start' }
			}
			onMouseEnter={() => setArrowHover(true)}
			onMouseLeave={() => setArrowHover(false)}
		>
			<button
				className={styles.arrow}
				style={
					arrowHover
						? {
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								transform: `translateX(${direction * 5}px)`,
						  }
						: {}
				}
				onClick={onScrollClick}
			>
				{arrowsConfig[direction]}
			</button>
		</div>
	);
}

interface IScroll {
	className?: string;
	scrollStep?: number;
	hideArrows?: boolean;
	//TODO: Rename Too
	normalize?: number;
}

export function Scroll({
	children,
	className,
	scrollStep = 80,
	hideArrows = false,
	normalize = 500,
}: PropsWithChildren<IScroll>) {
	const scrollRef = useRef<HTMLDivElement>(null);
	return (
		<div className={styles.scrollWrapper} onWheel={e => {}}>
			<div className={clsx(styles.scroll, className)} ref={scrollRef}>
				{children}
			</div>

			{!hideArrows && (
				<>
					<Arrow
						scrollRef={scrollRef}
						scrollStep={scrollStep}
						direction={ArrowDirection.Right}
						normalize={normalize}
					/>

					<Arrow
						scrollRef={scrollRef}
						scrollStep={scrollStep}
						direction={ArrowDirection.Left}
						normalize={normalize}
					/>
				</>
			)}
		</div>
	);
}
