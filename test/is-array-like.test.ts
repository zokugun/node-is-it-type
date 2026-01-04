import { expect, it } from 'vitest';
import { isArrayLike } from '../src/index.js';

it('isArrayLike(x)', function () {
	// true
	expect(isArrayLike([])).to.be.true;
	expect(isArrayLike([1, 2, 3])).to.be.true;
	expect(isArrayLike([1, 2, '3'])).to.be.true;
	expect(isArrayLike(arguments)).to.be.true;
	expect(isArrayLike(new Object('hello world'))).to.be.true;

	// false
	expect(isArrayLike(null)).to.be.false;
	expect(isArrayLike(undefined)).to.be.false;
	expect(isArrayLike(false)).to.be.false;
	expect(isArrayLike(new Object(true))).to.be.false;
	expect(isArrayLike('')).to.be.false;
	expect(isArrayLike('   ')).to.be.false;
	expect(isArrayLike('hello world')).to.be.false;
	expect(isArrayLike(42)).to.be.false;
	expect(isArrayLike(new Object(42))).to.be.false;
	expect(isArrayLike('42')).to.be.false;
	expect(isArrayLike(-42)).to.be.false;
	expect(isArrayLike(-8)).to.be.false;
	expect(isArrayLike(-3.14)).to.be.false;
	expect(isArrayLike(0)).to.be.false;
	expect(isArrayLike(3.14)).to.be.false;
	expect(isArrayLike(8)).to.be.false;
	expect(isArrayLike(9_007_199_254_740_991n)).to.be.false;
	expect(isArrayLike(new Object(9_007_199_254_740_991n))).to.be.false;
	expect(isArrayLike(Infinity)).to.be.false;
	expect(isArrayLike(Number.NaN)).to.be.false;
	expect(isArrayLike({})).to.be.false;
	expect(isArrayLike({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isArrayLike({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isArrayLike(globalThis)).to.be.false;
	expect(isArrayLike(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isArrayLike(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isArrayLike(/hello/)).to.be.false;
	expect(isArrayLike(new Date())).to.be.false;
	expect(isArrayLike(Date)).to.be.false;
	expect(isArrayLike(() => 0)).to.be.false;
	expect(isArrayLike(async () => 0)).to.be.false;
	expect(isArrayLike(function * () {
		yield 0;
	})).to.be.false;
	expect(isArrayLike(new Error('error'))).to.be.false;
	expect(isArrayLike(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isArrayLike(Symbol(0))).to.be.false;
});
