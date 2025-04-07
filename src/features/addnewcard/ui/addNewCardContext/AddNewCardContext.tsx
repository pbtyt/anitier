import {
	createContext,
	Dispatch,
	SetStateAction,
	useContext,
	useState,
} from 'react';

type AddNewCardContextType = {
	title: string;
	setTitle: Dispatch<SetStateAction<string>>;
};

export const AddNewCardContext = createContext<
	AddNewCardContextType | undefined
>(undefined);

export const useAddNewCardContext = () => {
	const context = useContext(AddNewCardContext);
	if (!context)
		throw new Error('useAddNewCardContext must be used within a AddNewCard');
	return context;
};

export const AddNewCardProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [title, setTitle] = useState<string>('');
	return (
		<AddNewCardContext.Provider value={{ title, setTitle }}>
			{children}
		</AddNewCardContext.Provider>
	);
};
