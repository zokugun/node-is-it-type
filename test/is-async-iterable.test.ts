import { expect, it } from 'vitest';
import { isAsyncIterable } from '../src/index.js';

it('isAsyncIterable(x)', function () {
	// true
	expect(isAsyncIterable((async function * () {
		yield 0;
	})())).to.be.true;

	// false
	expect(isAsyncIterable(null)).to.be.false;
	expect(isAsyncIterable([])).to.be.false;
	expect(isAsyncIterable([1, 2, 3])).to.be.false;
	expect(isAsyncIterable([1, 2, '3'])).to.be.false;
	expect(isAsyncIterable(arguments)).to.be.false;
	expect(isAsyncIterable(undefined)).to.be.false;
	expect(isAsyncIterable(false)).to.be.false;
	expect(isAsyncIterable(new Object(true))).to.be.false;
	expect(isAsyncIterable('')).to.be.false;
	expect(isAsyncIterable('   ')).to.be.false;
	expect(isAsyncIterable('hello world')).to.be.false;
	expect(isAsyncIterable(new Object('hello world'))).to.be.false;
	expect(isAsyncIterable(42)).to.be.false;
	expect(isAsyncIterable(new Object(42))).to.be.false;
	expect(isAsyncIterable('42')).to.be.false;
	expect(isAsyncIterable(-42)).to.be.false;
	expect(isAsyncIterable(-8)).to.be.false;
	expect(isAsyncIterable(-3.14)).to.be.false;
	expect(isAsyncIterable(0)).to.be.false;
	expect(isAsyncIterable(3.14)).to.be.false;
	expect(isAsyncIterable(8)).to.be.false;
	expect(isAsyncIterable(9_007_199_254_740_991n)).to.be.false;
	expect(isAsyncIterable(new Object(9_007_199_254_740_991n))).to.be.false;
	expect(isAsyncIterable(Infinity)).to.be.false;
	expect(isAsyncIterable(Number.NaN)).to.be.false;
	expect(isAsyncIterable({})).to.be.false;
	expect(isAsyncIterable({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isAsyncIterable({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isAsyncIterable(globalThis)).to.be.false;
	expect(isAsyncIterable(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isAsyncIterable(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isAsyncIterable(/hello/)).to.be.false;
	expect(isAsyncIterable(new Date())).to.be.false;
	expect(isAsyncIterable(Date)).to.be.false;
	expect(isAsyncIterable(() => 0)).to.be.false;
	expect(isAsyncIterable(async () => 0)).to.be.false;
	expect(isAsyncIterable((async () => 0)())).to.be.false;
	expect(isAsyncIterable({ then: () => 0 })).to.be.false;
	expect(isAsyncIterable(function * () {
		yield 0;
	})).to.be.false;
	expect(isAsyncIterable((function * () {
		yield 0;
	})())).to.be.false;
	expect(isAsyncIterable(async function * () {
		yield 0;
	})).to.be.false;
	expect(isAsyncIterable(new Error('error'))).to.be.false;
	expect(isAsyncIterable(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isAsyncIterable(Symbol(0))).to.be.false;
});
