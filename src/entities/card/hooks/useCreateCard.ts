import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CardFormStateType } from '../model/types';
import { cardService } from '../service/card.service';

export function useCreateCard() {
	const queryClient = useQueryClient();

	const { mutate: createCard } = useMutation({
		mutationKey: ['create card'],
		mutationFn: (data: CardFormStateType) => cardService.createCard(data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['cards'],
			});
		},
	});

	return { createCard };
}
