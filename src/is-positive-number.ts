export function isPositiveNumber(item: unknown): boolean {
	return typeof item === 'number' && item > 0;
}
