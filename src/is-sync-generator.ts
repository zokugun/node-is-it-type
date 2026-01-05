export function isSyncGenerator(item: unknown): item is Function {
	return item !== null && typeof item === 'function' && item.constructor?.name === 'GeneratorFunction';
}
