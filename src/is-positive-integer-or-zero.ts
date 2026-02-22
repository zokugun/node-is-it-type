function isPositiveIntegerOrZero(item: unknown): boolean;
function isPositiveIntegerOrZero<T extends number>(item: unknown): item is T;
function isPositiveIntegerOrZero(item: unknown): boolean {
	return Number.isInteger(item) && (item as number) >= 0;
}

export { isPositiveIntegerOrZero };
