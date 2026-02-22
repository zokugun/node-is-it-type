function isNegativeNumber(item: unknown): boolean;
function isNegativeNumber<T extends number>(item: unknown): item is T;
function isNegativeNumber(item: unknown): boolean {
	return typeof item === 'number' && item < 0;
}

export { isNegativeNumber };
