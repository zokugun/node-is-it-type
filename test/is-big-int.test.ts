import { expect, it } from 'vitest';
import { isBigInt } from '../src/index.js';

it('isBigInt(x)', function () {
	// true
	expect(isBigInt(9_007_199_254_740_991n)).to.be.true;

	// false
	expect(isBigInt([])).to.be.false;
	expect(isBigInt([1, 2, 3])).to.be.false;
	expect(isBigInt([1, 2, '3'])).to.be.false;
	expect(isBigInt(arguments)).to.be.false;
	expect(isBigInt(null)).to.be.false;
	expect(isBigInt(undefined)).to.be.false;
	expect(isBigInt(false)).to.be.false;
	expect(isBigInt(new Object(true))).to.be.false;
	expect(isBigInt('')).to.be.false;
	expect(isBigInt('   ')).to.be.false;
	expect(isBigInt('hello world')).to.be.false;
	expect(isBigInt(new Object('hello world'))).to.be.false;
	expect(isBigInt(42)).to.be.false;
	expect(isBigInt(new Object(42))).to.be.false;
	expect(isBigInt('42')).to.be.false;
	expect(isBigInt(-42)).to.be.false;
	expect(isBigInt(-8)).to.be.false;
	expect(isBigInt(-3.14)).to.be.false;
	expect(isBigInt(0)).to.be.false;
	expect(isBigInt(3.14)).to.be.false;
	expect(isBigInt(8)).to.be.false;
	expect(isBigInt(new Object(9_007_199_254_740_991n))).to.be.false;
	expect(isBigInt(Infinity)).to.be.false;
	expect(isBigInt(Number.NaN)).to.be.false;
	expect(isBigInt({})).to.be.false;
	expect(isBigInt({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isBigInt({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isBigInt(globalThis)).to.be.false;
	expect(isBigInt(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isBigInt(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isBigInt(/hello/)).to.be.false;
	expect(isBigInt(new Date())).to.be.false;
	expect(isBigInt(Date)).to.be.false;
	expect(isBigInt(() => 0)).to.be.false;
	expect(isBigInt(async () => 0)).to.be.false;
	expect(isBigInt(function * () {
		yield 0;
	})).to.be.false;
	expect(isBigInt(new Error('error'))).to.be.false;
	expect(isBigInt(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isBigInt(Symbol(0))).to.be.false;
});
