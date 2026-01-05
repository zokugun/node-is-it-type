import { expect, it } from 'vitest';
import { isSyncIterable } from '../src/index.js';

it('isSyncIterable(x)', function () {
	// true
	expect(isSyncIterable([])).to.be.true;
	expect(isSyncIterable([1, 2, 3])).to.be.true;
	expect(isSyncIterable([1, 2, '3'])).to.be.true;
	expect(isSyncIterable(arguments)).to.be.true;
	expect(isSyncIterable(new Object('hello world'))).to.be.true;
	expect(isSyncIterable((function * () {
		yield 0;
	})())).to.be.true;
	expect(isSyncIterable([1, 2, 3][Symbol.iterator]())).to.be.true;
	expect(isSyncIterable({ [Symbol.iterator](): number {
		return 0;
	} })).to.be.true;
	expect(isSyncIterable(new Map()[Symbol.iterator]())).to.be.true;

	// false
	expect(isSyncIterable(null)).to.be.false;
	expect(isSyncIterable(undefined)).to.be.false;
	expect(isSyncIterable(false)).to.be.false;
	expect(isSyncIterable(new Object(true))).to.be.false;
	expect(isSyncIterable('')).to.be.false;
	expect(isSyncIterable('   ')).to.be.false;
	expect(isSyncIterable('hello world')).to.be.false;
	expect(isSyncIterable(42)).to.be.false;
	expect(isSyncIterable(new Object(42))).to.be.false;
	expect(isSyncIterable('42')).to.be.false;
	expect(isSyncIterable(-42)).to.be.false;
	expect(isSyncIterable(-8)).to.be.false;
	expect(isSyncIterable(-3.14)).to.be.false;
	expect(isSyncIterable(0)).to.be.false;
	expect(isSyncIterable(3.14)).to.be.false;
	expect(isSyncIterable(8)).to.be.false;
	expect(isSyncIterable(9_007_199_254_740_991n)).to.be.false;
	expect(isSyncIterable(new Object(9_007_199_254_740_991n))).to.be.false;
	expect(isSyncIterable(Infinity)).to.be.false;
	expect(isSyncIterable(Number.NaN)).to.be.false;
	expect(isSyncIterable({})).to.be.false;
	expect(isSyncIterable({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isSyncIterable({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isSyncIterable(globalThis)).to.be.false;
	expect(isSyncIterable(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isSyncIterable(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isSyncIterable(/hello/)).to.be.false;
	expect(isSyncIterable(new Date())).to.be.false;
	expect(isSyncIterable(Date)).to.be.false;
	expect(isSyncIterable(() => 0)).to.be.false;
	expect(isSyncIterable(async () => 0)).to.be.false;
	expect(isSyncIterable((async () => 0)())).to.be.false;
	expect(isSyncIterable({ then: () => 0 })).to.be.false;
	expect(isSyncIterable(function * () {
		yield 0;
	})).to.be.false;
	expect(isSyncIterable(async function * () {
		yield 0;
	})).to.be.false;
	expect(isSyncIterable((async function * () {
		yield 0;
	})())).to.be.false;
	expect(isSyncIterable(new Error('error'))).to.be.false;
	expect(isSyncIterable(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isSyncIterable(Symbol(0))).to.be.false;
});
