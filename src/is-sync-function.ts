import { isConstructor } from './is-constructor.js';
import { type SyncFunction } from './types.js';

export function isSyncFunction(item: unknown): item is SyncFunction {
	if(typeof item !== 'function' || isConstructor(item)) {
		return false;
	}

	return item.constructor.name !== 'AsyncFunction' && item.constructor.name !== 'GeneratorFunction' && item.constructor.name !== 'AsyncGeneratorFunction';
}
