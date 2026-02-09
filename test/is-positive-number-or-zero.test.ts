import { expect, it } from 'vitest';
import { isPositiveNumberOrZero } from '../src/index.js';

it('isPositiveNumberOrZero(x)', function () {
	// true
	expect(isPositiveNumberOrZero(42)).to.be.true;
	expect(isPositiveNumberOrZero(8)).to.be.true;
	expect(isPositiveNumberOrZero(3.14)).to.be.true;
	expect(isPositiveNumberOrZero(Infinity)).to.be.true;
	expect(isPositiveNumberOrZero(0)).to.be.true;

	// false
	expect(isPositiveNumberOrZero([])).to.be.false;
	expect(isPositiveNumberOrZero([1, 2, 3])).to.be.false;
	expect(isPositiveNumberOrZero([1, 2, '3'])).to.be.false;
	expect(isPositiveNumberOrZero(arguments)).to.be.false;
	expect(isPositiveNumberOrZero(null)).to.be.false;
	expect(isPositiveNumberOrZero(undefined)).to.be.false;
	expect(isPositiveNumberOrZero(false)).to.be.false;
	expect(isPositiveNumberOrZero(new Object(true))).to.be.false;
	expect(isPositiveNumberOrZero('')).to.be.false;
	expect(isPositiveNumberOrZero('   ')).to.be.false;
	expect(isPositiveNumberOrZero('hello world')).to.be.false;
	expect(isPositiveNumberOrZero(new Object('hello world'))).to.be.false;
	expect(isPositiveNumberOrZero(new Object(42))).to.be.false;
	expect(isPositiveNumberOrZero('42')).to.be.false;
	expect(isPositiveNumberOrZero(-42)).to.be.false;
	expect(isPositiveNumberOrZero(-8)).to.be.false;
	expect(isPositiveNumberOrZero(-3.14)).to.be.false;
	expect(isPositiveNumberOrZero(9_007_199_254_740_991n)).to.be.false;
	expect(isPositiveNumberOrZero(new Object(9_007_199_254_740_991n))).to.be.false;
	expect(isPositiveNumberOrZero(Number.NaN)).to.be.false;
	expect(isPositiveNumberOrZero({})).to.be.false;
	expect(isPositiveNumberOrZero({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isPositiveNumberOrZero({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isPositiveNumberOrZero(globalThis)).to.be.false;
	expect(isPositiveNumberOrZero(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isPositiveNumberOrZero(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isPositiveNumberOrZero(/hello/)).to.be.false;
	expect(isPositiveNumberOrZero(new Date())).to.be.false;
	expect(isPositiveNumberOrZero(Date)).to.be.false;
	expect(isPositiveNumberOrZero(() => 0)).to.be.false;
	expect(isPositiveNumberOrZero(async () => 0)).to.be.false;
	expect(isPositiveNumberOrZero((async () => 0)())).to.be.false;
	expect(isPositiveNumberOrZero({ then: () => 0 })).to.be.false;
	expect(isPositiveNumberOrZero(function * () {
		yield 0;
	})).to.be.false;
	expect(isPositiveNumberOrZero((function * () {
		yield 0;
	})())).to.be.false;
	expect(isPositiveNumberOrZero(async function * () {
		yield 0;
	})).to.be.false;
	expect(isPositiveNumberOrZero((async function * () {
		yield 0;
	})())).to.be.false;
	expect(isPositiveNumberOrZero(new Error('error'))).to.be.false;
	expect(isPositiveNumberOrZero(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isPositiveNumberOrZero(Symbol(0))).to.be.false;
});
