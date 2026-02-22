function isNumberLessThan(item: unknown, to: number): boolean;
function isNumberLessThan<T extends number>(item: unknown, to: number): item is T;
function isNumberLessThan(item: unknown, to: number): boolean {
	return typeof item === 'number' && item < to;
}

export { isNumberLessThan };
