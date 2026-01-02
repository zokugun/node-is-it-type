import { isNumberLike } from './is-number-like.js';

export function isNaN(item: unknown): boolean {
	if(!isNumberLike(item)) {
		return false;
	}

	if(typeof item === 'object') {
		item = item.valueOf();
	}

	return Number.isNaN(item);
}
