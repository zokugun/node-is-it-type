import { expect, it } from 'vitest';
import { isEmptyArray } from '../src/index.js';

it('isEmptyArray(x)', function () {
	// true
	expect(isEmptyArray([])).to.be.true;

	// false
	expect(isEmptyArray([1, 2, 3])).to.be.false;
	expect(isEmptyArray([1, 2, '3'])).to.be.false;
	expect(isEmptyArray(arguments)).to.be.false;
	expect(isEmptyArray(null)).to.be.false;
	expect(isEmptyArray(undefined)).to.be.false;
	expect(isEmptyArray(false)).to.be.false;
	expect(isEmptyArray(new Object(true))).to.be.false;
	expect(isEmptyArray('')).to.be.false;
	expect(isEmptyArray('   ')).to.be.false;
	expect(isEmptyArray('hello world')).to.be.false;
	expect(isEmptyArray(new Object('hello world'))).to.be.false;
	expect(isEmptyArray(42)).to.be.false;
	expect(isEmptyArray(new Object(42))).to.be.false;
	expect(isEmptyArray('42')).to.be.false;
	expect(isEmptyArray(9_007_199_254_740_991n)).to.be.false;
	expect(isEmptyArray(new Object(9_007_199_254_740_991n))).to.be.false;
	expect(isEmptyArray(Infinity)).to.be.false;
	expect(isEmptyArray(Number.NaN)).to.be.false;
	expect(isEmptyArray({})).to.be.false;
	expect(isEmptyArray({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isEmptyArray({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isEmptyArray(globalThis)).to.be.false;
	expect(isEmptyArray(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isEmptyArray(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isEmptyArray(/hello/)).to.be.false;
	expect(isEmptyArray(new Date())).to.be.false;
	expect(isEmptyArray(Date)).to.be.false;
	expect(isEmptyArray(() => 0)).to.be.false;
	expect(isEmptyArray(async () => 0)).to.be.false;
	expect(isEmptyArray(function * () {
		yield 0;
	})).to.be.false;
	expect(isEmptyArray(new Error('error'))).to.be.false;
	expect(isEmptyArray(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isEmptyArray(Symbol(0))).to.be.false;
});
