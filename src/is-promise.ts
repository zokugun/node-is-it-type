export function isPromise(item: unknown): item is Promise<unknown> {
	return item !== null && typeof item === 'object' && 'constructor' in item && item.constructor.name === 'Promise';
}
