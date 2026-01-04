import { expect, it } from 'vitest';
import { isStringLike } from '../src/index.js';

it('isStringLike(x)', function () {
	// true
	expect(isStringLike('')).to.be.true;
	expect(isStringLike('   ')).to.be.true;
	expect(isStringLike('hello world')).to.be.true;
	expect(isStringLike(new Object('hello world'))).to.be.true;
	expect(isStringLike('42')).to.be.true;

	// false
	expect(isStringLike([])).to.be.false;
	expect(isStringLike([1, 2, 3])).to.be.false;
	expect(isStringLike([1, 2, '3'])).to.be.false;
	expect(isStringLike(arguments)).to.be.false;
	expect(isStringLike(null)).to.be.false;
	expect(isStringLike(undefined)).to.be.false;
	expect(isStringLike(false)).to.be.false;
	expect(isStringLike(new Object(true))).to.be.false;
	expect(isStringLike(42)).to.be.false;
	expect(isStringLike(new Object(42))).to.be.false;
	expect(isStringLike(-42)).to.be.false;
	expect(isStringLike(-8)).to.be.false;
	expect(isStringLike(-3.14)).to.be.false;
	expect(isStringLike(0)).to.be.false;
	expect(isStringLike(3.14)).to.be.false;
	expect(isStringLike(8)).to.be.false;
	expect(isStringLike(9_007_199_254_740_991n)).to.be.false;
	expect(isStringLike(new Object(9_007_199_254_740_991n))).to.be.false;
	expect(isStringLike(Infinity)).to.be.false;
	expect(isStringLike(Number.NaN)).to.be.false;
	expect(isStringLike({})).to.be.false;
	expect(isStringLike({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isStringLike({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isStringLike(globalThis)).to.be.false;
	expect(isStringLike(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isStringLike(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isStringLike(/hello/)).to.be.false;
	expect(isStringLike(new Date())).to.be.false;
	expect(isStringLike(Date)).to.be.false;
	expect(isStringLike(() => 0)).to.be.false;
	expect(isStringLike(async () => 0)).to.be.false;
	expect(isStringLike(function * () {
		yield 0;
	})).to.be.false;
	expect(isStringLike(new Error('error'))).to.be.false;
	expect(isStringLike(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isStringLike(Symbol(0))).to.be.false;
});
