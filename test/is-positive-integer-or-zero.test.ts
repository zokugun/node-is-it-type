import { expect, it } from 'vitest';
import { isPositiveIntegerOrZero } from '../src/index.js';

it('isPositiveIntegerOrZero(x)', function () {
	// true
	expect(isPositiveIntegerOrZero(42)).to.be.true;
	expect(isPositiveIntegerOrZero(0)).to.be.true;
	expect(isPositiveIntegerOrZero(8)).to.be.true;

	// false
	expect(isPositiveIntegerOrZero([])).to.be.false;
	expect(isPositiveIntegerOrZero([1, 2, 3])).to.be.false;
	expect(isPositiveIntegerOrZero([1, 2, '3'])).to.be.false;
	expect(isPositiveIntegerOrZero(arguments)).to.be.false;
	expect(isPositiveIntegerOrZero(null)).to.be.false;
	expect(isPositiveIntegerOrZero(undefined)).to.be.false;
	expect(isPositiveIntegerOrZero(false)).to.be.false;
	expect(isPositiveIntegerOrZero(new Object(true))).to.be.false;
	expect(isPositiveIntegerOrZero('')).to.be.false;
	expect(isPositiveIntegerOrZero('   ')).to.be.false;
	expect(isPositiveIntegerOrZero('hello world')).to.be.false;
	expect(isPositiveIntegerOrZero(new Object('hello world'))).to.be.false;
	expect(isPositiveIntegerOrZero(new Object(42))).to.be.false;
	expect(isPositiveIntegerOrZero('42')).to.be.false;
	expect(isPositiveIntegerOrZero(-42)).to.be.false;
	expect(isPositiveIntegerOrZero(-8)).to.be.false;
	expect(isPositiveIntegerOrZero(-3.14)).to.be.false;
	expect(isPositiveIntegerOrZero(3.14)).to.be.false;
	expect(isPositiveIntegerOrZero(Infinity)).to.be.false;
	expect(isPositiveIntegerOrZero(Number.NaN)).to.be.false;
	expect(isPositiveIntegerOrZero(9_007_199_254_740_991n)).to.be.false;
	expect(isPositiveIntegerOrZero(new Object(9_007_199_254_740_991n))).to.be.false;
	expect(isPositiveIntegerOrZero({})).to.be.false;
	expect(isPositiveIntegerOrZero({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isPositiveIntegerOrZero({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isPositiveIntegerOrZero(globalThis)).to.be.false;
	expect(isPositiveIntegerOrZero(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isPositiveIntegerOrZero(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isPositiveIntegerOrZero(/hello/)).to.be.false;
	expect(isPositiveIntegerOrZero(new Date())).to.be.false;
	expect(isPositiveIntegerOrZero(Date)).to.be.false;
	expect(isPositiveIntegerOrZero(() => 0)).to.be.false;
	expect(isPositiveIntegerOrZero(async () => 0)).to.be.false;
	expect(isPositiveIntegerOrZero((async () => 0)())).to.be.false;
	expect(isPositiveIntegerOrZero({ then: () => 0 })).to.be.false;
	expect(isPositiveIntegerOrZero(function * () {
		yield 0;
	})).to.be.false;
	expect(isPositiveIntegerOrZero((function * () {
		yield 0;
	})())).to.be.false;
	expect(isPositiveIntegerOrZero(async function * () {
		yield 0;
	})).to.be.false;
	expect(isPositiveIntegerOrZero((async function * () {
		yield 0;
	})())).to.be.false;
	expect(isPositiveIntegerOrZero(new Error('error'))).to.be.false;
	expect(isPositiveIntegerOrZero(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isPositiveIntegerOrZero(Symbol(0))).to.be.false;
});
