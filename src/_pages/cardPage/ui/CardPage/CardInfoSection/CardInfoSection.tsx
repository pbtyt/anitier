'use client';

import { CARD_CONST_LABELS } from '@/entities/card';
import { useCard } from '@/entities/card/hooks/useCard';
import { UploadPoster } from '@/features/uploadPoster';
import { Button } from '@/shared/ui/Button';
import { Image } from '@/shared/ui/Image';
import { UpTabs } from '@/shared/ui/Tabs';
import { Star } from 'lucide-react';
import { CriteriaTab } from '../CriteriaTab/CriteriaTab';
import styles from './CardInfoSection.module.scss';

export function CardInfoSection({ cardId }: { cardId: string }) {
	const { card } = useCard({
		id: cardId,
		fields: 'posterUrl,title,episodesNumber,type,status,episodes' as const,
	});

	const episodesNumber = card?.episodes?.length ?? 0;

	return (
		<section>
			<div className={styles.promo}>
				{card?.posterUrl ? (
					<Image
						src={`${process.env.NEXT_PUBLIC_API_UPLOADS_URL}${card?.posterUrl}`}
						className={styles.poster}
					/>
				) : (
					<UploadPoster
						entityData={{ entity: 'card', entityId: cardId }}
						description='Отсутствует постер! Нажмите чтобы загрузить!'
						className={styles.noPoster}
					/>
				)}
				<div className={styles.info}>
					<h2 className={styles.title}>{card?.title}</h2>
					<div className={styles.rating}>
						<Star className={styles.icon} size={24} />
						{/* TODO: Add class to span */}
						<span>9.99</span>
					</div>
					<div className={styles.actions}>
						<div className={styles.left}>
							<Button buttonText='Смотреть' buttonColor='gray' />
							<Button buttonText='Смотрел' buttonColor='gray' />
							<Button buttonText='Посмотрел' buttonColor='gray' />
						</div>
						<div className={styles.right}>
							<Button buttonText='Добавить в коллекцию' buttonColor='gray' />
						</div>
					</div>
				</div>
			</div>
			<div className={styles.content}>
				<UpTabs className={styles.tabsWrapper}>
					<UpTabs.Header>
						<UpTabs.Tab title='О тайтле' />
						<UpTabs.Tab title='Связанное' />
						<UpTabs.Tab title='Персонажи' />
						<UpTabs.Tab title='Отзывы' />
					</UpTabs.Header>

					<UpTabs.Content viewIndex={0}>
						<div className={styles.overview}>
							<div className={styles.details}>
								<h3>Детали</h3>
								<ul className={styles.detailsList}>
									<li className={styles.detail}>
										<span className={styles.title}>Тип</span>
										<div className={styles.value}>
											{card?.type ? CARD_CONST_LABELS[card.type] : ''}
										</div>
									</li>
									<li className={styles.detail}>
										<span className={styles.title}>Эпизоды</span>
										<div className={styles.value}>{card?.episodesNumber}</div>
									</li>
									<li className={styles.detail}>
										<span className={styles.title}>Статус</span>
										<div className={styles.value}>
											{card?.status ? CARD_CONST_LABELS[card.status] : ''}
										</div>
									</li>
									<li className={styles.detail}>
										<span className={styles.title}>Год</span>
										<div className={styles.value}>2023</div>
									</li>
								</ul>
							</div>

							<div className={styles.description}>
								<h3>Описание</h3>
								<p className={styles.text}>
									Десять лет назад по всему миру стали открываться некие
									«врата», ведущие в подземелья с монстрами, противостоять
									которым оказалось не под силу даже военным. Однако если успеть
									вовремя победить босса подземелья, то врата пропадут, не
									открывшись, и мирные люди не пострадают. Сразиться с боссом
									способны только избранные — люди, получившие особые силы,
									чтобы бороться с чудовищами. Таких людей назвали «охотниками».
									Вот только способности, которые они получают, крайне различны
									как по функционалу, так и по мощи.
									<br />
									<br />
									Например, охотник Сон Джину относится всего лишь к рангу Е:
									хоть и сильнее обычного человека, он в разы слабее любого
									самого слабого охотника. Он не в состоянии справиться с самым
									ничтожным монстром, поэтому вынужден ходить в подземелье в
									составе большой группы. Напарники убивают всю мелочь, так что
									у Сон Джину нет возможности хорошо заработать на охоте. Нет
									денег, а значит нет финансов на улучшение снаряжения. В общем,
									замкнутый круг. Однако он продолжает заниматься «охотой»,
									чтобы оплатить больничные счета матери, которая находится в
									коме.
									<br />
									<br />
									Всё изменилось, когда, отправившись в очередное низкоранговое
									подземелье, они с командой наткнулись на очень странную вещь —
									ещё одно подземелье, которое оказалось внутри того, что они
									уже очистили. Решив рискнуть, они вошли внутрь.
								</p>
							</div>
						</div>
					</UpTabs.Content>
					<UpTabs.Content viewIndex={1}>
						<CriteriaTab cardId={cardId} />
					</UpTabs.Content>
				</UpTabs>
			</div>
		</section>
	);
}
