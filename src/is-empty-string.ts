export function isEmptyString(item: unknown): item is '' {
	return typeof item === 'string' && item.length === 0;
}
