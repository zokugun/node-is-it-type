import { expect, it } from 'vitest';
import { typeOf, Types } from '../src/index.js';

it('typeOf(x)', function () {
	expect(typeOf([])).to.equals(Types.Array);
	expect(typeOf([])).to.equals('array');
	expect(typeOf([1, 2, 3])).to.equals(Types.Array);
	expect(typeOf([1, 2, '3'])).to.equals(Types.Array);
	expect(typeOf(arguments)).to.equals(Types.Object);
	expect(typeOf(null)).to.equals(Types.Null);
	expect(typeOf(undefined)).to.equals(Types.Undefined);
	expect(typeOf(false)).to.equals(Types.Boolean);
	expect(typeOf(new Object(true))).to.equals(Types.Object);
	expect(typeOf('')).to.equals(Types.String);
	expect(typeOf('   ')).to.equals(Types.String);
	expect(typeOf('hello world')).to.equals(Types.String);
	expect(typeOf(new Object('hello world'))).to.equals(Types.Object);
	expect(typeOf(42)).to.equals(Types.Number);
	expect(typeOf(new Object(42))).to.equals(Types.Object);
	expect(typeOf('42')).to.equals(Types.String);
	expect(typeOf(-42)).to.equals(Types.Number);
	expect(typeOf(-8)).to.equals(Types.Number);
	expect(typeOf(-3.14)).to.equals(Types.Number);
	expect(typeOf(0)).to.equals(Types.Number);
	expect(typeOf(3.14)).to.equals(Types.Number);
	expect(typeOf(8)).to.equals(Types.Number);
	expect(typeOf(9_007_199_254_740_991n)).to.equals(Types.BigInt);
	expect(typeOf(new Object(9_007_199_254_740_991n))).to.equals(Types.Object);
	expect(typeOf(Infinity)).to.equals(Types.Number);
	expect(typeOf(Number.NaN)).to.equals(Types.Number);
	expect(typeOf({})).to.equals(Types.Record);
	expect(typeOf({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.equals(Types.Record);
	expect(typeOf({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.equals(Types.Record);
	expect(typeOf(globalThis)).to.equals(Types.Record);
	expect(typeOf(class {
		hello() {
			return 'hello world';
		}
	})).to.equals(Types.Constructor);
	expect(typeOf(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.equals(Types.Object);
	expect(typeOf(/hello/)).to.equals(Types.RegExp);
	expect(typeOf(new Date())).to.equals(Types.Date);
	expect(typeOf(Date)).to.equals(Types.Constructor);
	expect(typeOf(() => 0)).to.equals(Types.SyncFunction);
	expect(typeOf(async () => 0)).to.equals(Types.AsyncFunction);
	expect(typeOf(function * () {
		yield 0;
	})).to.equals(Types.Generator);
	expect(typeOf(new Error('error'))).to.equals(Types.Error);
	expect(typeOf(new Promise((resolve) => {
		resolve(0);
	}))).to.equals(Types.Promise);
	expect(typeOf(Symbol(0))).to.equals(Types.Symbol);
});
