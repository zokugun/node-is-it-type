export function isArrayLike(item: unknown): boolean {
	return item !== null && typeof item === 'object' && typeof item[Symbol.iterator] === 'function';
}
