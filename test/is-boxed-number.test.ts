import { expect, it } from 'vitest';
import { isBoxedNumber } from '../src/index.js';

it('isBoxedNumber(x)', function () {
	// true
	expect(isBoxedNumber(new Object(42))).to.be.true;

	// false
	expect(isBoxedNumber([])).to.be.false;
	expect(isBoxedNumber([1, 2, 3])).to.be.false;
	expect(isBoxedNumber([1, 2, '3'])).to.be.false;
	expect(isBoxedNumber(arguments)).to.be.false;
	expect(isBoxedNumber(null)).to.be.false;
	expect(isBoxedNumber(undefined)).to.be.false;
	expect(isBoxedNumber(false)).to.be.false;
	expect(isBoxedNumber(new Object(true))).to.be.false;
	expect(isBoxedNumber('')).to.be.false;
	expect(isBoxedNumber('   ')).to.be.false;
	expect(isBoxedNumber('hello world')).to.be.false;
	expect(isBoxedNumber(new Object('hello world'))).to.be.false;
	expect(isBoxedNumber(42)).to.be.false;
	expect(isBoxedNumber('42')).to.be.false;
	expect(isBoxedNumber(-42)).to.be.false;
	expect(isBoxedNumber(-8)).to.be.false;
	expect(isBoxedNumber(-3.14)).to.be.false;
	expect(isBoxedNumber(0)).to.be.false;
	expect(isBoxedNumber(3.14)).to.be.false;
	expect(isBoxedNumber(8)).to.be.false;
	expect(isBoxedNumber(9_007_199_254_740_991n)).to.be.false;
	expect(isBoxedNumber(new Object(9_007_199_254_740_991n))).to.be.false;
	expect(isBoxedNumber(Infinity)).to.be.false;
	expect(isBoxedNumber(Number.NaN)).to.be.false;
	expect(isBoxedNumber({})).to.be.false;
	expect(isBoxedNumber({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isBoxedNumber({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isBoxedNumber(globalThis)).to.be.false;
	expect(isBoxedNumber(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isBoxedNumber(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isBoxedNumber(/hello/)).to.be.false;
	expect(isBoxedNumber(new Date())).to.be.false;
	expect(isBoxedNumber(Date)).to.be.false;
	expect(isBoxedNumber(() => 0)).to.be.false;
	expect(isBoxedNumber(async () => 0)).to.be.false;
	expect(isBoxedNumber(function * () {
		yield 0;
	})).to.be.false;
	expect(isBoxedNumber(new Error('error'))).to.be.false;
	expect(isBoxedNumber(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isBoxedNumber(Symbol(0))).to.be.false;
});
