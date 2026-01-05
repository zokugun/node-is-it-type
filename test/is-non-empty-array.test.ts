import { expect, it } from 'vitest';
import { isNonEmptyArray } from '../src/index.js';

it('isNonEmptyArray(x)', function () {
	// true
	expect(isNonEmptyArray([1, 2, 3])).to.be.true;
	expect(isNonEmptyArray([1, 2, '3'])).to.be.true;

	// false
	expect(isNonEmptyArray([])).to.be.false;
	expect(isNonEmptyArray(arguments)).to.be.false;
	expect(isNonEmptyArray(null)).to.be.false;
	expect(isNonEmptyArray(undefined)).to.be.false;
	expect(isNonEmptyArray(false)).to.be.false;
	expect(isNonEmptyArray(new Object(true))).to.be.false;
	expect(isNonEmptyArray('')).to.be.false;
	expect(isNonEmptyArray('   ')).to.be.false;
	expect(isNonEmptyArray('hello world')).to.be.false;
	expect(isNonEmptyArray(new Object('hello world'))).to.be.false;
	expect(isNonEmptyArray(42)).to.be.false;
	expect(isNonEmptyArray(new Object(42))).to.be.false;
	expect(isNonEmptyArray('42')).to.be.false;
	expect(isNonEmptyArray(-42)).to.be.false;
	expect(isNonEmptyArray(-8)).to.be.false;
	expect(isNonEmptyArray(-3.14)).to.be.false;
	expect(isNonEmptyArray(0)).to.be.false;
	expect(isNonEmptyArray(3.14)).to.be.false;
	expect(isNonEmptyArray(8)).to.be.false;
	expect(isNonEmptyArray(9_007_199_254_740_991n)).to.be.false;
	expect(isNonEmptyArray(new Object(9_007_199_254_740_991n))).to.be.false;
	expect(isNonEmptyArray(Infinity)).to.be.false;
	expect(isNonEmptyArray(Number.NaN)).to.be.false;
	expect(isNonEmptyArray({})).to.be.false;
	expect(isNonEmptyArray({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isNonEmptyArray({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isNonEmptyArray(globalThis)).to.be.false;
	expect(isNonEmptyArray(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isNonEmptyArray(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isNonEmptyArray(/hello/)).to.be.false;
	expect(isNonEmptyArray(new Date())).to.be.false;
	expect(isNonEmptyArray(Date)).to.be.false;
	expect(isNonEmptyArray(() => 0)).to.be.false;
	expect(isNonEmptyArray(async () => 0)).to.be.false;
	expect(isNonEmptyArray((async () => 0)())).to.be.false;
	expect(isNonEmptyArray({ then: () => 0 })).to.be.false;
	expect(isNonEmptyArray(function * () {
		yield 0;
	})).to.be.false;
	expect(isNonEmptyArray((function * () {
		yield 0;
	})())).to.be.false;
	expect(isNonEmptyArray(async function * () {
		yield 0;
	})).to.be.false;
	expect(isNonEmptyArray((async function * () {
		yield 0;
	})())).to.be.false;
	expect(isNonEmptyArray(new Error('error'))).to.be.false;
	expect(isNonEmptyArray(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isNonEmptyArray(Symbol(0))).to.be.false;
});
