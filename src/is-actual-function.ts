export function isActualFunction(item: unknown): item is Function {
	return typeof item === 'function';
}
