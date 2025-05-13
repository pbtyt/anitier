import { UpTabs } from '@/shared/ui/Tabs';
import { CardInfoSection } from './CardInfoSection/CardInfoSection';
import styles from './CardPage.module.scss';
import { EpisodeTab } from './EpisodeTab/EpisodeTab';

//NOTE: WIP
export function CardPage({ cardId }: { cardId: string }) {
	return (
		<main className={styles.wrapper}>
			<CardInfoSection cardId={cardId} />
			<UpTabs.Tabs>
				<UpTabs.Tab title='Эпизоды' isActive />
				<UpTabs.Tab title='Редактирование критериев' />
				<UpTabs.Tab title='Оценка' />
			</UpTabs.Tabs>
			<EpisodeTab cardId={cardId} />
		</main>
	);
}
