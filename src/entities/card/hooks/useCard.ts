import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { ICardResponse } from '../model/types';
import { cardService } from '../service/card.service';

export function useCard({ id }: { id: string }) {
	const { data } = useQuery({
		queryKey: ['card', id],
		queryFn: () => cardService.getCardById(id),
	});

	const [card, setCard] = useState<ICardResponse | undefined>(data?.data);

	useEffect(() => {
		setCard(data?.data);
	}, [data?.data]);

	return { card };
}
