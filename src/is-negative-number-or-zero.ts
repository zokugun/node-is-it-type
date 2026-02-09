export function isNegativeNumberOrZero(item: unknown): boolean {
	return typeof item === 'number' && item <= 0;
}
