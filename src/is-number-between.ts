import { isNumber } from './is-number.js';

function isNumberBetween(item: unknown, min: number, max: number, inclusive?: boolean): boolean;
function isNumberBetween<T extends number>(item: unknown, min: number, max: number, inclusive?: boolean): item is T;
function isNumberBetween(item: unknown, min: number, max: number, inclusive: boolean = true): boolean {
	if(isNumber(item)) {
		return inclusive ? (item >= min && item <= max) : (item > min && item < max);
	}
	else {
		return false;
	}
}

export { isNumberBetween };
