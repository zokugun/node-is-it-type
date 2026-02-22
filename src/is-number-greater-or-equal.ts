function isNumberGreaterOrEqual(item: unknown, to: number): boolean;
function isNumberGreaterOrEqual<T extends number>(item: unknown, to: number): item is T;
function isNumberGreaterOrEqual(item: unknown, to: number): boolean {
	return typeof item === 'number' && item >= to;
}

export { isNumberGreaterOrEqual };
