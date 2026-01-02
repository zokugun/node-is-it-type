export function isNonNull<T>(item: T): item is Exclude<T, null> {
	return item !== null;
}
