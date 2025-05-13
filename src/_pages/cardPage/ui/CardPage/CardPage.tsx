'use client'; //TODO: Delete

import { UpTabs } from '@/shared/ui/Tabs';
import { CardInfoSection } from './CardInfoSection/CardInfoSection';
import styles from './CardPage.module.scss';
import { EpisodeTab } from './EpisodeTab/EpisodeTab';

//NOTE: WIP
export function CardPage({ cardId }: { cardId: string }) {
	console.log(UpTabs.Tab);
	return (
		<main className={styles.wrapper}>
			<CardInfoSection cardId={cardId} />
			<UpTabs>
				<UpTabs.Tab title='Эпизоды' />
				<UpTabs.Tab title='Редактирование критериев' />
				<UpTabs.Tab title='Оценка' />
			</UpTabs>
			<EpisodeTab cardId={cardId} />
		</main>
	);
}
