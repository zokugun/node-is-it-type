import { expect, it } from 'vitest';
import { isNonBlankString } from '../src/index.js';

it('isNonBlankString(x)', function () {
	// true
	expect(isNonBlankString('42')).to.be.true;
	expect(isNonBlankString('hello world')).to.be.true;

	// false
	expect(isNonBlankString([])).to.be.false;
	expect(isNonBlankString([1, 2, 3])).to.be.false;
	expect(isNonBlankString([1, 2, '3'])).to.be.false;
	expect(isNonBlankString(arguments)).to.be.false;
	expect(isNonBlankString(null)).to.be.false;
	expect(isNonBlankString(undefined)).to.be.false;
	expect(isNonBlankString(false)).to.be.false;
	expect(isNonBlankString(new Object(true))).to.be.false;
	expect(isNonBlankString('')).to.be.false;
	expect(isNonBlankString('   ')).to.be.false;
	expect(isNonBlankString(42)).to.be.false;
	expect(isNonBlankString(new Object(42))).to.be.false;
	expect(isNonBlankString(-42)).to.be.false;
	expect(isNonBlankString(-8)).to.be.false;
	expect(isNonBlankString(-3.14)).to.be.false;
	expect(isNonBlankString(0)).to.be.false;
	expect(isNonBlankString(3.14)).to.be.false;
	expect(isNonBlankString(8)).to.be.false;
	expect(isNonBlankString(new Object('hello world'))).to.be.false;
	expect(isNonBlankString(9_007_199_254_740_991n)).to.be.false;
	expect(isNonBlankString(new Object(9_007_199_254_740_991n))).to.be.false;
	expect(isNonBlankString(Infinity)).to.be.false;
	expect(isNonBlankString(Number.NaN)).to.be.false;
	expect(isNonBlankString({})).to.be.false;
	expect(isNonBlankString({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isNonBlankString({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isNonBlankString(globalThis)).to.be.false;
	expect(isNonBlankString(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isNonBlankString(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isNonBlankString(/hello/)).to.be.false;
	expect(isNonBlankString(new Date())).to.be.false;
	expect(isNonBlankString(Date)).to.be.false;
	expect(isNonBlankString(() => 0)).to.be.false;
	expect(isNonBlankString(async () => 0)).to.be.false;
	expect(isNonBlankString(function * () {
		yield 0;
	})).to.be.false;
	expect(isNonBlankString(new Error('error'))).to.be.false;
	expect(isNonBlankString(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isNonBlankString(Symbol(0))).to.be.false;
});
