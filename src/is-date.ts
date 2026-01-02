export function isDate(item: unknown): item is Date {
	return item instanceof Date;
}
