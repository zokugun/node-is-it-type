import { isBoxedPrimitive } from './is-boxed-primitive.js';
import { type BoxedPrimitive, type Primitive } from './types.js';

export function toPrimitive(item: Primitive | BoxedPrimitive): Primitive {
	if(isBoxedPrimitive(item)) {
		return item.valueOf();
	}
	else {
		return item;
	}
}
