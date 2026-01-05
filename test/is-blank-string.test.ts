import { expect, it } from 'vitest';
import { isBlankString } from '../src/index.js';

it('isBlankString(x)', function () {
	// true
	expect(isBlankString('')).to.be.true;
	expect(isBlankString('   ')).to.be.true;

	// false
	expect(isBlankString([])).to.be.false;
	expect(isBlankString([1, 2, 3])).to.be.false;
	expect(isBlankString([1, 2, '3'])).to.be.false;
	expect(isBlankString(arguments)).to.be.false;
	expect(isBlankString(null)).to.be.false;
	expect(isBlankString(undefined)).to.be.false;
	expect(isBlankString(false)).to.be.false;
	expect(isBlankString(new Object(true))).to.be.false;
	expect(isBlankString('hello world')).to.be.false;
	expect(isBlankString(new Object('hello world'))).to.be.false;
	expect(isBlankString(42)).to.be.false;
	expect(isBlankString(new Object(42))).to.be.false;
	expect(isBlankString('42')).to.be.false;
	expect(isBlankString(-42)).to.be.false;
	expect(isBlankString(-8)).to.be.false;
	expect(isBlankString(-3.14)).to.be.false;
	expect(isBlankString(0)).to.be.false;
	expect(isBlankString(3.14)).to.be.false;
	expect(isBlankString(8)).to.be.false;
	expect(isBlankString(9_007_199_254_740_991n)).to.be.false;
	expect(isBlankString(new Object(9_007_199_254_740_991n))).to.be.false;
	expect(isBlankString(Infinity)).to.be.false;
	expect(isBlankString(Number.NaN)).to.be.false;
	expect(isBlankString({})).to.be.false;
	expect(isBlankString({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isBlankString({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isBlankString(globalThis)).to.be.false;
	expect(isBlankString(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isBlankString(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isBlankString(/hello/)).to.be.false;
	expect(isBlankString(new Date())).to.be.false;
	expect(isBlankString(Date)).to.be.false;
	expect(isBlankString(() => 0)).to.be.false;
	expect(isBlankString(async () => 0)).to.be.false;
	expect(isBlankString((async () => 0)())).to.be.false;
	expect(isBlankString({ then: () => 0 })).to.be.false;
	expect(isBlankString(function * () {
		yield 0;
	})).to.be.false;
	expect(isBlankString((function * () {
		yield 0;
	})())).to.be.false;
	expect(isBlankString(async function * () {
		yield 0;
	})).to.be.false;
	expect(isBlankString((async function * () {
		yield 0;
	})())).to.be.false;
	expect(isBlankString(new Error('error'))).to.be.false;
	expect(isBlankString(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isBlankString(Symbol(0))).to.be.false;
});
