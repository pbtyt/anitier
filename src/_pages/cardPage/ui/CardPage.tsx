'use client'; //TODO: Need to delete

import { useCard } from '@/entities/card/hooks/useCard';
import { useCardEpisodes } from '@/entities/episode/hooks/useCardEpisodes';
import { Episode } from '@/entities/episode/ui/Episode';
import { UploadImage } from '@/features/uploadImage';
import { useModal } from '@/shared/hooks/useModal';
import { Image } from '@/shared/ui/Image';
import { UpTabs } from '@/shared/ui/Tabs';
import { EpisodeModal } from '@/widgets/episodeModal';
import { useParams } from 'next/navigation';
import { useCallback } from 'react';
import styles from './CardPage.module.scss';

//NOTE: WIP
//TODO: Break it down into different layers
export function CardPage() {
	const { id: titleId } = useParams<{ id: string }>();
	const { card } = useCard({ id: titleId });

	const { episodes } = useCardEpisodes({ cardId: titleId });

	const { showModal } = useModal();
	const handleEpisodeClick = useCallback(
		(id: string) => {
			showModal(<EpisodeModal id={id} criteria={card?.criteria} />);
		},
		[card?.criteria]
	);

	console.log(card?.criteria);

	return (
		<main className={styles.wrapper}>
			<section className={styles.titleInfo}>
				<div className={styles.left}>
					{card?.posterUrl ? (
						<Image
							src={`${process.env.NEXT_PUBLIC_API_UPLOADS_URL}${card?.posterUrl}`}
							className={styles.titlePoster}
						/>
					) : (
						<UploadImage
							entityData={{ entity: 'card', entityId: titleId }}
							desc='Отсутствует постер! Нажмите чтобы загрузить!'
							className={styles.titleNoPoster}
						/>
					)}
					{/*button */}
				</div>

				<div className={styles.right}>
					<h2 className={styles.title}>{card?.title}</h2>
					<span className={styles.episodesNumber}>
						{card?.episodesNumber} серий
					</span>

					<ul className={styles.metadataWrapper}>
						<li className={styles.metadataInfo}>
							<span className={styles.title}>Жанр</span>
							<div className={styles.valueWrapper}>Имба</div>
						</li>
						<li className={styles.metadataInfo}>
							<span className={styles.title}>Тип</span>
							<span className={styles.value}>{card?.type}</span>
						</li>
						<li className={styles.metadataInfo}>
							<span className={styles.title}>Статус</span>
							<span className={styles.value}>{card?.status}</span>
						</li>
						<li className={styles.metadataInfo}>
							<span className={styles.title}>Год</span>
							<span className={styles.value}>2023</span>
						</li>
					</ul>
				</div>
			</section>
			<section className={styles.aboutTitle}>
				<UpTabs.Tabs>
					<UpTabs.Tab title='Эпизоды' isActive />
					<UpTabs.Tab title='Редактирование критериев' />
					<UpTabs.Tab title='Оценка' />
				</UpTabs.Tabs>
				<div className={styles.episodesList}>
					{episodes?.map((ep, index) => (
						<Episode
							number={index + 1}
							title={ep.title}
							onClick={() => handleEpisodeClick(ep.id)}
							key={ep.id}
						/>
					))}
				</div>
			</section>
		</main>
	);
}
