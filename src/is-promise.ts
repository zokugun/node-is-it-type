export function isPromise<T>(item: unknown): item is Promise<T> {
	return item !== null && typeof item === 'object' && 'constructor' in item && item.constructor.name === 'Promise';
}
