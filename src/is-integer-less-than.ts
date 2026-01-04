export function isIntegerLessThan(item: unknown, to: number): boolean {
	return Number.isInteger(item) && (item as number) < to;
}
