import { expect, it } from 'vitest';
import { isNumberLike } from '../src/index.js';

it('isNumberLike(x)', function () {
	// true
	expect(isNumberLike(42)).to.be.true;
	expect(isNumberLike(new Object(42))).to.be.true;
	expect(isNumberLike(9_007_199_254_740_991n)).to.be.true;
	expect(isNumberLike(new Object(9_007_199_254_740_991n))).to.be.true;
	expect(isNumberLike(Infinity)).to.be.true;
	expect(isNumberLike(Number.NaN)).to.be.true;

	// false
	expect(isNumberLike([])).to.be.false;
	expect(isNumberLike([1, 2, 3])).to.be.false;
	expect(isNumberLike([1, 2, '3'])).to.be.false;
	expect(isNumberLike(arguments)).to.be.false;
	expect(isNumberLike(null)).to.be.false;
	expect(isNumberLike(undefined)).to.be.false;
	expect(isNumberLike(false)).to.be.false;
	expect(isNumberLike(new Object(true))).to.be.false;
	expect(isNumberLike('')).to.be.false;
	expect(isNumberLike('   ')).to.be.false;
	expect(isNumberLike('hello world')).to.be.false;
	expect(isNumberLike(new Object('hello world'))).to.be.false;
	expect(isNumberLike('42')).to.be.false;
	expect(isNumberLike({})).to.be.false;
	expect(isNumberLike({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isNumberLike({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isNumberLike(globalThis)).to.be.false;
	expect(isNumberLike(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isNumberLike(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isNumberLike(/hello/)).to.be.false;
	expect(isNumberLike(new Date())).to.be.false;
	expect(isNumberLike(Date)).to.be.false;
	expect(isNumberLike(() => 0)).to.be.false;
	expect(isNumberLike(async () => 0)).to.be.false;
	expect(isNumberLike(function * () {
		yield 0;
	})).to.be.false;
	expect(isNumberLike(new Error('error'))).to.be.false;
	expect(isNumberLike(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isNumberLike(Symbol(0))).to.be.false;
});
