export function isNonEmptyString(item: unknown): boolean {
	return typeof item === 'string' && item.length > 0;
}
