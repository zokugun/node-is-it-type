export function isNonUndefined<T>(item: T): item is Exclude<T, undefined> {
	return item !== undefined;
}
