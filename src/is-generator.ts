export function isGenerator(item: unknown): item is Function {
	return item !== null && typeof item === 'function' && (item.constructor?.name === 'GeneratorFunction' || item.constructor?.name === 'AsyncGeneratorFunction');
}
