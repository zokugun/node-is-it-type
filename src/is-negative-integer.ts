function isNegativeInteger(item: unknown): boolean;
function isNegativeInteger<T extends number>(item: unknown): item is T;
function isNegativeInteger(item: unknown): boolean {
	return Number.isInteger(item) && (item as number) < 0;
}

export { isNegativeInteger };
