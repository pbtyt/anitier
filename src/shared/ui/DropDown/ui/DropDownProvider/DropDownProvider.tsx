import { SetStateType } from '@/shared/utils/utilTypes';
import { createContext, useContext, useMemo, useState } from 'react';

type DropDownContextType = {
	selectedID: string;
	setSelectedID: SetStateType<string>;
	preview: string;
	setPreview: SetStateType<string>;
};
const DropDownContext = createContext<DropDownContextType | undefined>(
	undefined
);

export const useDropDownContext = () => {
	const context = useContext(DropDownContext);
	if (!context)
		throw new Error('useDropDownContext must be used within a DropDown');
	return context;
};

export const DropDownProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	// TODO:
	// const value = useMemo(
	// 	() => ({ preview, setPreview, selectedID, setSelectedID }),
	// 	[preview, selectedID]
	//   );
	const [selectedID, setSelectedID] = useState<string>('');
	const [preview, setPreview] = useState<string>('');
	const value = useMemo(
		() => ({ preview, setPreview, selectedID, setSelectedID }),
		[preview, selectedID]
	);
	return (
		<DropDownContext.Provider
			value={{ selectedID, setSelectedID, preview, setPreview }}
		>
			{children}
		</DropDownContext.Provider>
	);
};
