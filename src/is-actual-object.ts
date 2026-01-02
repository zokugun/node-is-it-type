export function isActualObject(item: unknown): item is Exclude<Object, null> {
	return item !== null && typeof item === 'object';
}
