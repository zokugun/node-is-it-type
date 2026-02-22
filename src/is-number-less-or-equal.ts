function isNumberLessOrEqual(item: unknown, to: number): boolean;
function isNumberLessOrEqual<T extends number>(item: unknown, to: number): item is T;
function isNumberLessOrEqual(item: unknown, to: number): boolean {
	return typeof item === 'number' && item <= to;
}

export { isNumberLessOrEqual };
