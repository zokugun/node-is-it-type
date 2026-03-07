import { expect, it } from 'vitest';
import { isIntegerBetween } from '../src/index.js';

it('isIntegerBetween(x)', function () {
	// true
	expect(isIntegerBetween(8, 3, 10)).to.be.true;

	// false
	expect(isIntegerBetween([], 3, 10)).to.be.false;
	expect(isIntegerBetween([1, 2, 3], 3, 10)).to.be.false;
	expect(isIntegerBetween([1, 2, '3'], 3, 10)).to.be.false;
	expect(isIntegerBetween(arguments, 3, 10)).to.be.false;
	expect(isIntegerBetween(null, 3, 10)).to.be.false;
	expect(isIntegerBetween(undefined, 3, 10)).to.be.false;
	expect(isIntegerBetween(false, 3, 10)).to.be.false;
	expect(isIntegerBetween(new Object(true), 3, 10)).to.be.false;
	expect(isIntegerBetween('', 3, 10)).to.be.false;
	expect(isIntegerBetween('   ', 3, 10)).to.be.false;
	expect(isIntegerBetween('hello world', 3, 10)).to.be.false;
	expect(isIntegerBetween(new Object('hello world'), 3, 10)).to.be.false;
	expect(isIntegerBetween(new Object(42), 3, 10)).to.be.false;
	expect(isIntegerBetween('42', 3, 10)).to.be.false;
	expect(isIntegerBetween(42, 3, 10)).to.be.false;
	expect(isIntegerBetween(0, 3, 10)).to.be.false;
	expect(isIntegerBetween(-42, 3, 10)).to.be.false;
	expect(isIntegerBetween(-8, 3, 10)).to.be.false;
	expect(isIntegerBetween(-3.14, 3, 10)).to.be.false;
	expect(isIntegerBetween(3.14, 3, 10)).to.be.false;
	expect(isIntegerBetween(Infinity, 3, 10)).to.be.false;
	expect(isIntegerBetween(Number.NaN, 3, 10)).to.be.false;
	expect(isIntegerBetween(9_007_199_254_740_991n, 3, 10)).to.be.false;
	expect(isIntegerBetween(new Object(9_007_199_254_740_991n), 3, 10)).to.be.false;
	expect(isIntegerBetween({}, 3, 10)).to.be.false;
	expect(isIntegerBetween({
		a: 'hello',
		b: 'world',
		c: '!',
	}, 3, 10)).to.be.false;
	expect(isIntegerBetween({
		a: 'hello',
		b: 'world',
		c: 1,
	}, 3, 10)).to.be.false;
	expect(isIntegerBetween(globalThis, 3, 10)).to.be.false;
	expect(isIntegerBetween(class {
		hello() {
			return 'hello world';
		}
	}, 3, 10)).to.be.false;
	expect(isIntegerBetween(new (class {
		hello() {
			return 'hello world';
		}
	})(), 3, 10)).to.be.false;
	expect(isIntegerBetween(/hello/, 3, 10)).to.be.false;
	expect(isIntegerBetween(new Date(), 3, 10)).to.be.false;
	expect(isIntegerBetween(Date, 3, 10)).to.be.false;
	expect(isIntegerBetween(() => 0, 3, 10)).to.be.false;
	expect(isIntegerBetween(async () => 0, 3, 10)).to.be.false;
	expect(isIntegerBetween((async () => 0)(), 3, 10)).to.be.false;
	expect(isIntegerBetween({ then: () => 0 }, 3, 10)).to.be.false;
	expect(isIntegerBetween(function * () {
		yield 0;
	}, 3, 10)).to.be.false;
	expect(isIntegerBetween((function * () {
		yield 0;
	})(), 3, 10)).to.be.false;
	expect(isIntegerBetween(async function * () {
		yield 0;
	}, 3, 10)).to.be.false;
	expect(isIntegerBetween((async function * () {
		yield 0;
	})(), 3, 10)).to.be.false;
	expect(isIntegerBetween(new Error('error'), 3, 10)).to.be.false;
	expect(isIntegerBetween(new Promise((resolve) => {
		resolve(0);
	}), 3, 10)).to.be.false;
	expect(isIntegerBetween(Symbol(0), 3, 10)).to.be.false;
});
