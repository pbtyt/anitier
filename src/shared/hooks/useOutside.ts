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
	const [isShow, setIsShow] = useState<boolean>(initialIsVisible);
	const ref = useRef<HTMLElement>(null);

	const handleClickOutside = (event: any) => {
		if (ref.current && !ref.current.contains(event.target)) {
			setIsShow(false);
			onClose();
		}
	};
	//TODO: Support touch for mobile
	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	});

	return { ref, isShow, setIsShow };
};
