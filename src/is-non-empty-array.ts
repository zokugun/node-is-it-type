export function isNonEmptyArray(item: unknown): boolean {
	return Array.isArray(item) && item.length > 0;
}
