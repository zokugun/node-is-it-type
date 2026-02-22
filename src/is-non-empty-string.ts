function isNonEmptyString(item: unknown): boolean;
function isNonEmptyString<T extends string>(item: unknown): item is T;
function isNonEmptyString(item: unknown): boolean {
	return typeof item === 'string' && item.length > 0;
}

export { isNonEmptyString };
