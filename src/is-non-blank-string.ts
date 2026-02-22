function isNonBlankString(item: unknown): boolean;
function isNonBlankString<T extends string>(item: unknown): item is T;
function isNonBlankString(item: unknown): boolean {
	return typeof item === 'string' && item.trim().length > 0;
}

export { isNonBlankString };
