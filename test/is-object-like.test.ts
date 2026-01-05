import { expect, it } from 'vitest';
import { isObjectLike } from '../src/index.js';

it('isObjectLike(x)', function () {
	// true
	expect(isObjectLike([])).to.be.true;
	expect(isObjectLike([1, 2, 3])).to.be.true;
	expect(isObjectLike([1, 2, '3'])).to.be.true;
	expect(isObjectLike(arguments)).to.be.true;
	expect(isObjectLike(new Object(true))).to.be.true;
	expect(isObjectLike(new Object('hello world'))).to.be.true;
	expect(isObjectLike(new Object(42))).to.be.true;
	expect(isObjectLike(new Object(9_007_199_254_740_991n))).to.be.true;
	expect(isObjectLike({})).to.be.true;
	expect(isObjectLike({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.true;
	expect(isObjectLike({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.true;
	expect(isObjectLike(globalThis)).to.be.true;
	expect(isObjectLike(class {
		hello() {
			return 'hello world';
		}
	})).to.be.true;
	expect(isObjectLike(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.true;
	expect(isObjectLike(/hello/)).to.be.true;
	expect(isObjectLike(Date)).to.be.true;
	expect(isObjectLike(new Date())).to.be.true;
	expect(isObjectLike(new Error('error'))).to.be.true;
	expect(isObjectLike(new Promise((resolve) => {
		resolve(0);
	}))).to.be.true;
	expect(isObjectLike(() => 0)).to.be.true;
	expect(isObjectLike(async () => 0)).to.be.true;
	expect(isObjectLike((async () => 0)())).to.be.true;
	expect(isObjectLike({ then: () => 0 })).to.be.true;
	expect(isObjectLike(function * () {
		yield 0;
	})).to.be.true;
	expect(isObjectLike((function * () {
		yield 0;
	})())).to.be.true;
	expect(isObjectLike(async function * () {
		yield 0;
	})).to.be.true;
	expect(isObjectLike((async function * () {
		yield 0;
	})())).to.be.true;

	// false
	expect(isObjectLike(null)).to.be.false;
	expect(isObjectLike(undefined)).to.be.false;
	expect(isObjectLike(false)).to.be.false;
	expect(isObjectLike('')).to.be.false;
	expect(isObjectLike('   ')).to.be.false;
	expect(isObjectLike('hello world')).to.be.false;
	expect(isObjectLike(42)).to.be.false;
	expect(isObjectLike('42')).to.be.false;
	expect(isObjectLike(-42)).to.be.false;
	expect(isObjectLike(-8)).to.be.false;
	expect(isObjectLike(-3.14)).to.be.false;
	expect(isObjectLike(0)).to.be.false;
	expect(isObjectLike(3.14)).to.be.false;
	expect(isObjectLike(8)).to.be.false;
	expect(isObjectLike(9_007_199_254_740_991n)).to.be.false;
	expect(isObjectLike(Infinity)).to.be.false;
	expect(isObjectLike(Number.NaN)).to.be.false;
	expect(isObjectLike(Symbol(0))).to.be.false;
});
