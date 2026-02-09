import { expect, it } from 'vitest';
import { isNumberLessThan } from '../src/index.js';

it('isNumberLessThan(x)', function () {
	// true
	expect(isNumberLessThan(-42, 8)).to.be.true;
	expect(isNumberLessThan(-8, 8)).to.be.true;
	expect(isNumberLessThan(-3.14, 8)).to.be.true;
	expect(isNumberLessThan(0, 8)).to.be.true;
	expect(isNumberLessThan(3.14, 8)).to.be.true;

	// false
	expect(isNumberLessThan([], 8)).to.be.false;
	expect(isNumberLessThan([1, 2, 3], 8)).to.be.false;
	expect(isNumberLessThan([1, 2, '3'], 8)).to.be.false;
	expect(isNumberLessThan(arguments, 8)).to.be.false;
	expect(isNumberLessThan(null, 8)).to.be.false;
	expect(isNumberLessThan(undefined, 8)).to.be.false;
	expect(isNumberLessThan(false, 8)).to.be.false;
	expect(isNumberLessThan(new Object(true), 8)).to.be.false;
	expect(isNumberLessThan('', 8)).to.be.false;
	expect(isNumberLessThan('   ', 8)).to.be.false;
	expect(isNumberLessThan('hello world', 8)).to.be.false;
	expect(isNumberLessThan(new Object('hello world'), 8)).to.be.false;
	expect(isNumberLessThan(new Object(42), 8)).to.be.false;
	expect(isNumberLessThan('42', 8)).to.be.false;
	expect(isNumberLessThan(8, 8)).to.be.false;
	expect(isNumberLessThan(42, 8)).to.be.false;
	expect(isNumberLessThan(Infinity, 8)).to.be.false;
	expect(isNumberLessThan(Number.NaN, 8)).to.be.false;
	expect(isNumberLessThan(9_007_199_254_740_991n, 8)).to.be.false;
	expect(isNumberLessThan(new Object(9_007_199_254_740_991n), 8)).to.be.false;
	expect(isNumberLessThan({}, 8)).to.be.false;
	expect(isNumberLessThan({
		a: 'hello',
		b: 'world',
		c: '!',
	}, 8)).to.be.false;
	expect(isNumberLessThan({
		a: 'hello',
		b: 'world',
		c: 1,
	}, 8)).to.be.false;
	expect(isNumberLessThan(globalThis, 8)).to.be.false;
	expect(isNumberLessThan(class {
		hello() {
			return 'hello world';
		}
	}, 8)).to.be.false;
	expect(isNumberLessThan(new (class {
		hello() {
			return 'hello world';
		}
	})(), 8)).to.be.false;
	expect(isNumberLessThan(/hello/, 8)).to.be.false;
	expect(isNumberLessThan(new Date(), 8)).to.be.false;
	expect(isNumberLessThan(Date, 8)).to.be.false;
	expect(isNumberLessThan(() => 0, 8)).to.be.false;
	expect(isNumberLessThan(async () => 0, 8)).to.be.false;
	expect(isNumberLessThan((async () => 0)(), 8)).to.be.false;
	expect(isNumberLessThan({ then: () => 0 }, 8)).to.be.false;
	expect(isNumberLessThan(function * () {
		yield 0;
	}, 8)).to.be.false;
	expect(isNumberLessThan((function * () {
		yield 0;
	})(), 8)).to.be.false;
	expect(isNumberLessThan(async function * () {
		yield 0;
	}, 8)).to.be.false;
	expect(isNumberLessThan((async function * () {
		yield 0;
	})(), 8)).to.be.false;
	expect(isNumberLessThan(new Error('error'), 8)).to.be.false;
	expect(isNumberLessThan(new Promise((resolve) => {
		resolve(0);
	}), 8)).to.be.false;
	expect(isNumberLessThan(Symbol(0), 8)).to.be.false;
});
