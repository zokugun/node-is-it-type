import { expect, it } from 'vitest';
import { isInteger } from '../src/index.js';

it('isInteger(x)', function () {
	// true
	expect(isInteger(42)).to.be.true;
	expect(isInteger(-42)).to.be.true;
	expect(isInteger(-8)).to.be.true;
	expect(isInteger(0)).to.be.true;
	expect(isInteger(8)).to.be.true;

	// false
	expect(isInteger([])).to.be.false;
	expect(isInteger([1, 2, 3])).to.be.false;
	expect(isInteger([1, 2, '3'])).to.be.false;
	expect(isInteger(arguments)).to.be.false;
	expect(isInteger(null)).to.be.false;
	expect(isInteger(undefined)).to.be.false;
	expect(isInteger(false)).to.be.false;
	expect(isInteger(new Object(true))).to.be.false;
	expect(isInteger('')).to.be.false;
	expect(isInteger('   ')).to.be.false;
	expect(isInteger('hello world')).to.be.false;
	expect(isInteger(new Object('hello world'))).to.be.false;
	expect(isInteger(new Object(42))).to.be.false;
	expect(isInteger('42')).to.be.false;
	expect(isInteger(-3.14)).to.be.false;
	expect(isInteger(3.14)).to.be.false;
	expect(isInteger(Infinity)).to.be.false;
	expect(isInteger(Number.NaN)).to.be.false;
	expect(isInteger(9_007_199_254_740_991n)).to.be.false;
	expect(isInteger(new Object(9_007_199_254_740_991n))).to.be.false;
	expect(isInteger({})).to.be.false;
	expect(isInteger({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isInteger({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isInteger(globalThis)).to.be.false;
	expect(isInteger(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isInteger(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isInteger(/hello/)).to.be.false;
	expect(isInteger(new Date())).to.be.false;
	expect(isInteger(Date)).to.be.false;
	expect(isInteger(() => 0)).to.be.false;
	expect(isInteger(async () => 0)).to.be.false;
	expect(isInteger(function * () {
		yield 0;
	})).to.be.false;
	expect(isInteger(new Error('error'))).to.be.false;
	expect(isInteger(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isInteger(Symbol(0))).to.be.false;
});
