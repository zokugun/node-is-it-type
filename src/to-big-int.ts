export function toBigInt(item: bigint | BigInt): bigint {
	if(item instanceof BigInt) {
		return item.valueOf();
	}
	else {
		return item;
	}
}
