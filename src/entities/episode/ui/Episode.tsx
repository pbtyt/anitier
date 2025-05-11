import { EllipsisVertical } from 'lucide-react';
import styles from './Episode.module.scss';

interface IEpisodeProps {
	number: number;
	title: string;
	onClick?: () => void;
}

export function Episode({ number, title, onClick }: IEpisodeProps) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.info}>
				<span className={styles.number}>Эпизод {number}</span>
				<span className={styles.title}>{title}</span>
			</div>
			<button className={styles.moreButton} onClick={onClick}>
				<EllipsisVertical />
			</button>
		</div>
	);
}
