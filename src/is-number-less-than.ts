export function isNumberLessThan(item: unknown, to: number): boolean {
	return typeof item === 'number' && item < to;
}
