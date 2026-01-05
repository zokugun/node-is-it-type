import { expect, it } from 'vitest';
import { isNegativeIntegerOrZero } from '../src/index.js';

it('isNegativeIntegerOrZero(x)', function () {
	// true
	expect(isNegativeIntegerOrZero(-42)).to.be.true;
	expect(isNegativeIntegerOrZero(-8)).to.be.true;
	expect(isNegativeIntegerOrZero(0)).to.be.true;

	// false
	expect(isNegativeIntegerOrZero([])).to.be.false;
	expect(isNegativeIntegerOrZero([1, 2, 3])).to.be.false;
	expect(isNegativeIntegerOrZero([1, 2, '3'])).to.be.false;
	expect(isNegativeIntegerOrZero(arguments)).to.be.false;
	expect(isNegativeIntegerOrZero(null)).to.be.false;
	expect(isNegativeIntegerOrZero(undefined)).to.be.false;
	expect(isNegativeIntegerOrZero(false)).to.be.false;
	expect(isNegativeIntegerOrZero(new Object(true))).to.be.false;
	expect(isNegativeIntegerOrZero('')).to.be.false;
	expect(isNegativeIntegerOrZero('   ')).to.be.false;
	expect(isNegativeIntegerOrZero('hello world')).to.be.false;
	expect(isNegativeIntegerOrZero(new Object('hello world'))).to.be.false;
	expect(isNegativeIntegerOrZero(new Object(42))).to.be.false;
	expect(isNegativeIntegerOrZero('42')).to.be.false;
	expect(isNegativeIntegerOrZero(42)).to.be.false;
	expect(isNegativeIntegerOrZero(-3.14)).to.be.false;
	expect(isNegativeIntegerOrZero(3.14)).to.be.false;
	expect(isNegativeIntegerOrZero(8)).to.be.false;
	expect(isNegativeIntegerOrZero(Infinity)).to.be.false;
	expect(isNegativeIntegerOrZero(Number.NaN)).to.be.false;
	expect(isNegativeIntegerOrZero(9_007_199_254_740_991n)).to.be.false;
	expect(isNegativeIntegerOrZero(new Object(9_007_199_254_740_991n))).to.be.false;
	expect(isNegativeIntegerOrZero({})).to.be.false;
	expect(isNegativeIntegerOrZero({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isNegativeIntegerOrZero({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isNegativeIntegerOrZero(globalThis)).to.be.false;
	expect(isNegativeIntegerOrZero(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isNegativeIntegerOrZero(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isNegativeIntegerOrZero(/hello/)).to.be.false;
	expect(isNegativeIntegerOrZero(new Date())).to.be.false;
	expect(isNegativeIntegerOrZero(Date)).to.be.false;
	expect(isNegativeIntegerOrZero(() => 0)).to.be.false;
	expect(isNegativeIntegerOrZero(async () => 0)).to.be.false;
	expect(isNegativeIntegerOrZero((async () => 0)())).to.be.false;
	expect(isNegativeIntegerOrZero({ then: () => 0 })).to.be.false;
	expect(isNegativeIntegerOrZero(function * () {
		yield 0;
	})).to.be.false;
	expect(isNegativeIntegerOrZero((function * () {
		yield 0;
	})())).to.be.false;
	expect(isNegativeIntegerOrZero(async function * () {
		yield 0;
	})).to.be.false;
	expect(isNegativeIntegerOrZero((async function * () {
		yield 0;
	})())).to.be.false;
	expect(isNegativeIntegerOrZero(new Error('error'))).to.be.false;
	expect(isNegativeIntegerOrZero(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isNegativeIntegerOrZero(Symbol(0))).to.be.false;
});
