function isIntegerLessThan(item: unknown, to: number): boolean;
function isIntegerLessThan<T extends number>(item: unknown, to: number): item is T;
function isIntegerLessThan(item: unknown, to: number): boolean {
	return Number.isInteger(item) && (item as number) < to;
}

export { isIntegerLessThan };
