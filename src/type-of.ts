import { isAsyncFunction } from './is-async-function.js';
import { isConstructor } from './is-constructor.js';
import { isDate } from './is-date.js';
import { isError } from './is-error.js';
import { isGenerator } from './is-generator.js';
import { isNodeError } from './is-node-error.js';
import { isPromise } from './is-promise.js';
import { isRecord } from './is-record.js';
import { isRegExp } from './is-reg-exp.js';
import { type TypesLiteral } from './types.js';

export function typeOf(item: unknown): TypesLiteral { // {{{
	if(item === undefined) {
		return 'undefined';
	}

	if(item === null) {
		return 'null';
	}

	const type = typeof item;

	if(type === 'object') {
		if(Array.isArray(item)) {
			return 'array';
		}
		else if(isDate(item)) {
			return 'date';
		}
		else if(isError(item)) {
			return 'error';
		}
		else if(isNodeError(item)) {
			return 'node-error';
		}
		else if(isPromise(item)) {
			return 'promise';
		}
		else if(isRecord(item)) {
			return 'record';
		}
		else if(isRegExp(item)) {
			return 'regexp';
		}

		return 'object';
	}
	else if(type === 'function') {
		if(isAsyncFunction(item as Function)) {
			return 'async-function';
		}
		else if(isConstructor(item as Function)) {
			return 'constructor';
		}
		else if(isGenerator(item)) {
			return 'generator';
		}
		else {
			return 'sync-function';
		}
	}
	else {
		return type as TypesLiteral;
	}
}
