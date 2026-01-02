export function isArray<T>(item: unknown, test?: (item: unknown) => item is T): item is T[] {
	if(!Array.isArray(item)) {
		return false;
	}

	if(test) {
		for(const value of item) {
			if(!test(value)) {
				return false;
			}
		}
	}

	return true;
}
