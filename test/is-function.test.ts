import { expect, it } from 'vitest';
import { isFunction } from '../src/index.js';

it('isFunction(x)', function () {
	// true
	expect(isFunction(() => 0)).to.be.true;
	expect(isFunction(async () => 0)).to.be.true;
	expect(isFunction(function * () {
		yield 0;
	})).to.be.true;
	expect(isFunction(async function * () {
		yield 0;
	})).to.be.true;

	// false
	expect(isFunction([])).to.be.false;
	expect(isFunction([1, 2, 3])).to.be.false;
	expect(isFunction([1, 2, '3'])).to.be.false;
	expect(isFunction(arguments)).to.be.false;
	expect(isFunction(null)).to.be.false;
	expect(isFunction(undefined)).to.be.false;
	expect(isFunction(false)).to.be.false;
	expect(isFunction(new Object(true))).to.be.false;
	expect(isFunction('')).to.be.false;
	expect(isFunction('   ')).to.be.false;
	expect(isFunction('hello world')).to.be.false;
	expect(isFunction(new Object('hello world'))).to.be.false;
	expect(isFunction(42)).to.be.false;
	expect(isFunction(new Object(42))).to.be.false;
	expect(isFunction('42')).to.be.false;
	expect(isFunction(-42)).to.be.false;
	expect(isFunction(-8)).to.be.false;
	expect(isFunction(-3.14)).to.be.false;
	expect(isFunction(0)).to.be.false;
	expect(isFunction(3.14)).to.be.false;
	expect(isFunction(8)).to.be.false;
	expect(isFunction(9_007_199_254_740_991n)).to.be.false;
	expect(isFunction(new Object(9_007_199_254_740_991n))).to.be.false;
	expect(isFunction(Infinity)).to.be.false;
	expect(isFunction(Number.NaN)).to.be.false;
	expect(isFunction({})).to.be.false;
	expect(isFunction({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isFunction({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isFunction(globalThis)).to.be.false;
	expect(isFunction(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isFunction(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isFunction(/hello/)).to.be.false;
	expect(isFunction(new Date())).to.be.false;
	expect(isFunction(Date)).to.be.false;
	expect(isFunction((async () => 0)())).to.be.false;
	expect(isFunction({ then: () => 0 })).to.be.false;
	expect(isFunction((function * () {
		yield 0;
	})())).to.be.false;
	expect(isFunction((async function * () {
		yield 0;
	})())).to.be.false;
	expect(isFunction(new Error('error'))).to.be.false;
	expect(isFunction(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isFunction(Symbol(0))).to.be.false;
});
