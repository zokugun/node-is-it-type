import { expect, it } from 'vitest';
import { isBoxedBigInt } from '../src/index.js';

it('isBoxedBigInt(x)', function () {
	// true
	expect(isBoxedBigInt(new Object(9_007_199_254_740_991n))).to.be.true;

	// false
	expect(isBoxedBigInt([])).to.be.false;
	expect(isBoxedBigInt([1, 2, 3])).to.be.false;
	expect(isBoxedBigInt([1, 2, '3'])).to.be.false;
	expect(isBoxedBigInt(arguments)).to.be.false;
	expect(isBoxedBigInt(null)).to.be.false;
	expect(isBoxedBigInt(undefined)).to.be.false;
	expect(isBoxedBigInt(false)).to.be.false;
	expect(isBoxedBigInt(new Object(true))).to.be.false;
	expect(isBoxedBigInt('')).to.be.false;
	expect(isBoxedBigInt('   ')).to.be.false;
	expect(isBoxedBigInt('hello world')).to.be.false;
	expect(isBoxedBigInt(new Object('hello world'))).to.be.false;
	expect(isBoxedBigInt(42)).to.be.false;
	expect(isBoxedBigInt(new Object(42))).to.be.false;
	expect(isBoxedBigInt('42')).to.be.false;
	expect(isBoxedBigInt(-42)).to.be.false;
	expect(isBoxedBigInt(-8)).to.be.false;
	expect(isBoxedBigInt(-3.14)).to.be.false;
	expect(isBoxedBigInt(0)).to.be.false;
	expect(isBoxedBigInt(3.14)).to.be.false;
	expect(isBoxedBigInt(8)).to.be.false;
	expect(isBoxedBigInt(9_007_199_254_740_991n)).to.be.false;
	expect(isBoxedBigInt(Infinity)).to.be.false;
	expect(isBoxedBigInt(Number.NaN)).to.be.false;
	expect(isBoxedBigInt({})).to.be.false;
	expect(isBoxedBigInt({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isBoxedBigInt({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isBoxedBigInt(globalThis)).to.be.false;
	expect(isBoxedBigInt(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isBoxedBigInt(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isBoxedBigInt(/hello/)).to.be.false;
	expect(isBoxedBigInt(new Date())).to.be.false;
	expect(isBoxedBigInt(Date)).to.be.false;
	expect(isBoxedBigInt(() => 0)).to.be.false;
	expect(isBoxedBigInt(async () => 0)).to.be.false;
	expect(isBoxedBigInt(function * () {
		yield 0;
	})).to.be.false;
	expect(isBoxedBigInt(new Error('error'))).to.be.false;
	expect(isBoxedBigInt(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isBoxedBigInt(Symbol(0))).to.be.false;
});
