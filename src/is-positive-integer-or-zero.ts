export function isPositiveIntegerOrZero(item: unknown): boolean {
	return Number.isInteger(item) && (item as number) >= 0;
}
