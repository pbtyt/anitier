'use client';

import { UpTabs } from '@/shared/ui/Tabs';
import { EpisodeTab } from '../EpisodeTab/EpisodeTab';

export function TabSection({ cardId }: { cardId: string }) {
	return (
		<UpTabs>
			<UpTabs.TabsHeader>
				<UpTabs.Tab title='Эпизоды' />
				<UpTabs.Tab title='Редактирование критериев' />
				<UpTabs.Tab title='Оценка' />
			</UpTabs.TabsHeader>

			<UpTabs.Content viewIndex={0}>
				<EpisodeTab cardId={cardId} />
			</UpTabs.Content>
			<UpTabs.Content viewIndex={1}>SECOND</UpTabs.Content>
			<UpTabs.Content viewIndex={2}>THIRD</UpTabs.Content>
		</UpTabs>
	);
}
