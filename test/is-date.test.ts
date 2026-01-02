import { expect, it } from 'vitest';
import { isDate } from '../src/index.js';

it('isDate(x)', function () {
	// true
	expect(isDate(new Date())).to.be.true;

	// false
	expect(isDate([])).to.be.false;
	expect(isDate([1, 2, 3])).to.be.false;
	expect(isDate([1, 2, '3'])).to.be.false;
	expect(isDate(arguments)).to.be.false;
	expect(isDate(null)).to.be.false;
	expect(isDate(undefined)).to.be.false;
	expect(isDate(false)).to.be.false;
	expect(isDate(new Object(true))).to.be.false;
	expect(isDate('')).to.be.false;
	expect(isDate('   ')).to.be.false;
	expect(isDate('hello world')).to.be.false;
	expect(isDate(new Object('hello world'))).to.be.false;
	expect(isDate(42)).to.be.false;
	expect(isDate(new Object(42))).to.be.false;
	expect(isDate('42')).to.be.false;
	expect(isDate(9_007_199_254_740_991n)).to.be.false;
	expect(isDate(new Object(9_007_199_254_740_991n))).to.be.false;
	expect(isDate(Infinity)).to.be.false;
	expect(isDate(Number.NaN)).to.be.false;
	expect(isDate({})).to.be.false;
	expect(isDate({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isDate({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isDate(globalThis)).to.be.false;
	expect(isDate(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isDate(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isDate(/hello/)).to.be.false;
	expect(isDate(Date)).to.be.false;
	expect(isDate(() => 0)).to.be.false;
	expect(isDate(async () => 0)).to.be.false;
	expect(isDate(function * () {
		yield 0;
	})).to.be.false;
	expect(isDate(new Error('error'))).to.be.false;
	expect(isDate(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isDate(Symbol(0))).to.be.false;
});
