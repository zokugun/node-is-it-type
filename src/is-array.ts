function isArray<T extends unknown[]>(item: unknown | T): item is T;
function isArray(item: unknown, test: (item: unknown) => boolean): boolean;
function isArray<T>(item: unknown, test: (item: unknown) => item is T): item is T[];
function isArray(item: unknown, test?: (item: unknown) => boolean): boolean {
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

export { isArray };
