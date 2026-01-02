import { type AsyncFunction } from './types.js';

export function isAsyncFunction(item: unknown): item is AsyncFunction {
	return typeof item === 'function' && 'constructor' in item && item.constructor.name === 'AsyncFunction';
}
