export function isNonNullable<T>(item: T): item is NonNullable<T> {
	return item !== undefined && item !== null;
}
