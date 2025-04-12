import { SITE_ROUTES_BASE } from '@/shared/config/page-url.config';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { CardFormStateType } from '../model/types';
import { cardService } from '../service/card.service';

export function useCreateCard() {
	const queryClient = useQueryClient();
	const { push } = useRouter();

	const { mutate: createCard } = useMutation({
		mutationKey: ['create card'],
		mutationFn: (data: CardFormStateType) => cardService.createCard(data),
		onSuccess({ data: createdCard }) {
			queryClient.invalidateQueries({
				queryKey: ['cards'],
			});

			push(`${SITE_ROUTES_BASE.CARD}/${createdCard.id}`);
		},
	});

	return { createCard };
}
