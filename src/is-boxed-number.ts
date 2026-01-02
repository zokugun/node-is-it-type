export function isBoxedNumber(item: unknown): item is Number {
	return item instanceof Number;
}
