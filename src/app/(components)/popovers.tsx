'use client';

import { usePopoverContext } from '@/shared/ui/Popover';

export function Popovers() {
	const { activePopover } = usePopoverContext();
	return <>{activePopover}</>;
}
