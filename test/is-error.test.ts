import { expect, it } from 'vitest';
import { isError } from '../src/index.js';

it('isError(x)', function () {
	// true
	expect(isError(new Error('error'))).to.be.true;

	// false
	expect(isError([])).to.be.false;
	expect(isError([1, 2, 3])).to.be.false;
	expect(isError([1, 2, '3'])).to.be.false;
	expect(isError(arguments)).to.be.false;
	expect(isError(null)).to.be.false;
	expect(isError(undefined)).to.be.false;
	expect(isError(false)).to.be.false;
	expect(isError(new Object(true))).to.be.false;
	expect(isError('')).to.be.false;
	expect(isError('   ')).to.be.false;
	expect(isError('hello world')).to.be.false;
	expect(isError(new Object('hello world'))).to.be.false;
	expect(isError(42)).to.be.false;
	expect(isError(new Object(42))).to.be.false;
	expect(isError('42')).to.be.false;
	expect(isError(-42)).to.be.false;
	expect(isError(-8)).to.be.false;
	expect(isError(-3.14)).to.be.false;
	expect(isError(0)).to.be.false;
	expect(isError(3.14)).to.be.false;
	expect(isError(8)).to.be.false;
	expect(isError(9_007_199_254_740_991n)).to.be.false;
	expect(isError(new Object(9_007_199_254_740_991n))).to.be.false;
	expect(isError(Infinity)).to.be.false;
	expect(isError(Number.NaN)).to.be.false;
	expect(isError({})).to.be.false;
	expect(isError({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isError({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isError(globalThis)).to.be.false;
	expect(isError(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isError(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isError(/hello/)).to.be.false;
	expect(isError(new Date())).to.be.false;
	expect(isError(Date)).to.be.false;
	expect(isError(() => 0)).to.be.false;
	expect(isError(async () => 0)).to.be.false;
	expect(isError((async () => 0)())).to.be.false;
	expect(isError({ then: () => 0 })).to.be.false;
	expect(isError(function * () {
		yield 0;
	})).to.be.false;
	expect(isError((function * () {
		yield 0;
	})())).to.be.false;
	expect(isError(async function * () {
		yield 0;
	})).to.be.false;
	expect(isError((async function * () {
		yield 0;
	})())).to.be.false;
	expect(isError(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isError(Symbol(0))).to.be.false;
});
