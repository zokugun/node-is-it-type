export function isBoxedBigInt(item: unknown): item is BigInt {
	return item instanceof BigInt;
}
