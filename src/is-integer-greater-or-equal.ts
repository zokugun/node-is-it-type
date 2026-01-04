export function isIntegerGreaterOrEqual(item: unknown, to: number): boolean {
	return Number.isInteger(item) && (item as number) >= to;
}
