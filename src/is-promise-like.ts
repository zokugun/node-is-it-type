export function isPromiseLike<T>(item: unknown): item is PromiseLike<T> {
	return item !== null && typeof item === 'object' && 'then' in item && typeof item.then === 'function';
}
