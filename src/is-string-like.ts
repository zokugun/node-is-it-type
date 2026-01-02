export function isStringLike(item: unknown): item is string | String {
	return typeof item === 'string' || item instanceof String;
}
