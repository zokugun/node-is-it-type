function isNegativeIntegerOrZero(item: unknown): boolean;
function isNegativeIntegerOrZero<T extends number>(item: unknown): item is T;
function isNegativeIntegerOrZero(item: unknown): boolean {
	return Number.isInteger(item) && (item as number) <= 0;
}

export { isNegativeIntegerOrZero };
