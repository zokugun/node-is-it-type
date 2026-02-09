import { expect, it } from 'vitest';
import { isNumberGreaterOrEqual } from '../src/index.js';

it('isNumberGreaterOrEqual(x)', function () {
	// true
	expect(isNumberGreaterOrEqual(8, 8)).to.be.true;
	expect(isNumberGreaterOrEqual(42, 8)).to.be.true;
	expect(isNumberGreaterOrEqual(Infinity, 8)).to.be.true;

	// false
	expect(isNumberGreaterOrEqual([], 8)).to.be.false;
	expect(isNumberGreaterOrEqual([1, 2, 3], 8)).to.be.false;
	expect(isNumberGreaterOrEqual([1, 2, '3'], 8)).to.be.false;
	expect(isNumberGreaterOrEqual(arguments, 8)).to.be.false;
	expect(isNumberGreaterOrEqual(null, 8)).to.be.false;
	expect(isNumberGreaterOrEqual(undefined, 8)).to.be.false;
	expect(isNumberGreaterOrEqual(false, 8)).to.be.false;
	expect(isNumberGreaterOrEqual(new Object(true), 8)).to.be.false;
	expect(isNumberGreaterOrEqual('', 8)).to.be.false;
	expect(isNumberGreaterOrEqual('   ', 8)).to.be.false;
	expect(isNumberGreaterOrEqual('hello world', 8)).to.be.false;
	expect(isNumberGreaterOrEqual(new Object('hello world'), 8)).to.be.false;
	expect(isNumberGreaterOrEqual(new Object(42), 8)).to.be.false;
	expect(isNumberGreaterOrEqual('42', 8)).to.be.false;
	expect(isNumberGreaterOrEqual(-42, 8)).to.be.false;
	expect(isNumberGreaterOrEqual(-8, 8)).to.be.false;
	expect(isNumberGreaterOrEqual(-3.14, 8)).to.be.false;
	expect(isNumberGreaterOrEqual(0, 8)).to.be.false;
	expect(isNumberGreaterOrEqual(3.14, 8)).to.be.false;
	expect(isNumberGreaterOrEqual(Number.NaN, 8)).to.be.false;
	expect(isNumberGreaterOrEqual(9_007_199_254_740_991n, 8)).to.be.false;
	expect(isNumberGreaterOrEqual(new Object(9_007_199_254_740_991n), 8)).to.be.false;
	expect(isNumberGreaterOrEqual({}, 8)).to.be.false;
	expect(isNumberGreaterOrEqual({
		a: 'hello',
		b: 'world',
		c: '!',
	}, 8)).to.be.false;
	expect(isNumberGreaterOrEqual({
		a: 'hello',
		b: 'world',
		c: 1,
	}, 8)).to.be.false;
	expect(isNumberGreaterOrEqual(globalThis, 8)).to.be.false;
	expect(isNumberGreaterOrEqual(class {
		hello() {
			return 'hello world';
		}
	}, 8)).to.be.false;
	expect(isNumberGreaterOrEqual(new (class {
		hello() {
			return 'hello world';
		}
	})(), 8)).to.be.false;
	expect(isNumberGreaterOrEqual(/hello/, 8)).to.be.false;
	expect(isNumberGreaterOrEqual(new Date(), 8)).to.be.false;
	expect(isNumberGreaterOrEqual(Date, 8)).to.be.false;
	expect(isNumberGreaterOrEqual(() => 0, 8)).to.be.false;
	expect(isNumberGreaterOrEqual(async () => 0, 8)).to.be.false;
	expect(isNumberGreaterOrEqual((async () => 0)(), 8)).to.be.false;
	expect(isNumberGreaterOrEqual({ then: () => 0 }, 8)).to.be.false;
	expect(isNumberGreaterOrEqual(function * () {
		yield 0;
	}, 8)).to.be.false;
	expect(isNumberGreaterOrEqual((function * () {
		yield 0;
	})(), 8)).to.be.false;
	expect(isNumberGreaterOrEqual(async function * () {
		yield 0;
	}, 8)).to.be.false;
	expect(isNumberGreaterOrEqual((async function * () {
		yield 0;
	})(), 8)).to.be.false;
	expect(isNumberGreaterOrEqual(new Error('error'), 8)).to.be.false;
	expect(isNumberGreaterOrEqual(new Promise((resolve) => {
		resolve(0);
	}), 8)).to.be.false;
	expect(isNumberGreaterOrEqual(Symbol(0), 8)).to.be.false;
});
