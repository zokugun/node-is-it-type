export function isNotEquals<X, T extends X>(item: X, ...values: T[]): item is Exclude<X, T> {
	for(const value of values) {
		if(item !== value) {
			return true;
		}
	}

	return false;
}
