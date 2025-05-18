'use client';

import { UpTabs } from '@/shared/ui/Tabs';
import { CriteriaTab } from '../CriteriaTab/CriteriaTab';
import { EpisodeTab } from '../EpisodeTab/EpisodeTab';
import styles from './TabSection.module.scss';
export function TabSection({ cardId }: { cardId: string }) {
	//TODO: Second Tab (Edit/Create/Delete Criteria)
	return (
		<UpTabs className={styles.tabWrapper}>
			<UpTabs.TabsHeader>
				<UpTabs.Tab title='Эпизоды' />
				<UpTabs.Tab title='Редактирование критериев' />
				<UpTabs.Tab title='Оценка' />
			</UpTabs.TabsHeader>

			<UpTabs.Content viewIndex={0}>
				<EpisodeTab cardId={cardId} />
			</UpTabs.Content>
			<UpTabs.Content viewIndex={1}>
				<CriteriaTab cardId={cardId} />
			</UpTabs.Content>
			<UpTabs.Content viewIndex={2}>THIRD</UpTabs.Content>
		</UpTabs>
	);
}
