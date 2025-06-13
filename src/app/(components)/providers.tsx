'use client';

import { ModalProvider } from '@/app/(providers)/modal-provider';
import { PopoverProvider } from '@/shared/ui/Popover';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { PropsWithChildren, useState } from 'react';

export function Providers({ children }: PropsWithChildren<unknown>) {
	const [client] = useState(
		new QueryClient({
			defaultOptions: {
				queries: {
					refetchOnWindowFocus: false,
				},
			},
		})
	);
	return (
		<QueryClientProvider client={client}>
			<ModalProvider>
				<PopoverProvider>{children}</PopoverProvider>
			</ModalProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}
