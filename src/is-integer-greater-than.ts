function isIntegerGreaterThan(item: unknown, to: number): boolean;
function isIntegerGreaterThan<T extends number>(item: unknown, to: number): item is T;
function isIntegerGreaterThan(item: unknown, to: number): boolean {
	return Number.isInteger(item) && (item as number) > to;
}

export { isIntegerGreaterThan };
