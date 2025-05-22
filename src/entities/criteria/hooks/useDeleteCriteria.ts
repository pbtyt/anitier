import { useMutation, useQueryClient } from '@tanstack/react-query';
import { criteriaService } from '../service/criteria.service';

export function useDeleteCriteria() {
	const queryClient = useQueryClient();

	const { mutate: deleteCriteria } = useMutation({
		mutationKey: ['delete criteria'],
		mutationFn: (criteriaId: string) =>
			criteriaService.deleteCriteria(criteriaId),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['criteria'],
			});
		},
	});

	return { deleteCriteria };
}
