export function isError(item: unknown): item is Error {
	return item instanceof Error;
}
