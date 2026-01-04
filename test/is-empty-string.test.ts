import { expect, it } from 'vitest';
import { isEmptyString } from '../src/index.js';

it('isEmptyString(x)', function () {
	// true
	expect(isEmptyString('')).to.be.true;

	// false
	expect(isEmptyString([])).to.be.false;
	expect(isEmptyString([1, 2, 3])).to.be.false;
	expect(isEmptyString([1, 2, '3'])).to.be.false;
	expect(isEmptyString(arguments)).to.be.false;
	expect(isEmptyString(null)).to.be.false;
	expect(isEmptyString(undefined)).to.be.false;
	expect(isEmptyString(false)).to.be.false;
	expect(isEmptyString(new Object(true))).to.be.false;
	expect(isEmptyString('   ')).to.be.false;
	expect(isEmptyString('hello world')).to.be.false;
	expect(isEmptyString(new Object('hello world'))).to.be.false;
	expect(isEmptyString(42)).to.be.false;
	expect(isEmptyString(new Object(42))).to.be.false;
	expect(isEmptyString('42')).to.be.false;
	expect(isEmptyString(-42)).to.be.false;
	expect(isEmptyString(-8)).to.be.false;
	expect(isEmptyString(-3.14)).to.be.false;
	expect(isEmptyString(0)).to.be.false;
	expect(isEmptyString(3.14)).to.be.false;
	expect(isEmptyString(8)).to.be.false;
	expect(isEmptyString(9_007_199_254_740_991n)).to.be.false;
	expect(isEmptyString(new Object(9_007_199_254_740_991n))).to.be.false;
	expect(isEmptyString(Infinity)).to.be.false;
	expect(isEmptyString(Number.NaN)).to.be.false;
	expect(isEmptyString({})).to.be.false;
	expect(isEmptyString({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isEmptyString({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isEmptyString(globalThis)).to.be.false;
	expect(isEmptyString(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isEmptyString(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isEmptyString(/hello/)).to.be.false;
	expect(isEmptyString(new Date())).to.be.false;
	expect(isEmptyString(Date)).to.be.false;
	expect(isEmptyString(() => 0)).to.be.false;
	expect(isEmptyString(async () => 0)).to.be.false;
	expect(isEmptyString(function * () {
		yield 0;
	})).to.be.false;
	expect(isEmptyString(new Error('error'))).to.be.false;
	expect(isEmptyString(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isEmptyString(Symbol(0))).to.be.false;
});
