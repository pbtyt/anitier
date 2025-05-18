'use client';

import { SITE_ROUTES_BASE } from '@/shared/config/page-url.config';
import { Image } from '@/shared/ui/Image';
import clsx from 'clsx';
import { Edit, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { useDeleteCard } from '../hooks/useDeleteCard';
import { ICardResponse } from '../model/types';
import styles from './Card.module.scss';

interface ICardProps {
	cardData: Required<Pick<ICardResponse, 'title' | 'posterUrl' | 'id'>>;
	className?: string;
}

export function Card({ cardData, className }: ICardProps) {
	const { push } = useRouter();

	const { deleteCard } = useDeleteCard();

	const handleOnDelete = useCallback(() => {
		deleteCard(cardData.id);
	}, []);

	const handleOnEdit = useCallback(() => {
		push(`${SITE_ROUTES_BASE.EDIT_CARD}/${cardData.id}`);
	}, []);

	return (
		<div className={styles.cardWrapper}>
			<Link
				href={`${SITE_ROUTES_BASE.CARD}/${cardData.id}`}
				className={clsx(styles.card, className)}
			>
				<div style={{ flexGrow: '1', display: 'flex', alignItems: 'center' }}>
					<Image
						src={`${process.env.NEXT_PUBLIC_API_UPLOADS_URL}${cardData.posterUrl}`}
						className={styles.cardPoster}
					/>
				</div>

				<h2 className={styles.cardTitle}>{cardData.title}</h2>
			</Link>
			<button className={styles.editButton} onClick={handleOnEdit}>
				<Edit size={30} />
			</button>
			<button className={styles.trashButton} onClick={handleOnDelete}>
				<Trash2 size={30} />
			</button>
		</div>
	);
}
