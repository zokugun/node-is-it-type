import { type BoxedPrimitive } from './types.js';

export function isBoxedPrimitive(item: unknown): item is BoxedPrimitive {
	return item instanceof Boolean || item instanceof Number || item instanceof String || item instanceof BigInt;
}
