'use client';
import { usePopover } from '@/shared/ui/Popover';
import clsx from 'clsx';
import styles from './ProfileImage.module.scss';

interface ProfileImageProps {
	coverWidth?: number;
	border?: boolean;
	className?: string;
}

export function ProfileImage({
	coverWidth = 0,
	border = false,
	className,
}: ProfileImageProps) {
	const { ref: parentRef, openPopover } = usePopover<HTMLDivElement>(
		<div>TESTING LONG POPOVER</div>
	);

	return (
		<div
			ref={parentRef}
			onClick={openPopover}
			style={coverWidth ? { width: `${coverWidth}px` } : {}}
			className={clsx(styles.coverWrapper, { [styles.border]: border })}
		>
			<img
				src={`/placeholders/poster_placeholder.jpg`}
				alt='Profile Image'
				className={clsx(styles.cover, className)}
			/>
		</div>
	);
}
