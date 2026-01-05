export function isAsyncGenerator(item: unknown): item is Function {
	return item !== null && typeof item === 'function' && item.constructor?.name === 'AsyncGeneratorFunction';
}
