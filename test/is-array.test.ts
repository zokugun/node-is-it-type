import { expect, it } from 'vitest';
import { isArray, isNumber } from '../src/index.js';

it('isArray(x)', function () {
	// true
	expect(isArray([])).to.be.true;
	expect(isArray([1, 2, 3])).to.be.true;
	expect(isArray([1, 2, '3'])).to.be.true;

	// false
	expect(isArray(arguments)).to.be.false;
	expect(isArray(null)).to.be.false;
	expect(isArray(undefined)).to.be.false;
	expect(isArray(false)).to.be.false;
	expect(isArray(new Object(true))).to.be.false;
	expect(isArray('')).to.be.false;
	expect(isArray('   ')).to.be.false;
	expect(isArray('hello world')).to.be.false;
	expect(isArray(new Object('hello world'))).to.be.false;
	expect(isArray(42)).to.be.false;
	expect(isArray(new Object(42))).to.be.false;
	expect(isArray('42')).to.be.false;
	expect(isArray(9_007_199_254_740_991n)).to.be.false;
	expect(isArray(BigInt(9_007_199_254_740_991n))).to.be.false;
	expect(isArray({})).to.be.false;
	expect(isArray({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isArray({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isArray(globalThis)).to.be.false;
	expect(isArray(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isArray(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isArray(/hello/)).to.be.false;
	expect(isArray(new Date())).to.be.false;
	expect(isArray(Date)).to.be.false;
	expect(isArray(() => 0)).to.be.false;
	expect(isArray(async () => 0)).to.be.false;
	expect(isArray(function * () {
		yield 0;
	})).to.be.false;
	expect(isArray(new Error('error'))).to.be.false;
	expect(isArray(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isArray(Symbol(0))).to.be.false;
});

it('isArray(x, test)', function () {
	// true
	expect(isArray([], isNumber)).to.be.true;
	expect(isArray([1, 2, 3], isNumber)).to.be.true;

	// false
	expect(isArray([1, 2, '3'], isNumber)).to.be.false;
	expect(isArray(arguments, isNumber)).to.be.false;
	expect(isArray(null, isNumber)).to.be.false;
	expect(isArray(undefined, isNumber)).to.be.false;
	expect(isArray(false, isNumber)).to.be.false;
	expect(isArray(new Object(true), isNumber)).to.be.false;
	expect(isArray('', isNumber)).to.be.false;
	expect(isArray('   ', isNumber)).to.be.false;
	expect(isArray('hello world', isNumber)).to.be.false;
	expect(isArray(new Object('hello world'), isNumber)).to.be.false;
	expect(isArray(42, isNumber)).to.be.false;
	expect(isArray(new Object(42), isNumber)).to.be.false;
	expect(isArray('42', isNumber)).to.be.false;
	expect(isArray(9_007_199_254_740_991n, isNumber)).to.be.false;
	expect(isArray(BigInt(9_007_199_254_740_991n), isNumber)).to.be.false;
	expect(isArray({}, isNumber)).to.be.false;
	expect(isArray({
		a: 'hello',
		b: 'world',
		c: '!',
	}, isNumber)).to.be.false;
	expect(isArray({
		a: 'hello',
		b: 'world',
		c: 1,
	}, isNumber)).to.be.false;
	expect(isArray(globalThis, isNumber)).to.be.false;
	expect(isArray(class {
		hello() {
			return 'hello world';
		}
	}, isNumber)).to.be.false;
	expect(isArray(/hello/, isNumber)).to.be.false;
	expect(isArray(new Date(), isNumber)).to.be.false;
	expect(isArray(Date, isNumber)).to.be.false;
	expect(isArray(() => 0, isNumber)).to.be.false;
	expect(isArray(async () => 0, isNumber)).to.be.false;
	expect(isArray(new Error('error'), isNumber)).to.be.false;
	expect(isArray(new Promise((resolve) => {
		resolve(0);
	}), isNumber)).to.be.false;
	expect(isArray(Symbol(0), isNumber)).to.be.false;
});
