export function isBlankString(item: unknown): boolean {
	return typeof item === 'string' && item.trim().length === 0;
}
