export function isBooleanLike(item: unknown): item is boolean | Boolean {
	return typeof item === 'boolean' || item instanceof Boolean;
}
