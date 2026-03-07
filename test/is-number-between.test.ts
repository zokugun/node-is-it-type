import { expect, it } from 'vitest';
import { isNumberBetween } from '../src/index.js';

it('isNumberBetween(x)', function () {
	// true
	expect(isNumberBetween(3.14, 3, 10)).to.be.true;
	expect(isNumberBetween(8, 3, 10)).to.be.true;

	// false
	expect(isNumberBetween([], 3, 10)).to.be.false;
	expect(isNumberBetween([1, 2, 3], 3, 10)).to.be.false;
	expect(isNumberBetween([1, 2, '3'], 3, 10)).to.be.false;
	expect(isNumberBetween(arguments, 3, 10)).to.be.false;
	expect(isNumberBetween(null, 3, 10)).to.be.false;
	expect(isNumberBetween(undefined, 3, 10)).to.be.false;
	expect(isNumberBetween(false, 3, 10)).to.be.false;
	expect(isNumberBetween(new Object(true), 3, 10)).to.be.false;
	expect(isNumberBetween('', 3, 10)).to.be.false;
	expect(isNumberBetween('   ', 3, 10)).to.be.false;
	expect(isNumberBetween('hello world', 3, 10)).to.be.false;
	expect(isNumberBetween(new Object('hello world'), 3, 10)).to.be.false;
	expect(isNumberBetween(new Object(42), 3, 10)).to.be.false;
	expect(isNumberBetween('42', 3, 10)).to.be.false;
	expect(isNumberBetween(42, 3, 10)).to.be.false;
	expect(isNumberBetween(0, 3, 10)).to.be.false;
	expect(isNumberBetween(-42, 3, 10)).to.be.false;
	expect(isNumberBetween(-8, 3, 10)).to.be.false;
	expect(isNumberBetween(-3.14, 3, 10)).to.be.false;
	expect(isNumberBetween(Infinity, 3, 10)).to.be.false;
	expect(isNumberBetween(Number.NaN, 3, 10)).to.be.false;
	expect(isNumberBetween(9_007_199_254_740_991n, 3, 10)).to.be.false;
	expect(isNumberBetween(new Object(9_007_199_254_740_991n), 3, 10)).to.be.false;
	expect(isNumberBetween({}, 3, 10)).to.be.false;
	expect(isNumberBetween({
		a: 'hello',
		b: 'world',
		c: '!',
	}, 3, 10)).to.be.false;
	expect(isNumberBetween({
		a: 'hello',
		b: 'world',
		c: 1,
	}, 3, 10)).to.be.false;
	expect(isNumberBetween(globalThis, 3, 10)).to.be.false;
	expect(isNumberBetween(class {
		hello() {
			return 'hello world';
		}
	}, 3, 10)).to.be.false;
	expect(isNumberBetween(new (class {
		hello() {
			return 'hello world';
		}
	})(), 3, 10)).to.be.false;
	expect(isNumberBetween(/hello/, 3, 10)).to.be.false;
	expect(isNumberBetween(new Date(), 3, 10)).to.be.false;
	expect(isNumberBetween(Date, 3, 10)).to.be.false;
	expect(isNumberBetween(() => 0, 3, 10)).to.be.false;
	expect(isNumberBetween(async () => 0, 3, 10)).to.be.false;
	expect(isNumberBetween((async () => 0)(), 3, 10)).to.be.false;
	expect(isNumberBetween({ then: () => 0 }, 3, 10)).to.be.false;
	expect(isNumberBetween(function * () {
		yield 0;
	}, 3, 10)).to.be.false;
	expect(isNumberBetween((function * () {
		yield 0;
	})(), 3, 10)).to.be.false;
	expect(isNumberBetween(async function * () {
		yield 0;
	}, 3, 10)).to.be.false;
	expect(isNumberBetween((async function * () {
		yield 0;
	})(), 3, 10)).to.be.false;
	expect(isNumberBetween(new Error('error'), 3, 10)).to.be.false;
	expect(isNumberBetween(new Promise((resolve) => {
		resolve(0);
	}), 3, 10)).to.be.false;
	expect(isNumberBetween(Symbol(0), 3, 10)).to.be.false;
});
