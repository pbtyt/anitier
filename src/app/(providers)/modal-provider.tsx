'use client';
import {
	createContext,
	Dispatch,
	PropsWithChildren,
	ReactNode,
	SetStateAction,
	useState,
} from 'react';

type TypeModalContext = {
	activeModals: ReactNode[];
	setActiveModals: Dispatch<SetStateAction<ReactNode[]>>;
};

export const ModalContext = createContext<TypeModalContext>({
	activeModals: [],
	setActiveModals: () => null,
});

export const ModalProvider = ({ children }: PropsWithChildren<unknown>) => {
	const [activeModals, setActiveModals] = useState<ReactNode[]>([]);

	return (
		<ModalContext.Provider value={{ activeModals, setActiveModals }}>
			{children}
		</ModalContext.Provider>
	);
};
