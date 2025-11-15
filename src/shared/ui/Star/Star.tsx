//TODO: Rename To CustomProgressBar Element and re-write element to support custom icons/elements for progress bar

import { Star } from 'lucide-react';

interface IStarProps {
	width?: number;
	height?: number;
	isActive?: boolean;
	className?: string;
}
const ActiveStarProps = { fill: 'var(--at-star-active-color)', strokeWidth: 0 };
const EmptyStarProps = {
	fill: 'var(--at-star-inactive-color)',
	strokeWidth: 0,
};

export function CustomStar({
	width = 30,
	height = 30,
	isActive = false,
	className,
}: IStarProps) {
	return (
		<Star
			className={className}
			{...(isActive ? ActiveStarProps : EmptyStarProps)}
			width={width}
			height={height}
		/>
	);
}
