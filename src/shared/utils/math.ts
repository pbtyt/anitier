export const clamp = (current: number, min: number, max: number): number => {
	return Math.min(Math.max(current, min), max);
};
