export function isNegativeIntegerOrZero(item: unknown): boolean {
	return Number.isInteger(item) && (item as number) <= 0;
}
