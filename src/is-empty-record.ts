import { isRecord } from './is-record.js';

export function isEmptyRecord(item: unknown): item is {} {
	if(!isRecord(item)) {
		return false;
	}

	for(const key in item) {
		if(Object.hasOwn(item, key)) {
			return false;
		}
	}

	return true;
}
