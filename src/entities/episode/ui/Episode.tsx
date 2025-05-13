import styles from './Episode.module.scss';

interface IEpisodeProps {
	number: number;
	title: string;
}

export function Episode({ number, title }: IEpisodeProps) {
	return (
		<div className={styles.info}>
			<span className={styles.number}>Эпизод {number}</span>
			<span className={styles.title}>{title}</span>
		</div>
	);
}
