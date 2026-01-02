export function isPrimitive(item: unknown): item is Primitive {
	const type = typeof item;

	return type === 'string' || type === 'number' || type === 'boolean' || type === 'bigint';
}
