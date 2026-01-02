import { expect, it } from 'vitest';
import { isNonEmptyString } from '../src/index.js';

it('isNonEmptyString(x)', function () {
	// true
	expect(isNonEmptyString('   ')).to.be.true;
	expect(isNonEmptyString('hello world')).to.be.true;
	expect(isNonEmptyString('42')).to.be.true;

	// false
	expect(isNonEmptyString([])).to.be.false;
	expect(isNonEmptyString([1, 2, 3])).to.be.false;
	expect(isNonEmptyString([1, 2, '3'])).to.be.false;
	expect(isNonEmptyString(arguments)).to.be.false;
	expect(isNonEmptyString(null)).to.be.false;
	expect(isNonEmptyString(undefined)).to.be.false;
	expect(isNonEmptyString(false)).to.be.false;
	expect(isNonEmptyString(new Object(true))).to.be.false;
	expect(isNonEmptyString('')).to.be.false;
	expect(isNonEmptyString(new Object('hello world'))).to.be.false;
	expect(isNonEmptyString(42)).to.be.false;
	expect(isNonEmptyString(new Object(42))).to.be.false;
	expect(isNonEmptyString(9_007_199_254_740_991n)).to.be.false;
	expect(isNonEmptyString(new Object(9_007_199_254_740_991n))).to.be.false;
	expect(isNonEmptyString(Infinity)).to.be.false;
	expect(isNonEmptyString(Number.NaN)).to.be.false;
	expect(isNonEmptyString({})).to.be.false;
	expect(isNonEmptyString({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isNonEmptyString({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isNonEmptyString(globalThis)).to.be.false;
	expect(isNonEmptyString(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isNonEmptyString(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isNonEmptyString(/hello/)).to.be.false;
	expect(isNonEmptyString(new Date())).to.be.false;
	expect(isNonEmptyString(Date)).to.be.false;
	expect(isNonEmptyString(() => 0)).to.be.false;
	expect(isNonEmptyString(async () => 0)).to.be.false;
	expect(isNonEmptyString(function * () {
		yield 0;
	})).to.be.false;
	expect(isNonEmptyString(new Error('error'))).to.be.false;
	expect(isNonEmptyString(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isNonEmptyString(Symbol(0))).to.be.false;
});
