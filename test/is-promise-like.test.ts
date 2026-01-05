import { expect, it } from 'vitest';
import { isPromiseLike } from '../src/index.js';

it('isPromiseLike(x)', function () {
	// true
	expect(isPromiseLike((async () => 0)())).to.be.true;
	expect(isPromiseLike({ then: () => 0 })).to.be.true;
	expect(isPromiseLike(new Promise((resolve) => {
		resolve(0);
	}))).to.be.true;

	// false
	expect(isPromiseLike([])).to.be.false;
	expect(isPromiseLike([1, 2, 3])).to.be.false;
	expect(isPromiseLike([1, 2, '3'])).to.be.false;
	expect(isPromiseLike(arguments)).to.be.false;
	expect(isPromiseLike(null)).to.be.false;
	expect(isPromiseLike(undefined)).to.be.false;
	expect(isPromiseLike(false)).to.be.false;
	expect(isPromiseLike(new Object(true))).to.be.false;
	expect(isPromiseLike('')).to.be.false;
	expect(isPromiseLike('   ')).to.be.false;
	expect(isPromiseLike('hello world')).to.be.false;
	expect(isPromiseLike(new Object('hello world'))).to.be.false;
	expect(isPromiseLike(42)).to.be.false;
	expect(isPromiseLike(new Object(42))).to.be.false;
	expect(isPromiseLike('42')).to.be.false;
	expect(isPromiseLike(-42)).to.be.false;
	expect(isPromiseLike(-8)).to.be.false;
	expect(isPromiseLike(-3.14)).to.be.false;
	expect(isPromiseLike(0)).to.be.false;
	expect(isPromiseLike(3.14)).to.be.false;
	expect(isPromiseLike(8)).to.be.false;
	expect(isPromiseLike(9_007_199_254_740_991n)).to.be.false;
	expect(isPromiseLike(new Object(9_007_199_254_740_991n))).to.be.false;
	expect(isPromiseLike(Infinity)).to.be.false;
	expect(isPromiseLike(Number.NaN)).to.be.false;
	expect(isPromiseLike({})).to.be.false;
	expect(isPromiseLike({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isPromiseLike({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isPromiseLike(globalThis)).to.be.false;
	expect(isPromiseLike(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isPromiseLike(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isPromiseLike(/hello/)).to.be.false;
	expect(isPromiseLike(new Date())).to.be.false;
	expect(isPromiseLike(Date)).to.be.false;
	expect(isPromiseLike(() => 0)).to.be.false;
	expect(isPromiseLike(async () => 0)).to.be.false;
	expect(isPromiseLike(function * () {
		yield 0;
	})).to.be.false;
	expect(isPromiseLike((function * () {
		yield 0;
	})())).to.be.false;
	expect(isPromiseLike(async function * () {
		yield 0;
	})).to.be.false;
	expect(isPromiseLike((async function * () {
		yield 0;
	})())).to.be.false;
	expect(isPromiseLike(new Error('error'))).to.be.false;
	expect(isPromiseLike(Symbol(0))).to.be.false;
});
