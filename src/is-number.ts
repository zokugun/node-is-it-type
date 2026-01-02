export function isNumber(item: unknown): item is number {
	return typeof item === 'number';
}
