export function isBigIntLike(item: unknown): item is bigint | BigInt {
	return typeof item === 'bigint' || item instanceof BigInt;
}
