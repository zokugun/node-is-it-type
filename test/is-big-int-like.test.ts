import { expect, it } from 'vitest';
import { isBigIntLike } from '../src/index.js';

it('isBigIntLike(x)', function () {
	// true
	expect(isBigIntLike(9_007_199_254_740_991n)).to.be.true;
	expect(isBigIntLike(new Object(9_007_199_254_740_991n))).to.be.true;

	// false
	expect(isBigIntLike([])).to.be.false;
	expect(isBigIntLike([1, 2, 3])).to.be.false;
	expect(isBigIntLike([1, 2, '3'])).to.be.false;
	expect(isBigIntLike(arguments)).to.be.false;
	expect(isBigIntLike(null)).to.be.false;
	expect(isBigIntLike(undefined)).to.be.false;
	expect(isBigIntLike(false)).to.be.false;
	expect(isBigIntLike(new Object(true))).to.be.false;
	expect(isBigIntLike('')).to.be.false;
	expect(isBigIntLike('   ')).to.be.false;
	expect(isBigIntLike('hello world')).to.be.false;
	expect(isBigIntLike(new Object('hello world'))).to.be.false;
	expect(isBigIntLike(42)).to.be.false;
	expect(isBigIntLike(new Object(42))).to.be.false;
	expect(isBigIntLike('42')).to.be.false;
	expect(isBigIntLike(-42)).to.be.false;
	expect(isBigIntLike(-8)).to.be.false;
	expect(isBigIntLike(-3.14)).to.be.false;
	expect(isBigIntLike(0)).to.be.false;
	expect(isBigIntLike(3.14)).to.be.false;
	expect(isBigIntLike(8)).to.be.false;
	expect(isBigIntLike(Infinity)).to.be.false;
	expect(isBigIntLike(Number.NaN)).to.be.false;
	expect(isBigIntLike({})).to.be.false;
	expect(isBigIntLike({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isBigIntLike({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isBigIntLike(globalThis)).to.be.false;
	expect(isBigIntLike(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isBigIntLike(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isBigIntLike(/hello/)).to.be.false;
	expect(isBigIntLike(new Date())).to.be.false;
	expect(isBigIntLike(Date)).to.be.false;
	expect(isBigIntLike(() => 0)).to.be.false;
	expect(isBigIntLike(async () => 0)).to.be.false;
	expect(isBigIntLike((async () => 0)())).to.be.false;
	expect(isBigIntLike({ then: () => 0 })).to.be.false;
	expect(isBigIntLike(function * () {
		yield 0;
	})).to.be.false;
	expect(isBigIntLike((function * () {
		yield 0;
	})())).to.be.false;
	expect(isBigIntLike(async function * () {
		yield 0;
	})).to.be.false;
	expect(isBigIntLike((async function * () {
		yield 0;
	})())).to.be.false;
	expect(isBigIntLike(new Error('error'))).to.be.false;
	expect(isBigIntLike(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isBigIntLike(Symbol(0))).to.be.false;
});
