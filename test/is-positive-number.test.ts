import { expect, it } from 'vitest';
import { isPositiveNumber } from '../src/index.js';

it('isPositiveNumber(x)', function () {
	// true
	expect(isPositiveNumber(42)).to.be.true;
	expect(isPositiveNumber(8)).to.be.true;
	expect(isPositiveNumber(3.14)).to.be.true;
	expect(isPositiveNumber(Infinity)).to.be.true;

	// false
	expect(isPositiveNumber([])).to.be.false;
	expect(isPositiveNumber([1, 2, 3])).to.be.false;
	expect(isPositiveNumber([1, 2, '3'])).to.be.false;
	expect(isPositiveNumber(arguments)).to.be.false;
	expect(isPositiveNumber(null)).to.be.false;
	expect(isPositiveNumber(undefined)).to.be.false;
	expect(isPositiveNumber(false)).to.be.false;
	expect(isPositiveNumber(new Object(true))).to.be.false;
	expect(isPositiveNumber('')).to.be.false;
	expect(isPositiveNumber('   ')).to.be.false;
	expect(isPositiveNumber('hello world')).to.be.false;
	expect(isPositiveNumber(new Object('hello world'))).to.be.false;
	expect(isPositiveNumber(new Object(42))).to.be.false;
	expect(isPositiveNumber('42')).to.be.false;
	expect(isPositiveNumber(-42)).to.be.false;
	expect(isPositiveNumber(-8)).to.be.false;
	expect(isPositiveNumber(-3.14)).to.be.false;
	expect(isPositiveNumber(0)).to.be.false;
	expect(isPositiveNumber(9_007_199_254_740_991n)).to.be.false;
	expect(isPositiveNumber(new Object(9_007_199_254_740_991n))).to.be.false;
	expect(isPositiveNumber(Number.NaN)).to.be.false;
	expect(isPositiveNumber({})).to.be.false;
	expect(isPositiveNumber({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isPositiveNumber({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isPositiveNumber(globalThis)).to.be.false;
	expect(isPositiveNumber(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isPositiveNumber(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isPositiveNumber(/hello/)).to.be.false;
	expect(isPositiveNumber(new Date())).to.be.false;
	expect(isPositiveNumber(Date)).to.be.false;
	expect(isPositiveNumber(() => 0)).to.be.false;
	expect(isPositiveNumber(async () => 0)).to.be.false;
	expect(isPositiveNumber((async () => 0)())).to.be.false;
	expect(isPositiveNumber({ then: () => 0 })).to.be.false;
	expect(isPositiveNumber(function * () {
		yield 0;
	})).to.be.false;
	expect(isPositiveNumber((function * () {
		yield 0;
	})())).to.be.false;
	expect(isPositiveNumber(async function * () {
		yield 0;
	})).to.be.false;
	expect(isPositiveNumber((async function * () {
		yield 0;
	})())).to.be.false;
	expect(isPositiveNumber(new Error('error'))).to.be.false;
	expect(isPositiveNumber(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isPositiveNumber(Symbol(0))).to.be.false;
});
