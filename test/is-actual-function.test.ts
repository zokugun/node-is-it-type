import { expect, it } from 'vitest';
import { isActualFunction } from '../src/index.js';

it('isActualFunction(x)', function () {
	// true
	expect(isActualFunction(class {
		hello() {
			return 'hello world';
		}
	})).to.be.true;
	expect(isActualFunction(Date)).to.be.true;
	expect(isActualFunction(() => 0)).to.be.true;
	expect(isActualFunction(async () => 0)).to.be.true;
	expect(isActualFunction(function * () {
		yield 0;
	})).to.be.true;

	// false
	expect(isActualFunction([])).to.be.false;
	expect(isActualFunction([1, 2, 3])).to.be.false;
	expect(isActualFunction([1, 2, '3'])).to.be.false;
	expect(isActualFunction(arguments)).to.be.false;
	expect(isActualFunction(null)).to.be.false;
	expect(isActualFunction(undefined)).to.be.false;
	expect(isActualFunction(false)).to.be.false;
	expect(isActualFunction(new Object(true))).to.be.false;
	expect(isActualFunction('')).to.be.false;
	expect(isActualFunction('   ')).to.be.false;
	expect(isActualFunction('hello world')).to.be.false;
	expect(isActualFunction(new Object('hello world'))).to.be.false;
	expect(isActualFunction(42)).to.be.false;
	expect(isActualFunction(new Object(42))).to.be.false;
	expect(isActualFunction('42')).to.be.false;
	expect(isActualFunction(-42)).to.be.false;
	expect(isActualFunction(-8)).to.be.false;
	expect(isActualFunction(-3.14)).to.be.false;
	expect(isActualFunction(0)).to.be.false;
	expect(isActualFunction(3.14)).to.be.false;
	expect(isActualFunction(8)).to.be.false;
	expect(isActualFunction(9_007_199_254_740_991n)).to.be.false;
	expect(isActualFunction(new Object(9_007_199_254_740_991n))).to.be.false;
	expect(isActualFunction(Infinity)).to.be.false;
	expect(isActualFunction(Number.NaN)).to.be.false;
	expect(isActualFunction({})).to.be.false;
	expect(isActualFunction({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isActualFunction({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isActualFunction(globalThis)).to.be.false;
	expect(isActualFunction(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isActualFunction(/hello/)).to.be.false;
	expect(isActualFunction(new Date())).to.be.false;
	expect(isActualFunction(new Error('error'))).to.be.false;
	expect(isActualFunction(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isActualFunction(Symbol(0))).to.be.false;
});
