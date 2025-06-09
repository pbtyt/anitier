import { PickFields } from '@/shared/utils/utilTypes';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { ICardResponse } from '../model/types';
import { cardService } from '../service/card.service';

export function useCards<F extends string = ''>({
	fields = '' as F,
}: {
	fields?: F;
}) {
	const { data } = useQuery({
		queryKey: ['cards'],
		queryFn: () => cardService.getCards(fields),
	});

	const [items, setItems] = useState<
		PickFields<ICardResponse, F>[] | undefined
	>(data?.data as PickFields<ICardResponse, F>[]);

	useEffect(() => {
		setItems(data?.data as PickFields<ICardResponse, F>[]);
	}, [data?.data]);

	return { items, setItems };
}
