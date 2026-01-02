export function isObjectLike(item: unknown): item is Exclude<Object | Function, null> {
	const type = typeof item;

	return item !== null && (type === 'object' || type === 'function');
}
