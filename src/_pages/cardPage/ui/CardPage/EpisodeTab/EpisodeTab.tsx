import { AddNewEpisodeForm } from '@/features/addNewEpisodeForm';
import { EpisodeList } from '../../EpisodeList/EpisodeList';
import styles from './EpisodeTab.module.scss';

export function EpisodeTab({ cardId }: { cardId: string }) {
	return (
		<section className={styles.wrapper}>
			<div className={styles.episodesList}>
				<EpisodeList cardId={cardId} />
			</div>
			<AddNewEpisodeForm cardId={cardId} />
		</section>
	);
}
