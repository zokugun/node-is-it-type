import { expect, it } from 'vitest';
import { isBoolean } from '../src/index.js';

it('isBoolean(x)', function () {
	// true
	expect(isBoolean(false)).to.be.true;

	// false
	expect(isBoolean([])).to.be.false;
	expect(isBoolean([1, 2, 3])).to.be.false;
	expect(isBoolean([1, 2, '3'])).to.be.false;
	expect(isBoolean(arguments)).to.be.false;
	expect(isBoolean(null)).to.be.false;
	expect(isBoolean(undefined)).to.be.false;
	expect(isBoolean(new Object(true))).to.be.false;
	expect(isBoolean('')).to.be.false;
	expect(isBoolean('   ')).to.be.false;
	expect(isBoolean('hello world')).to.be.false;
	expect(isBoolean(new Object('hello world'))).to.be.false;
	expect(isBoolean(42)).to.be.false;
	expect(isBoolean(new Object(42))).to.be.false;
	expect(isBoolean('42')).to.be.false;
	expect(isBoolean(9_007_199_254_740_991n)).to.be.false;
	expect(isBoolean(new Object(9_007_199_254_740_991n))).to.be.false;
	expect(isBoolean(Infinity)).to.be.false;
	expect(isBoolean(Number.NaN)).to.be.false;
	expect(isBoolean({})).to.be.false;
	expect(isBoolean({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isBoolean({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isBoolean(globalThis)).to.be.false;
	expect(isBoolean(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isBoolean(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isBoolean(/hello/)).to.be.false;
	expect(isBoolean(new Date())).to.be.false;
	expect(isBoolean(Date)).to.be.false;
	expect(isBoolean(() => 0)).to.be.false;
	expect(isBoolean(async () => 0)).to.be.false;
	expect(isBoolean(function * () {
		yield 0;
	})).to.be.false;
	expect(isBoolean(new Error('error'))).to.be.false;
	expect(isBoolean(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isBoolean(Symbol(0))).to.be.false;
});
