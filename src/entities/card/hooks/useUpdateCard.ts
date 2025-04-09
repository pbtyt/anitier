import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CardFormStateType } from '../model/types';
import { cardService } from '../service/card.service';

export function useUpdateCard(key?: string) {
	const queryClient = useQueryClient();

	const { mutate: updateCard } = useMutation({
		mutationKey: ['update card', key],
		mutationFn: ({ id, data }: { id: string; data: CardFormStateType }) =>
			cardService.updateCard(id, data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['cards'],
			});
		},
	});

	return { updateCard };
}
