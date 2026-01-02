export function isObject(item: unknown): item is Exclude<Object, null | []> {
	return item !== null && typeof item === 'object' && !Array.isArray(item);
}
