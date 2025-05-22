import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CriteriaFormStateType } from '../model/types';
import { criteriaService } from '../service/criteria.service';

export function useCreateCriteria({ onSuccess }: { onSuccess?: () => void }) {
	const queryClient = useQueryClient();

	const { mutate: createCriteria } = useMutation({
		mutationKey: ['create criteria'],
		mutationFn: ({
			cardId,
			data,
		}: {
			cardId: string;
			data: CriteriaFormStateType;
		}) => criteriaService.createCriteria(cardId, data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['criteria'],
			});

			onSuccess?.();
		},
	});

	return { createCriteria };
}
