import { expect, it } from 'vitest';
import { isNaN } from '../src/index.js';

it('isNaN(x)', function () {
	// true
	expect(isNaN(Number.NaN)).to.be.true;

	// false
	expect(isNaN([])).to.be.false;
	expect(isNaN([1, 2, 3])).to.be.false;
	expect(isNaN([1, 2, '3'])).to.be.false;
	expect(isNaN(arguments)).to.be.false;
	expect(isNaN(null)).to.be.false;
	expect(isNaN(undefined)).to.be.false;
	expect(isNaN(false)).to.be.false;
	expect(isNaN(new Object(true))).to.be.false;
	expect(isNaN('')).to.be.false;
	expect(isNaN('   ')).to.be.false;
	expect(isNaN('hello world')).to.be.false;
	expect(isNaN(new Object('hello world'))).to.be.false;
	expect(isNaN(42)).to.be.false;
	expect(isNaN(new Object(42))).to.be.false;
	expect(isNaN('42')).to.be.false;
	expect(isNaN(9_007_199_254_740_991n)).to.be.false;
	expect(isNaN(new Object(9_007_199_254_740_991n))).to.be.false;
	expect(isNaN(Infinity)).to.be.false;
	expect(isNaN({})).to.be.false;
	expect(isNaN({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isNaN({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isNaN(globalThis)).to.be.false;
	expect(isNaN(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isNaN(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isNaN(/hello/)).to.be.false;
	expect(isNaN(new Date())).to.be.false;
	expect(isNaN(Date)).to.be.false;
	expect(isNaN(() => 0)).to.be.false;
	expect(isNaN(async () => 0)).to.be.false;
	expect(isNaN(function * () {
		yield 0;
	})).to.be.false;
	expect(isNaN(new Error('error'))).to.be.false;
	expect(isNaN(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isNaN(Symbol(0))).to.be.false;
});
