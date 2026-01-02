import { isRecord } from './is-record.js';

export function isNonEmptyRecord(item: unknown): boolean {
	if(!isRecord(item)) {
		return false;
	}

	for(const key in item) {
		if(Object.hasOwn(item, key)) {
			return true;
		}
	}

	return false;
}
