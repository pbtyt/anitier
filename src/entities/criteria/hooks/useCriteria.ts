import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { ICriteriaResponse } from '../model/types';
import { criteriaService } from '../service/criteria.service';

export function useCriteria({ cardId }: { cardId: string }) {
	const { data } = useQuery({
		queryKey: ['criteria'],
		queryFn: () => criteriaService.getCriteria(cardId),
	});

	const [criteria, setCriteria] = useState<ICriteriaResponse[] | undefined>(
		data?.data
	);

	useEffect(() => {
		setCriteria(data?.data);
	}, [data?.data]);

	return { criteria };
}
