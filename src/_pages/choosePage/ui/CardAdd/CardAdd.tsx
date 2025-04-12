import { SITE_ROUTES_BASE } from '@/shared/config/page-url.config';
import { Image } from '@/shared/ui/Image';
import clsx from 'clsx';
import Link from 'next/link';
import styles from './CardAdd.module.scss';

interface ICardAddProps {
	className?: string;
}

export function CardAdd({ className }: ICardAddProps) {
	return (
		<Link
			href={SITE_ROUTES_BASE.ADD_NEW_TITLE}
			className={clsx(styles.cardWrapper, styles.add)}
		>
			<div style={{ flexGrow: '1', display: 'flex', alignItems: 'center' }}>
				<Image src={'/plus.svg'} className={styles.cardPoster} />
			</div>

			<h2 className={styles.cardTitle}>Добавить</h2>
		</Link>
	);
}
