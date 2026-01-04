export function isNegativeInteger(item: unknown): boolean {
	return Number.isInteger(item) && (item as number) < 0;
}
