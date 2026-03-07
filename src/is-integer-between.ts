import { isInteger } from './is-integer.js';

function isIntegerBetween(item: unknown, min: number, max: number, inclusive?: boolean): boolean;
function isIntegerBetween<T extends number>(item: unknown, min: number, max: number, inclusive?: boolean): item is T;
function isIntegerBetween(item: unknown, min: number, max: number, inclusive: boolean = true): boolean {
	// console.log(item, isInteger<number>(item))
	if(isInteger<number>(item)) {
		// console.log(item >= min && item <= max)
		return inclusive ? (item >= min && item <= max) : (item > min && item < max);
	}
	else {
		return false;
	}
}

export { isIntegerBetween };
