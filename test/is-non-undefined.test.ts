import { expect, it } from 'vitest';
import { isNonUndefined } from '../src/index.js';

it('isNonUndefined(x)', function () {
	// true
	expect(isNonUndefined([])).to.be.true;
	expect(isNonUndefined([1, 2, 3])).to.be.true;
	expect(isNonUndefined([1, 2, '3'])).to.be.true;
	expect(isNonUndefined(arguments)).to.be.true;
	expect(isNonUndefined(null)).to.be.true;
	expect(isNonUndefined(false)).to.be.true;
	expect(isNonUndefined(new Object(true))).to.be.true;
	expect(isNonUndefined('')).to.be.true;
	expect(isNonUndefined('   ')).to.be.true;
	expect(isNonUndefined('hello world')).to.be.true;
	expect(isNonUndefined(new Object('hello world'))).to.be.true;
	expect(isNonUndefined(42)).to.be.true;
	expect(isNonUndefined(new Object(42))).to.be.true;
	expect(isNonUndefined('42')).to.be.true;
	expect(isNonUndefined(9_007_199_254_740_991n)).to.be.true;
	expect(isNonUndefined(new Object(9_007_199_254_740_991n))).to.be.true;
	expect(isNonUndefined(Infinity)).to.be.true;
	expect(isNonUndefined(Number.NaN)).to.be.true;
	expect(isNonUndefined({})).to.be.true;
	expect(isNonUndefined({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.true;
	expect(isNonUndefined({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.true;
	expect(isNonUndefined(globalThis)).to.be.true;
	expect(isNonUndefined(class {
		hello() {
			return 'hello world';
		}
	})).to.be.true;
	expect(isNonUndefined(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.true;
	expect(isNonUndefined(/hello/)).to.be.true;
	expect(isNonUndefined(new Date())).to.be.true;
	expect(isNonUndefined(Date)).to.be.true;
	expect(isNonUndefined(() => 0)).to.be.true;
	expect(isNonUndefined(async () => 0)).to.be.true;
	expect(isNonUndefined(function * () {
		yield 0;
	})).to.be.true;
	expect(isNonUndefined(new Error('error'))).to.be.true;
	expect(isNonUndefined(new Promise((resolve) => {
		resolve(0);
	}))).to.be.true;
	expect(isNonUndefined(Symbol(0))).to.be.true;

	// false
	expect(isNonUndefined(undefined)).to.be.false;
});
