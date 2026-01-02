export function isRegExp(item: unknown): item is RegExp {
	return item instanceof RegExp;
}
