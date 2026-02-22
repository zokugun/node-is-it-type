function isIntegerGreaterOrEqual(item: unknown, to: number): boolean;
function isIntegerGreaterOrEqual<T extends number>(item: unknown, to: number): item is T;
function isIntegerGreaterOrEqual(item: unknown, to: number): boolean {
	return Number.isInteger(item) && (item as number) >= to;
}

export { isIntegerGreaterOrEqual };
