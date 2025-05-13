'use client'; //TODO: Delete

import { UpTabs } from '@/shared/ui/Tabs';
import { CardInfoSection } from './CardInfoSection/CardInfoSection';
import styles from './CardPage.module.scss';
import { EpisodeTab } from './EpisodeTab/EpisodeTab';

//NOTE: WIP
export function CardPage({ cardId }: { cardId: string }) {
	return (
		<main className={styles.wrapper}>
			<CardInfoSection cardId={cardId} />
			<UpTabs>
				<UpTabs.TabsHeader>
					<UpTabs.Tab title='Эпизоды' />
					<UpTabs.Tab title='Редактирование критериев' />
					<UpTabs.Tab title='Оценка' />
				</UpTabs.TabsHeader>

				<UpTabs.Content viewIndex={0}>FIRST</UpTabs.Content>
				<UpTabs.Content viewIndex={1}>SECOND</UpTabs.Content>
				<UpTabs.Content viewIndex={2}>THIRD</UpTabs.Content>
			</UpTabs>
			<EpisodeTab cardId={cardId} />
		</main>
	);
}
