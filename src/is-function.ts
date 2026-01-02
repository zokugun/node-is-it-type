import { isConstructor } from './is-constructor.js';

export function isFunction(item: unknown): item is Function {
	return typeof item === 'function' && !isConstructor(item);
}
