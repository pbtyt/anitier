import { type ElementSizeType } from '@/shared/types/base.types';

export function getSize(element: HTMLElement): ElementSizeType {
	const rect: DOMRect = element.getBoundingClientRect();

	return {
		width: rect.width,
		height: rect.height,
	};
}
