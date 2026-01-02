import { expect, it } from 'vitest';
import { isObject } from '../src/index.js';

it('isObject(x)', function () {
	// true
	expect(isObject(arguments)).to.be.true;
	expect(isObject(new Object(true))).to.be.true;
	expect(isObject(new Object('hello world'))).to.be.true;
	expect(isObject(new Object(42))).to.be.true;
	expect(isObject(new Object(9_007_199_254_740_991n))).to.be.true;
	expect(isObject({})).to.be.true;
	expect(isObject({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.true;
	expect(isObject({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.true;
	expect(isObject(globalThis)).to.be.true;
	expect(isObject(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.true;
	expect(isObject(/hello/)).to.be.true;
	expect(isObject(new Date())).to.be.true;
	expect(isObject(new Error('error'))).to.be.true;
	expect(isObject(new Promise((resolve) => {
		resolve(0);
	}))).to.be.true;

	// false
	expect(isObject([])).to.be.false;
	expect(isObject([1, 2, 3])).to.be.false;
	expect(isObject([1, 2, '3'])).to.be.false;
	expect(isObject(null)).to.be.false;
	expect(isObject(undefined)).to.be.false;
	expect(isObject(false)).to.be.false;
	expect(isObject('')).to.be.false;
	expect(isObject('   ')).to.be.false;
	expect(isObject('hello world')).to.be.false;
	expect(isObject(42)).to.be.false;
	expect(isObject('42')).to.be.false;
	expect(isObject(9_007_199_254_740_991n)).to.be.false;
	expect(isObject(Infinity)).to.be.false;
	expect(isObject(Number.NaN)).to.be.false;
	expect(isObject(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isObject(Date)).to.be.false;
	expect(isObject(() => 0)).to.be.false;
	expect(isObject(async () => 0)).to.be.false;
	expect(isObject(function * () {
		yield 0;
	})).to.be.false;
	expect(isObject(Symbol(0))).to.be.false;
});
