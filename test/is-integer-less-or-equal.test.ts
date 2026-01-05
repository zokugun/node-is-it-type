import { expect, it } from 'vitest';
import { isIntegerLessOrEqual } from '../src/index.js';

it('isIntegerLessOrEqual(x)', function () {
	// true
	expect(isIntegerLessOrEqual(-42, 8)).to.be.true;
	expect(isIntegerLessOrEqual(-8, 8)).to.be.true;
	expect(isIntegerLessOrEqual(0, 8)).to.be.true;
	expect(isIntegerLessOrEqual(8, 8)).to.be.true;

	// false
	expect(isIntegerLessOrEqual([], 8)).to.be.false;
	expect(isIntegerLessOrEqual([1, 2, 3], 8)).to.be.false;
	expect(isIntegerLessOrEqual([1, 2, '3'], 8)).to.be.false;
	expect(isIntegerLessOrEqual(arguments, 8)).to.be.false;
	expect(isIntegerLessOrEqual(null, 8)).to.be.false;
	expect(isIntegerLessOrEqual(undefined, 8)).to.be.false;
	expect(isIntegerLessOrEqual(false, 8)).to.be.false;
	expect(isIntegerLessOrEqual(new Object(true), 8)).to.be.false;
	expect(isIntegerLessOrEqual('', 8)).to.be.false;
	expect(isIntegerLessOrEqual('   ', 8)).to.be.false;
	expect(isIntegerLessOrEqual('hello world', 8)).to.be.false;
	expect(isIntegerLessOrEqual(new Object('hello world'), 8)).to.be.false;
	expect(isIntegerLessOrEqual(new Object(42), 8)).to.be.false;
	expect(isIntegerLessOrEqual('42', 8)).to.be.false;
	expect(isIntegerLessOrEqual(42, 8)).to.be.false;
	expect(isIntegerLessOrEqual(-3.14, 8)).to.be.false;
	expect(isIntegerLessOrEqual(3.14, 8)).to.be.false;
	expect(isIntegerLessOrEqual(Infinity, 8)).to.be.false;
	expect(isIntegerLessOrEqual(Number.NaN, 8)).to.be.false;
	expect(isIntegerLessOrEqual(9_007_199_254_740_991n, 8)).to.be.false;
	expect(isIntegerLessOrEqual(new Object(9_007_199_254_740_991n), 8)).to.be.false;
	expect(isIntegerLessOrEqual({}, 8)).to.be.false;
	expect(isIntegerLessOrEqual({
		a: 'hello',
		b: 'world',
		c: '!',
	}, 8)).to.be.false;
	expect(isIntegerLessOrEqual({
		a: 'hello',
		b: 'world',
		c: 1,
	}, 8)).to.be.false;
	expect(isIntegerLessOrEqual(globalThis, 8)).to.be.false;
	expect(isIntegerLessOrEqual(class {
		hello() {
			return 'hello world';
		}
	}, 8)).to.be.false;
	expect(isIntegerLessOrEqual(new (class {
		hello() {
			return 'hello world';
		}
	})(), 8)).to.be.false;
	expect(isIntegerLessOrEqual(/hello/, 8)).to.be.false;
	expect(isIntegerLessOrEqual(new Date(), 8)).to.be.false;
	expect(isIntegerLessOrEqual(Date, 8)).to.be.false;
	expect(isIntegerLessOrEqual(() => 0, 8)).to.be.false;
	expect(isIntegerLessOrEqual(async () => 0, 8)).to.be.false;
	expect(isIntegerLessOrEqual((async () => 0)(), 8)).to.be.false;
	expect(isIntegerLessOrEqual({ then: () => 0 }, 8)).to.be.false;
	expect(isIntegerLessOrEqual(function * () {
		yield 0;
	}, 8)).to.be.false;
	expect(isIntegerLessOrEqual((function * () {
		yield 0;
	})(), 8)).to.be.false;
	expect(isIntegerLessOrEqual(async function * () {
		yield 0;
	}, 8)).to.be.false;
	expect(isIntegerLessOrEqual((async function * () {
		yield 0;
	})(), 8)).to.be.false;
	expect(isIntegerLessOrEqual(new Error('error'), 8)).to.be.false;
	expect(isIntegerLessOrEqual(new Promise((resolve) => {
		resolve(0);
	}), 8)).to.be.false;
	expect(isIntegerLessOrEqual(Symbol(0), 8)).to.be.false;
});
