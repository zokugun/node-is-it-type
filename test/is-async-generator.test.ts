import { expect, it } from 'vitest';
import { isAsyncGenerator } from '../src/index.js';

it('isAsyncGenerator(x)', function () {
	// true
	expect(isAsyncGenerator(async function * () {
		yield 0;
	})).to.be.true;

	// false
	expect(isAsyncGenerator([])).to.be.false;
	expect(isAsyncGenerator([1, 2, 3])).to.be.false;
	expect(isAsyncGenerator([1, 2, '3'])).to.be.false;
	expect(isAsyncGenerator(arguments)).to.be.false;
	expect(isAsyncGenerator(null)).to.be.false;
	expect(isAsyncGenerator(undefined)).to.be.false;
	expect(isAsyncGenerator(false)).to.be.false;
	expect(isAsyncGenerator(new Object(true))).to.be.false;
	expect(isAsyncGenerator('')).to.be.false;
	expect(isAsyncGenerator('   ')).to.be.false;
	expect(isAsyncGenerator('hello world')).to.be.false;
	expect(isAsyncGenerator(new Object('hello world'))).to.be.false;
	expect(isAsyncGenerator(42)).to.be.false;
	expect(isAsyncGenerator(new Object(42))).to.be.false;
	expect(isAsyncGenerator('42')).to.be.false;
	expect(isAsyncGenerator(-42)).to.be.false;
	expect(isAsyncGenerator(-8)).to.be.false;
	expect(isAsyncGenerator(-3.14)).to.be.false;
	expect(isAsyncGenerator(0)).to.be.false;
	expect(isAsyncGenerator(3.14)).to.be.false;
	expect(isAsyncGenerator(8)).to.be.false;
	expect(isAsyncGenerator(9_007_199_254_740_991n)).to.be.false;
	expect(isAsyncGenerator(new Object(9_007_199_254_740_991n))).to.be.false;
	expect(isAsyncGenerator(Infinity)).to.be.false;
	expect(isAsyncGenerator(Number.NaN)).to.be.false;
	expect(isAsyncGenerator({})).to.be.false;
	expect(isAsyncGenerator({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isAsyncGenerator({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isAsyncGenerator(globalThis)).to.be.false;
	expect(isAsyncGenerator(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isAsyncGenerator(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isAsyncGenerator(/hello/)).to.be.false;
	expect(isAsyncGenerator(new Date())).to.be.false;
	expect(isAsyncGenerator(Date)).to.be.false;
	expect(isAsyncGenerator(() => 0)).to.be.false;
	expect(isAsyncGenerator(async () => 0)).to.be.false;
	expect(isAsyncGenerator((async () => 0)())).to.be.false;
	expect(isAsyncGenerator({ then: () => 0 })).to.be.false;
	expect(isAsyncGenerator(function * () {
		yield 0;
	})).to.be.false;
	expect(isAsyncGenerator((function * () {
		yield 0;
	})())).to.be.false;
	expect(isAsyncGenerator((async function * () {
		yield 0;
	})())).to.be.false;
	expect(isAsyncGenerator(new Error('error'))).to.be.false;
	expect(isAsyncGenerator(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isAsyncGenerator(Symbol(0))).to.be.false;
});
