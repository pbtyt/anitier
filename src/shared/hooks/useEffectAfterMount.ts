import { useEffect, useRef } from 'react';

export const useEffectAfterMount = (fn: () => void, deps: any[] = []) => {
	const isMounted = useRef(false);

	useEffect(() => {
		if (!isMounted.current) {
			isMounted.current = true;
			return;
		}

		fn();
	}, deps);
};
