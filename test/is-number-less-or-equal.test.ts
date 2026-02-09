import { expect, it } from 'vitest';
import { isNumberLessOrEqual } from '../src/index.js';

it('isNumberLessOrEqual(x)', function () {
	// true
	expect(isNumberLessOrEqual(-42, 8)).to.be.true;
	expect(isNumberLessOrEqual(-8, 8)).to.be.true;
	expect(isNumberLessOrEqual(-3.14, 8)).to.be.true;
	expect(isNumberLessOrEqual(0, 8)).to.be.true;
	expect(isNumberLessOrEqual(3.14, 8)).to.be.true;
	expect(isNumberLessOrEqual(8, 8)).to.be.true;

	// false
	expect(isNumberLessOrEqual([], 8)).to.be.false;
	expect(isNumberLessOrEqual([1, 2, 3], 8)).to.be.false;
	expect(isNumberLessOrEqual([1, 2, '3'], 8)).to.be.false;
	expect(isNumberLessOrEqual(arguments, 8)).to.be.false;
	expect(isNumberLessOrEqual(null, 8)).to.be.false;
	expect(isNumberLessOrEqual(undefined, 8)).to.be.false;
	expect(isNumberLessOrEqual(false, 8)).to.be.false;
	expect(isNumberLessOrEqual(new Object(true), 8)).to.be.false;
	expect(isNumberLessOrEqual('', 8)).to.be.false;
	expect(isNumberLessOrEqual('   ', 8)).to.be.false;
	expect(isNumberLessOrEqual('hello world', 8)).to.be.false;
	expect(isNumberLessOrEqual(new Object('hello world'), 8)).to.be.false;
	expect(isNumberLessOrEqual(new Object(42), 8)).to.be.false;
	expect(isNumberLessOrEqual('42', 8)).to.be.false;
	expect(isNumberLessOrEqual(42, 8)).to.be.false;
	expect(isNumberLessOrEqual(Infinity, 8)).to.be.false;
	expect(isNumberLessOrEqual(Number.NaN, 8)).to.be.false;
	expect(isNumberLessOrEqual(9_007_199_254_740_991n, 8)).to.be.false;
	expect(isNumberLessOrEqual(new Object(9_007_199_254_740_991n), 8)).to.be.false;
	expect(isNumberLessOrEqual({}, 8)).to.be.false;
	expect(isNumberLessOrEqual({
		a: 'hello',
		b: 'world',
		c: '!',
	}, 8)).to.be.false;
	expect(isNumberLessOrEqual({
		a: 'hello',
		b: 'world',
		c: 1,
	}, 8)).to.be.false;
	expect(isNumberLessOrEqual(globalThis, 8)).to.be.false;
	expect(isNumberLessOrEqual(class {
		hello() {
			return 'hello world';
		}
	}, 8)).to.be.false;
	expect(isNumberLessOrEqual(new (class {
		hello() {
			return 'hello world';
		}
	})(), 8)).to.be.false;
	expect(isNumberLessOrEqual(/hello/, 8)).to.be.false;
	expect(isNumberLessOrEqual(new Date(), 8)).to.be.false;
	expect(isNumberLessOrEqual(Date, 8)).to.be.false;
	expect(isNumberLessOrEqual(() => 0, 8)).to.be.false;
	expect(isNumberLessOrEqual(async () => 0, 8)).to.be.false;
	expect(isNumberLessOrEqual((async () => 0)(), 8)).to.be.false;
	expect(isNumberLessOrEqual({ then: () => 0 }, 8)).to.be.false;
	expect(isNumberLessOrEqual(function * () {
		yield 0;
	}, 8)).to.be.false;
	expect(isNumberLessOrEqual((function * () {
		yield 0;
	})(), 8)).to.be.false;
	expect(isNumberLessOrEqual(async function * () {
		yield 0;
	}, 8)).to.be.false;
	expect(isNumberLessOrEqual((async function * () {
		yield 0;
	})(), 8)).to.be.false;
	expect(isNumberLessOrEqual(new Error('error'), 8)).to.be.false;
	expect(isNumberLessOrEqual(new Promise((resolve) => {
		resolve(0);
	}), 8)).to.be.false;
	expect(isNumberLessOrEqual(Symbol(0), 8)).to.be.false;
});
