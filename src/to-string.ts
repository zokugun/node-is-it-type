export function toString(item: string | String): string {
	if(item instanceof String) {
		return item.valueOf();
	}
	else {
		return item;
	}
}
