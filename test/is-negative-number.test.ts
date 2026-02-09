import { expect, it } from 'vitest';
import { isNegativeNumber } from '../src/index.js';

it('isNegativeNumber(x)', function () {
	// true
	expect(isNegativeNumber(-42)).to.be.true;
	expect(isNegativeNumber(-8)).to.be.true;
	expect(isNegativeNumber(-3.14)).to.be.true;

	// false
	expect(isNegativeNumber([])).to.be.false;
	expect(isNegativeNumber([1, 2, 3])).to.be.false;
	expect(isNegativeNumber([1, 2, '3'])).to.be.false;
	expect(isNegativeNumber(arguments)).to.be.false;
	expect(isNegativeNumber(null)).to.be.false;
	expect(isNegativeNumber(undefined)).to.be.false;
	expect(isNegativeNumber(false)).to.be.false;
	expect(isNegativeNumber(new Object(true))).to.be.false;
	expect(isNegativeNumber('')).to.be.false;
	expect(isNegativeNumber('   ')).to.be.false;
	expect(isNegativeNumber('hello world')).to.be.false;
	expect(isNegativeNumber(new Object('hello world'))).to.be.false;
	expect(isNegativeNumber(new Object(42))).to.be.false;
	expect(isNegativeNumber('42')).to.be.false;
	expect(isNegativeNumber(42)).to.be.false;
	expect(isNegativeNumber(0)).to.be.false;
	expect(isNegativeNumber(3.14)).to.be.false;
	expect(isNegativeNumber(8)).to.be.false;
	expect(isNegativeNumber(Infinity)).to.be.false;
	expect(isNegativeNumber(Number.NaN)).to.be.false;
	expect(isNegativeNumber(9_007_199_254_740_991n)).to.be.false;
	expect(isNegativeNumber(new Object(9_007_199_254_740_991n))).to.be.false;
	expect(isNegativeNumber({})).to.be.false;
	expect(isNegativeNumber({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isNegativeNumber({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isNegativeNumber(globalThis)).to.be.false;
	expect(isNegativeNumber(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isNegativeNumber(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isNegativeNumber(/hello/)).to.be.false;
	expect(isNegativeNumber(new Date())).to.be.false;
	expect(isNegativeNumber(Date)).to.be.false;
	expect(isNegativeNumber(() => 0)).to.be.false;
	expect(isNegativeNumber(async () => 0)).to.be.false;
	expect(isNegativeNumber((async () => 0)())).to.be.false;
	expect(isNegativeNumber({ then: () => 0 })).to.be.false;
	expect(isNegativeNumber(function * () {
		yield 0;
	})).to.be.false;
	expect(isNegativeNumber((function * () {
		yield 0;
	})())).to.be.false;
	expect(isNegativeNumber(async function * () {
		yield 0;
	})).to.be.false;
	expect(isNegativeNumber((async function * () {
		yield 0;
	})())).to.be.false;
	expect(isNegativeNumber(new Error('error'))).to.be.false;
	expect(isNegativeNumber(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isNegativeNumber(Symbol(0))).to.be.false;
});
