import {
	DropDownContext,
	type DropDownContextType,
} from '@/app/(providers)/dropdown-provider';
import { useContext } from 'react';

export const useDropDown = (): DropDownContextType => {
	return useContext(DropDownContext);
};
