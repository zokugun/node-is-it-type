export type AsyncFunction = (...args: unknown[]) => Promise<unknown>;

export type BoxedPrimitive = Boolean | BigInt | Number | String;

export type Numeric = number | Number | bigint | BigInt;

export type Primitive = boolean | bigint | number | string;

export type SyncFunction = (...args: unknown[]) => Exclude<unknown, Promise<unknown>>;

export type TypesLiteral = 'array' | 'async-function' | 'async-generator' | 'bigint' | 'boolean' | 'constructor' | 'error' | 'date' | 'node-error' | 'null' | 'number' | 'object' | 'promise' | 'record' | 'regexp' | 'string' | 'symbol' | 'sync-function' | 'sync-generator' | 'undefined';

export enum Types {
	Array = 'array',
	AsyncFunction = 'async-function',
	AsyncGenerator = 'async-generator',
	BigInt = 'bigint',
	Boolean = 'boolean',
	Constructor = 'constructor',
	Error = 'error',
	Date = 'date',
	NodeError = 'node-error',
	Null = 'null',
	Number = 'number',
	Object = 'object',
	Promise = 'promise',
	Record = 'record',
	RegExp = 'regexp',
	String = 'string',
	Symbol = 'symbol',
	SyncFunction = 'sync-function',
	SyncGenerator = 'sync-generator',
	Undefined = 'undefined',
}
