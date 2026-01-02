export function isConstructor(item: unknown): boolean {
	if(typeof item !== 'function' || !item.prototype) {
		return false;
	}

	for(const key in item.prototype) {
		if(Object.hasOwn(item, key)) {
			return true;
		}
	}

	return Object.getOwnPropertyNames(item.prototype).length > 1;
}
