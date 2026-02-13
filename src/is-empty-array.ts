export function isEmptyArray(item: unknown): boolean {
	return Array.isArray(item) && item.length === 0;
}
