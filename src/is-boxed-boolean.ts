export function isBoxedBoolean(item: unknown): item is Boolean {
	return item instanceof Boolean;
}
