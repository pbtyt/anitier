import { ModalProvider } from '@/app/(providers)/modal-provider';
import { PropsWithChildren } from 'react';

export function Providers({ children }: PropsWithChildren<unknown>) {
	return <ModalProvider>{children}</ModalProvider>;
}
