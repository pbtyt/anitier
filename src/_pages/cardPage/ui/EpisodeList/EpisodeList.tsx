'use client';

import { useCardEpisodes } from '@/entities/episode/hooks/useCardEpisodes';
import { Episode } from '@/entities/episode/ui/Episode';
import { EditEpisodeInterest } from '@/features/editEpisodeInterest';
import styles from './EpisodeList.module.scss';

interface IEpisodeListProps {
	cardId: string;
}

export function EpisodeList({ cardId }: IEpisodeListProps) {
	const { episodes } = useCardEpisodes({ cardId: cardId });

	return (
		<>
			{episodes?.map((e, index) => (
				<div className={styles.episodeWrapper} key={e.id}>
					<Episode number={index + 1} title={e.title} />
					<EditEpisodeInterest
						episodeId={e.id}
						episodeRatingData={e.episodeRating}
					/>
				</div>
			))}
		</>
	);
}
