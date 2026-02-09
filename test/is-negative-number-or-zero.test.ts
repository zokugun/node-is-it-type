import { expect, it } from 'vitest';
import { isNegativeNumberOrZero } from '../src/index.js';

it('isNegativeNumberOrZero(x)', function () {
	// true
	expect(isNegativeNumberOrZero(-42)).to.be.true;
	expect(isNegativeNumberOrZero(-8)).to.be.true;
	expect(isNegativeNumberOrZero(-3.14)).to.be.true;
	expect(isNegativeNumberOrZero(0)).to.be.true;

	// false
	expect(isNegativeNumberOrZero([])).to.be.false;
	expect(isNegativeNumberOrZero([1, 2, 3])).to.be.false;
	expect(isNegativeNumberOrZero([1, 2, '3'])).to.be.false;
	expect(isNegativeNumberOrZero(arguments)).to.be.false;
	expect(isNegativeNumberOrZero(null)).to.be.false;
	expect(isNegativeNumberOrZero(undefined)).to.be.false;
	expect(isNegativeNumberOrZero(false)).to.be.false;
	expect(isNegativeNumberOrZero(new Object(true))).to.be.false;
	expect(isNegativeNumberOrZero('')).to.be.false;
	expect(isNegativeNumberOrZero('   ')).to.be.false;
	expect(isNegativeNumberOrZero('hello world')).to.be.false;
	expect(isNegativeNumberOrZero(new Object('hello world'))).to.be.false;
	expect(isNegativeNumberOrZero(new Object(42))).to.be.false;
	expect(isNegativeNumberOrZero('42')).to.be.false;
	expect(isNegativeNumberOrZero(42)).to.be.false;
	expect(isNegativeNumberOrZero(3.14)).to.be.false;
	expect(isNegativeNumberOrZero(8)).to.be.false;
	expect(isNegativeNumberOrZero(Infinity)).to.be.false;
	expect(isNegativeNumberOrZero(Number.NaN)).to.be.false;
	expect(isNegativeNumberOrZero(9_007_199_254_740_991n)).to.be.false;
	expect(isNegativeNumberOrZero(new Object(9_007_199_254_740_991n))).to.be.false;
	expect(isNegativeNumberOrZero({})).to.be.false;
	expect(isNegativeNumberOrZero({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isNegativeNumberOrZero({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isNegativeNumberOrZero(globalThis)).to.be.false;
	expect(isNegativeNumberOrZero(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isNegativeNumberOrZero(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isNegativeNumberOrZero(/hello/)).to.be.false;
	expect(isNegativeNumberOrZero(new Date())).to.be.false;
	expect(isNegativeNumberOrZero(Date)).to.be.false;
	expect(isNegativeNumberOrZero(() => 0)).to.be.false;
	expect(isNegativeNumberOrZero(async () => 0)).to.be.false;
	expect(isNegativeNumberOrZero((async () => 0)())).to.be.false;
	expect(isNegativeNumberOrZero({ then: () => 0 })).to.be.false;
	expect(isNegativeNumberOrZero(function * () {
		yield 0;
	})).to.be.false;
	expect(isNegativeNumberOrZero((function * () {
		yield 0;
	})())).to.be.false;
	expect(isNegativeNumberOrZero(async function * () {
		yield 0;
	})).to.be.false;
	expect(isNegativeNumberOrZero((async function * () {
		yield 0;
	})())).to.be.false;
	expect(isNegativeNumberOrZero(new Error('error'))).to.be.false;
	expect(isNegativeNumberOrZero(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isNegativeNumberOrZero(Symbol(0))).to.be.false;
});
