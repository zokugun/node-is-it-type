import { expect, it } from 'vitest';
import { isNodeError } from '../src/index.js';

it('isNodeError(x)', function () {
	// true

	// false
	expect(isNodeError([])).to.be.false;
	expect(isNodeError([1, 2, 3])).to.be.false;
	expect(isNodeError([1, 2, '3'])).to.be.false;
	expect(isNodeError(arguments)).to.be.false;
	expect(isNodeError(null)).to.be.false;
	expect(isNodeError(undefined)).to.be.false;
	expect(isNodeError(false)).to.be.false;
	expect(isNodeError(new Object(true))).to.be.false;
	expect(isNodeError('')).to.be.false;
	expect(isNodeError('   ')).to.be.false;
	expect(isNodeError('hello world')).to.be.false;
	expect(isNodeError(new Object('hello world'))).to.be.false;
	expect(isNodeError(42)).to.be.false;
	expect(isNodeError(new Object(42))).to.be.false;
	expect(isNodeError('42')).to.be.false;
	expect(isNodeError(-42)).to.be.false;
	expect(isNodeError(-8)).to.be.false;
	expect(isNodeError(-3.14)).to.be.false;
	expect(isNodeError(0)).to.be.false;
	expect(isNodeError(3.14)).to.be.false;
	expect(isNodeError(8)).to.be.false;
	expect(isNodeError(9_007_199_254_740_991n)).to.be.false;
	expect(isNodeError(new Object(9_007_199_254_740_991n))).to.be.false;
	expect(isNodeError(Infinity)).to.be.false;
	expect(isNodeError(Number.NaN)).to.be.false;
	expect(isNodeError({})).to.be.false;
	expect(isNodeError({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isNodeError({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isNodeError(globalThis)).to.be.false;
	expect(isNodeError(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isNodeError(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isNodeError(/hello/)).to.be.false;
	expect(isNodeError(new Date())).to.be.false;
	expect(isNodeError(Date)).to.be.false;
	expect(isNodeError(() => 0)).to.be.false;
	expect(isNodeError(async () => 0)).to.be.false;
	expect(isNodeError((async () => 0)())).to.be.false;
	expect(isNodeError({ then: () => 0 })).to.be.false;
	expect(isNodeError(function * () {
		yield 0;
	})).to.be.false;
	expect(isNodeError((function * () {
		yield 0;
	})())).to.be.false;
	expect(isNodeError(async function * () {
		yield 0;
	})).to.be.false;
	expect(isNodeError((async function * () {
		yield 0;
	})())).to.be.false;
	expect(isNodeError(new Error('error'))).to.be.false;
	expect(isNodeError(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isNodeError(Symbol(0))).to.be.false;
});
