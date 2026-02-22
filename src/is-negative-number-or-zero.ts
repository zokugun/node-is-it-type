function isNegativeNumberOrZero(item: unknown): boolean;
function isNegativeNumberOrZero<T extends number>(item: unknown): item is T;
function isNegativeNumberOrZero(item: unknown): boolean {
	return typeof item === 'number' && item <= 0;
}

export { isNegativeNumberOrZero };
