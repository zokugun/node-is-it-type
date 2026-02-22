import { isRecord } from './is-record.js';

function isNonEmptyRecord<T extends Record<string, unknown>>(item: unknown | T): item is T;
function isNonEmptyRecord(item: unknown, test: (key: string, value: unknown) => boolean): boolean;
function isNonEmptyRecord<T>(item: unknown, test: (key: string, value: unknown) => value is T): item is Record<string, T>;
function isNonEmptyRecord(item: unknown, test?: (key: string, value: unknown) => boolean): boolean {
	if(!isRecord(item)) {
		return false;
	}

	if(test) {
		let result = false;

		for(const [key, value] of Object.entries(item)) {
			if(test(key, value)) {
				result = true;
			}
			else {
				return false;
			}
		}

		return result;
	}
	else {
		for(const key in item) {
			if(Object.hasOwn(item, key)) {
				return true;
			}
		}

		return false;
	}
}

export { isNonEmptyRecord };
