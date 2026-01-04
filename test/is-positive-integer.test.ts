import { expect, it } from 'vitest';
import { isPositiveInteger } from '../src/index.js';

it('isPositiveInteger(x)', function () {
	// true
	expect(isPositiveInteger(42)).to.be.true;
	expect(isPositiveInteger(8)).to.be.true;

	// false
	expect(isPositiveInteger([])).to.be.false;
	expect(isPositiveInteger([1, 2, 3])).to.be.false;
	expect(isPositiveInteger([1, 2, '3'])).to.be.false;
	expect(isPositiveInteger(arguments)).to.be.false;
	expect(isPositiveInteger(null)).to.be.false;
	expect(isPositiveInteger(undefined)).to.be.false;
	expect(isPositiveInteger(false)).to.be.false;
	expect(isPositiveInteger(new Object(true))).to.be.false;
	expect(isPositiveInteger('')).to.be.false;
	expect(isPositiveInteger('   ')).to.be.false;
	expect(isPositiveInteger('hello world')).to.be.false;
	expect(isPositiveInteger(new Object('hello world'))).to.be.false;
	expect(isPositiveInteger(new Object(42))).to.be.false;
	expect(isPositiveInteger('42')).to.be.false;
	expect(isPositiveInteger(-42)).to.be.false;
	expect(isPositiveInteger(-8)).to.be.false;
	expect(isPositiveInteger(-3.14)).to.be.false;
	expect(isPositiveInteger(0)).to.be.false;
	expect(isPositiveInteger(3.14)).to.be.false;
	expect(isPositiveInteger(9_007_199_254_740_991n)).to.be.false;
	expect(isPositiveInteger(new Object(9_007_199_254_740_991n))).to.be.false;
	expect(isPositiveInteger(Infinity)).to.be.false;
	expect(isPositiveInteger(Number.NaN)).to.be.false;
	expect(isPositiveInteger({})).to.be.false;
	expect(isPositiveInteger({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isPositiveInteger({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isPositiveInteger(globalThis)).to.be.false;
	expect(isPositiveInteger(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isPositiveInteger(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isPositiveInteger(/hello/)).to.be.false;
	expect(isPositiveInteger(new Date())).to.be.false;
	expect(isPositiveInteger(Date)).to.be.false;
	expect(isPositiveInteger(() => 0)).to.be.false;
	expect(isPositiveInteger(async () => 0)).to.be.false;
	expect(isPositiveInteger(function * () {
		yield 0;
	})).to.be.false;
	expect(isPositiveInteger(new Error('error'))).to.be.false;
	expect(isPositiveInteger(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isPositiveInteger(Symbol(0))).to.be.false;
});
