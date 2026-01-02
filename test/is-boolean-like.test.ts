import { expect, it } from 'vitest';
import { isBooleanLike } from '../src/index.js';

it('isBooleanLike(x)', function () {
	// true
	expect(isBooleanLike(false)).to.be.true;
	expect(isBooleanLike(new Object(true))).to.be.true;

	// false
	expect(isBooleanLike([])).to.be.false;
	expect(isBooleanLike([1, 2, 3])).to.be.false;
	expect(isBooleanLike([1, 2, '3'])).to.be.false;
	expect(isBooleanLike(arguments)).to.be.false;
	expect(isBooleanLike(null)).to.be.false;
	expect(isBooleanLike(undefined)).to.be.false;
	expect(isBooleanLike('')).to.be.false;
	expect(isBooleanLike('   ')).to.be.false;
	expect(isBooleanLike('hello world')).to.be.false;
	expect(isBooleanLike(new Object('hello world'))).to.be.false;
	expect(isBooleanLike(42)).to.be.false;
	expect(isBooleanLike(new Object(42))).to.be.false;
	expect(isBooleanLike('42')).to.be.false;
	expect(isBooleanLike(9_007_199_254_740_991n)).to.be.false;
	expect(isBooleanLike(new Object(9_007_199_254_740_991n))).to.be.false;
	expect(isBooleanLike(Infinity)).to.be.false;
	expect(isBooleanLike(Number.NaN)).to.be.false;
	expect(isBooleanLike({})).to.be.false;
	expect(isBooleanLike({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isBooleanLike({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isBooleanLike(globalThis)).to.be.false;
	expect(isBooleanLike(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isBooleanLike(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isBooleanLike(/hello/)).to.be.false;
	expect(isBooleanLike(new Date())).to.be.false;
	expect(isBooleanLike(Date)).to.be.false;
	expect(isBooleanLike(() => 0)).to.be.false;
	expect(isBooleanLike(async () => 0)).to.be.false;
	expect(isBooleanLike(function * () {
		yield 0;
	})).to.be.false;
	expect(isBooleanLike(new Error('error'))).to.be.false;
	expect(isBooleanLike(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isBooleanLike(Symbol(0))).to.be.false;
});
