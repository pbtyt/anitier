export const toggleBodyOverflow = (isNeedToVisible: boolean = true) => {
	console.warn(`[ToggleBodyOverflow]: re-render`);
	const bodyElement: HTMLElement = document.getElementById('body')!;

	if (bodyElement.classList.contains('of-h') && !isNeedToVisible) return;

	if (isNeedToVisible) bodyElement.classList.remove('of-h');
	else bodyElement.classList.add('of-h');
};
