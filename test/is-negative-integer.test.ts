import { expect, it } from 'vitest';
import { isNegativeInteger } from '../src/index.js';

it('isNegativeInteger(x)', function () {
	// true
	expect(isNegativeInteger(-42)).to.be.true;
	expect(isNegativeInteger(-8)).to.be.true;

	// false
	expect(isNegativeInteger([])).to.be.false;
	expect(isNegativeInteger([1, 2, 3])).to.be.false;
	expect(isNegativeInteger([1, 2, '3'])).to.be.false;
	expect(isNegativeInteger(arguments)).to.be.false;
	expect(isNegativeInteger(null)).to.be.false;
	expect(isNegativeInteger(undefined)).to.be.false;
	expect(isNegativeInteger(false)).to.be.false;
	expect(isNegativeInteger(new Object(true))).to.be.false;
	expect(isNegativeInteger('')).to.be.false;
	expect(isNegativeInteger('   ')).to.be.false;
	expect(isNegativeInteger('hello world')).to.be.false;
	expect(isNegativeInteger(new Object('hello world'))).to.be.false;
	expect(isNegativeInteger(new Object(42))).to.be.false;
	expect(isNegativeInteger('42')).to.be.false;
	expect(isNegativeInteger(42)).to.be.false;
	expect(isNegativeInteger(-3.14)).to.be.false;
	expect(isNegativeInteger(0)).to.be.false;
	expect(isNegativeInteger(3.14)).to.be.false;
	expect(isNegativeInteger(8)).to.be.false;
	expect(isNegativeInteger(Infinity)).to.be.false;
	expect(isNegativeInteger(Number.NaN)).to.be.false;
	expect(isNegativeInteger(9_007_199_254_740_991n)).to.be.false;
	expect(isNegativeInteger(new Object(9_007_199_254_740_991n))).to.be.false;
	expect(isNegativeInteger({})).to.be.false;
	expect(isNegativeInteger({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isNegativeInteger({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isNegativeInteger(globalThis)).to.be.false;
	expect(isNegativeInteger(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isNegativeInteger(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isNegativeInteger(/hello/)).to.be.false;
	expect(isNegativeInteger(new Date())).to.be.false;
	expect(isNegativeInteger(Date)).to.be.false;
	expect(isNegativeInteger(() => 0)).to.be.false;
	expect(isNegativeInteger(async () => 0)).to.be.false;
	expect(isNegativeInteger((async () => 0)())).to.be.false;
	expect(isNegativeInteger({ then: () => 0 })).to.be.false;
	expect(isNegativeInteger(function * () {
		yield 0;
	})).to.be.false;
	expect(isNegativeInteger((function * () {
		yield 0;
	})())).to.be.false;
	expect(isNegativeInteger(async function * () {
		yield 0;
	})).to.be.false;
	expect(isNegativeInteger((async function * () {
		yield 0;
	})())).to.be.false;
	expect(isNegativeInteger(new Error('error'))).to.be.false;
	expect(isNegativeInteger(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isNegativeInteger(Symbol(0))).to.be.false;
});
