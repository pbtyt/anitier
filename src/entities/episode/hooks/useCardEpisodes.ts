import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { IEpisodeResponse } from '../model/types';
import { episodesService } from '../service/episode.service';

export function useCardEpisodes({ cardId }: { cardId: string }) {
	const { data } = useQuery({
		queryKey: ['episodes'],
		queryFn: () => episodesService.getEpisodes(cardId),
	});
	const [episodes, setEpisodes] = useState<IEpisodeResponse[] | undefined>(
		data?.data
	);

	useEffect(() => {
		setEpisodes(data?.data);
	}, [data?.data]);

	return { episodes };
}
