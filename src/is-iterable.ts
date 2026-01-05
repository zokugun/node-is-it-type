export function isIterable<T>(item: unknown): item is IterableIterator<T> | AsyncIterableIterator<T> {
	return item !== null && typeof item === 'object' && (typeof item[Symbol.iterator] === 'function' || typeof item[Symbol.asyncIterator] === 'function');
}
