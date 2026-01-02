export function isBoxedString(item: unknown): item is String {
	return item instanceof String;
}
