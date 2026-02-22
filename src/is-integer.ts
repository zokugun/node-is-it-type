function isInteger(item: unknown): boolean;
function isInteger<T extends number>(item: unknown): item is T;
function isInteger(item: unknown): boolean {
	return Number.isInteger(item);
}

export { isInteger };
