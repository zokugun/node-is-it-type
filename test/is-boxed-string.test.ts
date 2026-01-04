import { expect, it } from 'vitest';
import { isBoxedString } from '../src/index.js';

it('isBoxedString(x)', function () {
	// true
	expect(isBoxedString(new Object('hello world'))).to.be.true;

	// false
	expect(isBoxedString([])).to.be.false;
	expect(isBoxedString([1, 2, 3])).to.be.false;
	expect(isBoxedString([1, 2, '3'])).to.be.false;
	expect(isBoxedString(arguments)).to.be.false;
	expect(isBoxedString(null)).to.be.false;
	expect(isBoxedString(undefined)).to.be.false;
	expect(isBoxedString(false)).to.be.false;
	expect(isBoxedString(new Object(true))).to.be.false;
	expect(isBoxedString('')).to.be.false;
	expect(isBoxedString('   ')).to.be.false;
	expect(isBoxedString('hello world')).to.be.false;
	expect(isBoxedString(42)).to.be.false;
	expect(isBoxedString(new Object(42))).to.be.false;
	expect(isBoxedString('42')).to.be.false;
	expect(isBoxedString(-42)).to.be.false;
	expect(isBoxedString(-8)).to.be.false;
	expect(isBoxedString(-3.14)).to.be.false;
	expect(isBoxedString(0)).to.be.false;
	expect(isBoxedString(3.14)).to.be.false;
	expect(isBoxedString(8)).to.be.false;
	expect(isBoxedString(9_007_199_254_740_991n)).to.be.false;
	expect(isBoxedString(new Object(9_007_199_254_740_991n))).to.be.false;
	expect(isBoxedString(Infinity)).to.be.false;
	expect(isBoxedString(Number.NaN)).to.be.false;
	expect(isBoxedString({})).to.be.false;
	expect(isBoxedString({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isBoxedString({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isBoxedString(globalThis)).to.be.false;
	expect(isBoxedString(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isBoxedString(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isBoxedString(/hello/)).to.be.false;
	expect(isBoxedString(new Date())).to.be.false;
	expect(isBoxedString(Date)).to.be.false;
	expect(isBoxedString(() => 0)).to.be.false;
	expect(isBoxedString(async () => 0)).to.be.false;
	expect(isBoxedString(function * () {
		yield 0;
	})).to.be.false;
	expect(isBoxedString(new Error('error'))).to.be.false;
	expect(isBoxedString(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isBoxedString(Symbol(0))).to.be.false;
});
