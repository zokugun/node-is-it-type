function isPositiveNumber(item: unknown): boolean;
function isPositiveNumber<T extends number>(item: unknown): item is T;
function isPositiveNumber(item: unknown): boolean {
	return typeof item === 'number' && item > 0;
}

export { isPositiveNumber };
