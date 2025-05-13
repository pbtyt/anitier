import { AddNewEpisodeForm } from '@/features/addNewEpisodeForm';
import { EpisodeList } from '../../EpisodeList/EpisodeList';
import styles from './EpisodeTab.module.scss';

export function EpisodeTab({ cardId }: { cardId: string }) {
	return (
		<section className={styles.aboutTitle}>
			<div className={styles.episodesList}>
				<EpisodeList cardId={cardId} />
				<AddNewEpisodeForm cardId={cardId} />
			</div>
		</section>
	);
}
