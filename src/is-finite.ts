import { isNumberLike } from './is-number-like.js';
import { type Numeric } from './types.js';

function isFinite(item: unknown): boolean;
function isFinite<T extends Numeric>(item: unknown): item is T;
function isFinite(item: unknown): boolean {
	if(!isNumberLike(item)) {
		return false;
	}

	if(typeof item === 'object') {
		item = item.valueOf();
	}

	return !Number.isNaN(item) && item !== Infinity;
}

export { isFinite };
