function isNumberGreaterThan(item: unknown, to: number): boolean;
function isNumberGreaterThan<T extends number>(item: unknown, to: number): item is T;
function isNumberGreaterThan(item: unknown, to: number): boolean {
	return typeof item === 'number' && item > to;
}

export { isNumberGreaterThan };
