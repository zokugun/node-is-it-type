import { expect, it } from 'vitest';
import { isType, Types } from '../src/index.js';

it('isType(x)', function () {
	expect(isType([], Types.Array)).to.be.true;
	expect(isType([], 'array')).to.be.true;
	expect(isType([1, 2, 3], Types.Array)).to.be.true;
	expect(isType([1, 2, '3'], Types.Array)).to.be.true;
	expect(isType(arguments, Types.Object)).to.be.true;
	expect(isType(null, Types.Null)).to.be.true;
	expect(isType(undefined, Types.Undefined)).to.be.true;
	expect(isType(false, Types.Boolean)).to.be.true;
	expect(isType(new Object(true), Types.Object)).to.be.true;
	expect(isType('', Types.String)).to.be.true;
	expect(isType('   ', Types.String)).to.be.true;
	expect(isType('hello world', Types.String)).to.be.true;
	expect(isType(new Object('hello world'), Types.Object)).to.be.true;
	expect(isType(42, Types.Number)).to.be.true;
	expect(isType(new Object(42), Types.Object)).to.be.true;
	expect(isType('42', Types.String)).to.be.true;
	expect(isType(-42, Types.Number)).to.be.true;
	expect(isType(-8, Types.Number)).to.be.true;
	expect(isType(-3.14, Types.Number)).to.be.true;
	expect(isType(0, Types.Number)).to.be.true;
	expect(isType(3.14, Types.Number)).to.be.true;
	expect(isType(8, Types.Number)).to.be.true;
	expect(isType(9_007_199_254_740_991n, Types.BigInt)).to.be.true;
	expect(isType(new Object(9_007_199_254_740_991n), Types.Object)).to.be.true;
	expect(isType(Infinity, Types.Number)).to.be.true;
	expect(isType(Number.NaN, Types.Number)).to.be.true;
	expect(isType({}, Types.Record)).to.be.true;
	expect(isType({
		a: 'hello',
		b: 'world',
		c: '!',
	}, Types.Record)).to.be.true;
	expect(isType({
		a: 'hello',
		b: 'world',
		c: 1,
	}, Types.Record)).to.be.true;
	expect(isType(globalThis, Types.Record)).to.be.true;
	expect(isType(class {
		hello() {
			return 'hello world';
		}
	}, Types.Constructor)).to.be.true;
	expect(isType(new (class {
		hello() {
			return 'hello world';
		}
	})(), Types.Object)).to.be.true;
	expect(isType(/hello/, Types.RegExp)).to.be.true;
	expect(isType(new Date(), Types.Date)).to.be.true;
	expect(isType(Date, Types.Constructor)).to.be.true;
	expect(isType(() => 0, Types.SyncFunction)).to.be.true;
	expect(isType(async () => 0, Types.AsyncFunction)).to.be.true;
	expect(isType((async () => 0)(), Types.Promise)).to.be.true;
	expect(isType({ then: () => 0 }, Types.Record)).to.be.true;
	expect(isType(function * () {
		yield 0;
	}, Types.SyncGenerator)).to.be.true;
	expect(isType((function * () {
		yield 0;
	})(), Types.Object)).to.be.true;
	expect(isType(async function * () {
		yield 0;
	}, Types.AsyncGenerator)).to.be.true;
	expect(isType((async function * () {
		yield 0;
	})(), Types.Object)).to.be.true;
	expect(isType(new Error('error'), Types.Error)).to.be.true;
	expect(isType(new Promise((resolve) => {
		resolve(0);
	}), Types.Promise)).to.be.true;
	expect(isType(Symbol(0), Types.Symbol)).to.be.true;
});
