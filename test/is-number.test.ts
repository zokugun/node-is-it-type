import { expect, it } from 'vitest';
import { isNumber } from '../src/index.js';

it('isNumber(x)', function () {
	// true
	expect(isNumber(42)).to.be.true;
	expect(isNumber(Infinity)).to.be.true;
	expect(isNumber(Number.NaN)).to.be.true;
	expect(isNumber(-42)).to.be.true;
	expect(isNumber(-8)).to.be.true;
	expect(isNumber(-3.14)).to.be.true;
	expect(isNumber(0)).to.be.true;
	expect(isNumber(3.14)).to.be.true;
	expect(isNumber(8)).to.be.true;

	// false
	expect(isNumber([])).to.be.false;
	expect(isNumber([1, 2, 3])).to.be.false;
	expect(isNumber([1, 2, '3'])).to.be.false;
	expect(isNumber(arguments)).to.be.false;
	expect(isNumber(null)).to.be.false;
	expect(isNumber(undefined)).to.be.false;
	expect(isNumber(false)).to.be.false;
	expect(isNumber(new Object(true))).to.be.false;
	expect(isNumber('')).to.be.false;
	expect(isNumber('   ')).to.be.false;
	expect(isNumber('hello world')).to.be.false;
	expect(isNumber(new Object('hello world'))).to.be.false;
	expect(isNumber(new Object(42))).to.be.false;
	expect(isNumber('42')).to.be.false;
	expect(isNumber(9_007_199_254_740_991n)).to.be.false;
	expect(isNumber(new Object(9_007_199_254_740_991n))).to.be.false;
	expect(isNumber({})).to.be.false;
	expect(isNumber({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isNumber({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isNumber(globalThis)).to.be.false;
	expect(isNumber(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isNumber(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isNumber(/hello/)).to.be.false;
	expect(isNumber(new Date())).to.be.false;
	expect(isNumber(Date)).to.be.false;
	expect(isNumber(() => 0)).to.be.false;
	expect(isNumber(async () => 0)).to.be.false;
	expect(isNumber(function * () {
		yield 0;
	})).to.be.false;
	expect(isNumber(new Error('error'))).to.be.false;
	expect(isNumber(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isNumber(Symbol(0))).to.be.false;
});
