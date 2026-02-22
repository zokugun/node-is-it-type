export function isEquals<T>(item: unknown, ...values: T[]): item is T {
	for(const value of values) {
		if(item === value) {
			return true;
		}
	}

	return false;
}
