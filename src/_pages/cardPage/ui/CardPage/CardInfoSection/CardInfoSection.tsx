'use client';

import { CARD_CONST_LABELS } from '@/entities/card';
import { useCard } from '@/entities/card/hooks/useCard';
import { UploadPoster } from '@/features/uploadPoster';
import { Image } from '@/shared/ui/Image';
import styles from './CardInfoSection.module.scss';

export function CardInfoSection({ cardId }: { cardId: string }) {
	const { card } = useCard({
		id: cardId,
		fields: 'posterUrl,title,episodesNumber,type,status,episodes' as const,
	});

	const episodesNumber = card?.episodes?.length ?? 0;

	return (
		<section className={styles.titleInfo}>
			<div className={styles.left}>
				{card?.posterUrl ? (
					<Image
						src={`${process.env.NEXT_PUBLIC_API_UPLOADS_URL}${card?.posterUrl}`}
						className={styles.titlePoster}
					/>
				) : (
					<UploadPoster
						entityData={{ entity: 'card', entityId: cardId }}
						description='Отсутствует постер! Нажмите чтобы загрузить!'
						className={styles.titleNoPoster}
					/>
				)}
			</div>

			<div className={styles.right}>
				<h2 className={styles.title}>{card?.title}</h2>
				<span className={styles.episodesNumber}>
					{episodesNumber} {episodesNumber % 5 === 0 ? 'серий' : 'серии'}
				</span>

				<ul className={styles.metadataWrapper}>
					<li className={styles.metadataInfo}>
						<span className={styles.title}>Жанр</span>
						<div className={styles.valueWrapper}>Сенен</div>
					</li>
					<li className={styles.metadataInfo}>
						<span className={styles.title}>Тип</span>
						<span className={styles.value}>
							{/* TODO: ??? */}
							{card?.type ? CARD_CONST_LABELS[card.type] : ''}
						</span>
					</li>
					<li className={styles.metadataInfo}>
						<span className={styles.title}>Статус</span>
						<span className={styles.value}>
							{/* TODO: ??? */}
							{card?.status ? CARD_CONST_LABELS[card.status] : ''}
						</span>
					</li>
					<li className={styles.metadataInfo}>
						<span className={styles.title}>Год</span>
						<span className={styles.value}>2023</span>
					</li>
				</ul>
			</div>
		</section>
	);
}
