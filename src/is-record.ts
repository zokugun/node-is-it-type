const ARGUMENTS_TAG = '[object Arguments]';

export function isRecord<T>(item: unknown, test?: (key: string, value: unknown) => value is T): item is Record<string, T> {
	if(item === null || typeof item !== 'object' || Array.isArray(item)) {
		return false;
	}

	if(item.constructor && item.constructor.name !== 'Object') {
		return false;
	}

	if(Object.prototype.toString.call(item) === ARGUMENTS_TAG) {
		return false;
	}

	if(test) {
		for(const [key, value] of Object.entries(item)) {
			if(!test(key, value)) {
				return false;
			}
		}
	}

	return true;
}
