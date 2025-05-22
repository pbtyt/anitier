import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CriteriaFormStateType } from '../model/types';
import { criteriaService } from '../service/criteria.service';

export function useUpdateCriteria(key?: string) {
	const queryClient = useQueryClient();

	const { mutate: updateCriteria } = useMutation({
		mutationKey: ['update criteria', key],
		mutationFn: ({ id, data }: { id: string; data: CriteriaFormStateType }) =>
			criteriaService.updateCriteria(id, data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['criteria'],
			});
		},
	});

	return { updateCriteria };
}
