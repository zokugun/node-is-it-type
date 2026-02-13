export function isEmptyString(item: unknown): boolean {
	return typeof item === 'string' && item.length === 0;
}
