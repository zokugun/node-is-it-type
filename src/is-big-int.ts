export function isBigInt(item: unknown): item is bigint {
	return typeof item === 'bigint';
}
