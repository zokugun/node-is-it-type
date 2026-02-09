export function isNegativeNumber(item: unknown): boolean {
	return typeof item === 'number' && item < 0;
}
