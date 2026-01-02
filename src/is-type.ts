import { typeOf } from './type-of.js';
import { type TypesLiteral } from './types.js';

export function isType(item: unknown, type: TypesLiteral): boolean {
	return typeOf(item) === type;
}
