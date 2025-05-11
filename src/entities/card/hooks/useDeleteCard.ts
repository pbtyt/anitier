import { useMutation, useQueryClient } from '@tanstack/react-query';
import { cardService } from '../service/card.service';

export function useDeleteCard() {
	const queryClient = useQueryClient();

	const { mutate: deleteCard } = useMutation({
		mutationKey: ['delete card'],
		mutationFn: (cardId: string) => cardService.deleteCard(cardId),
		onSuccess({ data: deletedCard }) {
			queryClient.invalidateQueries({
				queryKey: ['cards'],
			});
		},
	});

	return { deleteCard };
}
