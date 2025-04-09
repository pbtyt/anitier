import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { ICardResponse } from '../model/types';
import { cardService } from '../service/card.service';

export function useCards() {
	const { data } = useQuery({
		queryKey: ['cards'],
		queryFn: () => cardService.getCards(),
	});

	const [items, setItems] = useState<ICardResponse[] | undefined>(data?.data);

	useEffect(() => {
		setItems(data?.data);
	}, [data?.data]);

	return { items, setItems };
}
