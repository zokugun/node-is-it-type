function isIntegerLessOrEqual(item: unknown, to: number): boolean;
function isIntegerLessOrEqual<T extends number>(item: unknown, to: number): item is T;
function isIntegerLessOrEqual(item: unknown, to: number): boolean {
	return Number.isInteger(item) && (item as number) <= to;
}

export { isIntegerLessOrEqual };
