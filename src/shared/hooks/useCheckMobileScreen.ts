import { useEffect, useState } from 'react';

// const useCheckMobileScreen = (): boolean => {
// 	const [width, setWidth] = useState(0);

// 	const handleWindowSizeChange = () => {
// 		setWidth(window.outerWidth);
// 	};

// 	useEffect(() => {
// 		window.addEventListener('resize', handleWindowSizeChange);
// 		return () => window.removeEventListener('resize', handleWindowSizeChange);
// 	}, []);

// 	return width <= 768;
// };

const useCheckMobileScreen = (): boolean => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const updateSize = (): void => {
			setIsMobile(window.outerWidth <= 768);
		};

		window.addEventListener('resize', updateSize);

		return (): void => window.removeEventListener('resize', updateSize);
	}, []);

	return isMobile;
};

export default useCheckMobileScreen;
