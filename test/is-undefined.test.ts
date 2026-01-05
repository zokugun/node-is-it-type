import { expect, it } from 'vitest';
import { isUndefined } from '../src/index.js';

it('isUndefined(x)', function () {
	// true
	expect(isUndefined(undefined)).to.be.true;

	// false
	expect(isUndefined([])).to.be.false;
	expect(isUndefined([1, 2, 3])).to.be.false;
	expect(isUndefined([1, 2, '3'])).to.be.false;
	expect(isUndefined(arguments)).to.be.false;
	expect(isUndefined(null)).to.be.false;
	expect(isUndefined(false)).to.be.false;
	expect(isUndefined(new Object(true))).to.be.false;
	expect(isUndefined('')).to.be.false;
	expect(isUndefined('   ')).to.be.false;
	expect(isUndefined('hello world')).to.be.false;
	expect(isUndefined(new Object('hello world'))).to.be.false;
	expect(isUndefined(42)).to.be.false;
	expect(isUndefined(new Object(42))).to.be.false;
	expect(isUndefined('42')).to.be.false;
	expect(isUndefined(-42)).to.be.false;
	expect(isUndefined(-8)).to.be.false;
	expect(isUndefined(-3.14)).to.be.false;
	expect(isUndefined(0)).to.be.false;
	expect(isUndefined(3.14)).to.be.false;
	expect(isUndefined(8)).to.be.false;
	expect(isUndefined(9_007_199_254_740_991n)).to.be.false;
	expect(isUndefined(new Object(9_007_199_254_740_991n))).to.be.false;
	expect(isUndefined(Infinity)).to.be.false;
	expect(isUndefined(Number.NaN)).to.be.false;
	expect(isUndefined({})).to.be.false;
	expect(isUndefined({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isUndefined({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isUndefined(globalThis)).to.be.false;
	expect(isUndefined(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isUndefined(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isUndefined(/hello/)).to.be.false;
	expect(isUndefined(new Date())).to.be.false;
	expect(isUndefined(Date)).to.be.false;
	expect(isUndefined(() => 0)).to.be.false;
	expect(isUndefined(async () => 0)).to.be.false;
	expect(isUndefined((async () => 0)())).to.be.false;
	expect(isUndefined({ then: () => 0 })).to.be.false;
	expect(isUndefined(function * () {
		yield 0;
	})).to.be.false;
	expect(isUndefined((function * () {
		yield 0;
	})())).to.be.false;
	expect(isUndefined(async function * () {
		yield 0;
	})).to.be.false;
	expect(isUndefined((async function * () {
		yield 0;
	})())).to.be.false;
	expect(isUndefined(new Error('error'))).to.be.false;
	expect(isUndefined(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isUndefined(Symbol(0))).to.be.false;
});
