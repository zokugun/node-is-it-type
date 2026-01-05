import { expect, it } from 'vitest';
import { isIterable } from '../src/index.js';

it('isIterable(x)', function () {
	// true
	expect(isIterable([])).to.be.true;
	expect(isIterable([1, 2, 3])).to.be.true;
	expect(isIterable([1, 2, '3'])).to.be.true;
	expect(isIterable(arguments)).to.be.true;
	expect(isIterable(new Object('hello world'))).to.be.true;
	expect(isIterable((function * () {
		yield 0;
	})())).to.be.true;
	expect(isIterable((async function * () {
		yield 0;
	})())).to.be.true;
	expect(isIterable([1, 2, 3][Symbol.iterator]())).to.be.true;
	expect(isIterable({ [Symbol.iterator](): number {
		return 0;
	} })).to.be.true;
	expect(isIterable(new Map()[Symbol.iterator]())).to.be.true;

	// false
	expect(isIterable(null)).to.be.false;
	expect(isIterable(undefined)).to.be.false;
	expect(isIterable(false)).to.be.false;
	expect(isIterable(new Object(true))).to.be.false;
	expect(isIterable('')).to.be.false;
	expect(isIterable('   ')).to.be.false;
	expect(isIterable('hello world')).to.be.false;
	expect(isIterable(42)).to.be.false;
	expect(isIterable(new Object(42))).to.be.false;
	expect(isIterable('42')).to.be.false;
	expect(isIterable(-42)).to.be.false;
	expect(isIterable(-8)).to.be.false;
	expect(isIterable(-3.14)).to.be.false;
	expect(isIterable(0)).to.be.false;
	expect(isIterable(3.14)).to.be.false;
	expect(isIterable(8)).to.be.false;
	expect(isIterable(9_007_199_254_740_991n)).to.be.false;
	expect(isIterable(new Object(9_007_199_254_740_991n))).to.be.false;
	expect(isIterable(Infinity)).to.be.false;
	expect(isIterable(Number.NaN)).to.be.false;
	expect(isIterable({})).to.be.false;
	expect(isIterable({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isIterable({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isIterable(globalThis)).to.be.false;
	expect(isIterable(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isIterable(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isIterable(/hello/)).to.be.false;
	expect(isIterable(new Date())).to.be.false;
	expect(isIterable(Date)).to.be.false;
	expect(isIterable(() => 0)).to.be.false;
	expect(isIterable(async () => 0)).to.be.false;
	expect(isIterable((async () => 0)())).to.be.false;
	expect(isIterable({ then: () => 0 })).to.be.false;
	expect(isIterable(function * () {
		yield 0;
	})).to.be.false;
	expect(isIterable(async function * () {
		yield 0;
	})).to.be.false;
	expect(isIterable(new Error('error'))).to.be.false;
	expect(isIterable(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isIterable(Symbol(0))).to.be.false;
});
