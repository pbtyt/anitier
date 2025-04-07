import { PropsWithChildren } from 'react';
import { DropDownProvider } from '../DropDownProvider/DropDownProvider';

export function DropDownWrapper({ children }: PropsWithChildren<unknown>) {
	return <DropDownProvider>{children}</DropDownProvider>;
}
