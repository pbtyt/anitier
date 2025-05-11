import { useMutation, useQueryClient } from '@tanstack/react-query';
import { EpisodeFormStateType } from '../model/types';
import { episodesService } from '../service/episode.service';

export function useUpdateCardEpisode(key?: string) {
	const queryClient = useQueryClient();

	const { mutate: updateCardEpisode } = useMutation({
		mutationKey: ['update episode', key],
		mutationFn: ({ id, data }: { id: string; data: EpisodeFormStateType }) =>
			episodesService.updateEpisode(id, data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['episodes'],
			});
		},
	});

	return { updateCardEpisode };
}
