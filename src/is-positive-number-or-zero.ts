export function isPositiveNumberOrZero(item: unknown): boolean {
	return typeof item === 'number' && item >= 0;
}
