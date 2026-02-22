function isNonEmptyArray<T extends unknown[]>(item: unknown | T): item is T;
function isNonEmptyArray(item: unknown, test: (item: unknown) => boolean): boolean;
function isNonEmptyArray<T>(item: unknown, test: (item: unknown) => item is T): item is T[];
function isNonEmptyArray(item: unknown, test?: (item: unknown) => boolean): boolean {
	if(!Array.isArray(item) || item.length === 0) {
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

export { isNonEmptyArray };
