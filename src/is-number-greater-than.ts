export function isNumberGreaterThan(item: unknown, to: number): boolean {
	return typeof item === 'number' && item > to;
}
