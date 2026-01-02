export function toNumber(item: number | Number): number {
	if(item instanceof Number) {
		return item.valueOf();
	}
	else {
		return item;
	}
}
