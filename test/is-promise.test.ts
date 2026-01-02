import { expect, it } from 'vitest';
import { isPromise } from '../src/index.js';

it('isPromise(x)', function () {
	// true
	expect(isPromise(new Promise((resolve) => {
		resolve(0);
	}))).to.be.true;

	// false
	expect(isPromise([])).to.be.false;
	expect(isPromise([1, 2, 3])).to.be.false;
	expect(isPromise([1, 2, '3'])).to.be.false;
	expect(isPromise(arguments)).to.be.false;
	expect(isPromise(null)).to.be.false;
	expect(isPromise(undefined)).to.be.false;
	expect(isPromise(false)).to.be.false;
	expect(isPromise(new Object(true))).to.be.false;
	expect(isPromise('')).to.be.false;
	expect(isPromise('   ')).to.be.false;
	expect(isPromise('hello world')).to.be.false;
	expect(isPromise(new Object('hello world'))).to.be.false;
	expect(isPromise(42)).to.be.false;
	expect(isPromise(new Object(42))).to.be.false;
	expect(isPromise('42')).to.be.false;
	expect(isPromise(9_007_199_254_740_991n)).to.be.false;
	expect(isPromise(new Object(9_007_199_254_740_991n))).to.be.false;
	expect(isPromise(Infinity)).to.be.false;
	expect(isPromise(Number.NaN)).to.be.false;
	expect(isPromise({})).to.be.false;
	expect(isPromise({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isPromise({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isPromise(globalThis)).to.be.false;
	expect(isPromise(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isPromise(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isPromise(/hello/)).to.be.false;
	expect(isPromise(new Date())).to.be.false;
	expect(isPromise(Date)).to.be.false;
	expect(isPromise(() => 0)).to.be.false;
	expect(isPromise(async () => 0)).to.be.false;
	expect(isPromise(function * () {
		yield 0;
	})).to.be.false;
	expect(isPromise(new Error('error'))).to.be.false;
	expect(isPromise(Symbol(0))).to.be.false;
});
