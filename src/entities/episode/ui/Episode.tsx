import styles from './Episode.module.scss';

interface IEpisodeProps {
	number: number;
	title: string;
}

export function Episode({ number, title }: IEpisodeProps) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.episode}>
				<span>Ep.</span>
				<span className={styles.number}>{number}</span>
			</div>
			<div className={styles.info}>
				<span className={styles.title}>{title || `Эпизод ${number}`}</span>
				<div className={styles.progressBarWrapper}>
					<input type='hidden' name='slider' />
					<div className={styles.progressBar} style={{ width: `85%` }}></div>
				</div>
				<span className={styles.tips}>tips</span>
			</div>
		</div>
	);
}
