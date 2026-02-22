function isPositiveNumberOrZero(item: unknown): boolean;
function isPositiveNumberOrZero<T extends number>(item: unknown): item is T;
function isPositiveNumberOrZero(item: unknown): boolean {
	return typeof item === 'number' && item >= 0;
}

export { isPositiveNumberOrZero };
