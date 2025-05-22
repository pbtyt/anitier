import { IEpisodeRatingResponse } from '@/entities/episode';
import { Episode } from '@/entities/episode/ui/Episode';
import { EditEpisodeInterest } from '@/features/editEpisodeInterest';
import styles from './EpisodeWithActions.module.scss';

interface IEpisodeWithActionsProps {
	title: string;
	number: number;
	id: string;
	episodeRatingData?: IEpisodeRatingResponse[];
}

export function EpisodeWithActions({
	id,
	number,
	title,
	episodeRatingData,
}: IEpisodeWithActionsProps) {
	return (
		<div className={styles.wrapper}>
			<Episode number={number} title={title} />
			<EditEpisodeInterest
				episodeId={id}
				episodeRatingData={episodeRatingData}
			/>
		</div>
	);
}
