import { Image } from '@/shared/ui/Image';
import clsx from 'clsx';
import Link from 'next/link';
import styles from './Card.module.scss';

interface ICardProps {
	posterSrc?: string;
	title?: string;

	href: string;
	className?: string;
}

export function Card({
	posterSrc = '/placeholders/poster_placeholder.jpg',
	title = 'Solo Levelling',
	href,
	className,
}: ICardProps) {
	return (
		<Link href={href} className={clsx(styles.cardWrapper, className)}>
			<div style={{ flexGrow: '1', display: 'flex', alignItems: 'center' }}>
				<Image src={posterSrc} className={styles.cardPoster} />
			</div>

			<h2 className={styles.cardTitle}>{title}</h2>
		</Link>
	);
}
