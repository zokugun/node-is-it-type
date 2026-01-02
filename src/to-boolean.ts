export function toBoolean(item: boolean | Boolean): boolean {
	if(item instanceof Boolean) {
		return item.valueOf();
	}
	else {
		return item;
	}
}
