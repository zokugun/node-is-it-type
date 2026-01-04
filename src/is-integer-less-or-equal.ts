export function isIntegerLessOrEqual(item: unknown, to: number): boolean {
	return Number.isInteger(item) && (item as number) <= to;
}
