import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

type TypeOut = {
	ref: any;
	isShow: boolean;
	setIsShow: Dispatch<SetStateAction<boolean>>;
};

export const useOutside = (
	initialIsVisible: boolean,
	onClose: () => void = () => {}
): TypeOut => {
	//TODO: UseCallback Wrapper Need And useMemo too (mb)
	const [isShow, setIsShow] = useState<boolean>(initialIsVisible);
	const ref = useRef<HTMLElement>(null);

	const handleClickOutside = (event: any) => {
		if (ref.current && !ref.current.contains(event.target)) {
			setIsShow(false);
			onClose();
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);

		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	});

	return { ref, isShow, setIsShow };
};
