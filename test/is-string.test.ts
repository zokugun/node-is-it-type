import { expect, it } from 'vitest';
import { isString } from '../src/index.js';

it('isString(x)', function () {
	// true
	expect(isString('')).to.be.true;
	expect(isString('   ')).to.be.true;
	expect(isString('hello world')).to.be.true;
	expect(isString('42')).to.be.true;

	// false
	expect(isString([])).to.be.false;
	expect(isString([1, 2, 3])).to.be.false;
	expect(isString([1, 2, '3'])).to.be.false;
	expect(isString(arguments)).to.be.false;
	expect(isString(null)).to.be.false;
	expect(isString(undefined)).to.be.false;
	expect(isString(false)).to.be.false;
	expect(isString(new Object(true))).to.be.false;
	expect(isString(new Object('hello world'))).to.be.false;
	expect(isString(42)).to.be.false;
	expect(isString(new Object(42))).to.be.false;
	expect(isString(-42)).to.be.false;
	expect(isString(-8)).to.be.false;
	expect(isString(-3.14)).to.be.false;
	expect(isString(0)).to.be.false;
	expect(isString(3.14)).to.be.false;
	expect(isString(8)).to.be.false;
	expect(isString(9_007_199_254_740_991n)).to.be.false;
	expect(isString(new Object(9_007_199_254_740_991n))).to.be.false;
	expect(isString(Infinity)).to.be.false;
	expect(isString(Number.NaN)).to.be.false;
	expect(isString({})).to.be.false;
	expect(isString({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isString({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isString(globalThis)).to.be.false;
	expect(isString(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isString(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isString(/hello/)).to.be.false;
	expect(isString(new Date())).to.be.false;
	expect(isString(Date)).to.be.false;
	expect(isString(() => 0)).to.be.false;
	expect(isString(async () => 0)).to.be.false;
	expect(isString(function * () {
		yield 0;
	})).to.be.false;
	expect(isString(new Error('error'))).to.be.false;
	expect(isString(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isString(Symbol(0))).to.be.false;
});
