export function isSymbol(item: unknown): item is Symbol {
	return typeof item === 'symbol';
}
