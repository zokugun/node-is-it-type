function isPositiveInteger(item: unknown): boolean;
function isPositiveInteger<T extends number>(item: unknown): item is T;
function isPositiveInteger(item: unknown): boolean {
	return Number.isInteger(item) && (item as number) > 0;
}

export { isPositiveInteger };
