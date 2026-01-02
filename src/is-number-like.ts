import { type Numeric } from './types.js';

export function isNumberLike(item: unknown): item is Numeric {
	const type = typeof item;
	return type === 'number' || type === 'bigint' || item instanceof Number || item instanceof BigInt;
}
