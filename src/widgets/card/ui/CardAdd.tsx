import { SITE_ROUTES_BASE } from '@/shared/config/page-url.config';
import clsx from 'clsx';
import { Card } from './Card';
import styles from './Card.module.scss';

export function CardAdd({ className }: { className?: string }) {
	return (
		<Card
			href={SITE_ROUTES_BASE.ADD_NEW_TITLE}
			className={clsx(styles.add, className)}
			posterSrc='/plus.svg'
			title=''
		/>
	);
}
