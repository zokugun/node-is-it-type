import { expect, it } from 'vitest';
import { isIntegerLessThan } from '../src/index.js';

it('isIntegerLessThan(x)', function () {
	// true
	expect(isIntegerLessThan(-42, 8)).to.be.true;
	expect(isIntegerLessThan(-8, 8)).to.be.true;
	expect(isIntegerLessThan(0, 8)).to.be.true;

	// false
	expect(isIntegerLessThan([], 8)).to.be.false;
	expect(isIntegerLessThan([1, 2, 3], 8)).to.be.false;
	expect(isIntegerLessThan([1, 2, '3'], 8)).to.be.false;
	expect(isIntegerLessThan(arguments, 8)).to.be.false;
	expect(isIntegerLessThan(null, 8)).to.be.false;
	expect(isIntegerLessThan(undefined, 8)).to.be.false;
	expect(isIntegerLessThan(false, 8)).to.be.false;
	expect(isIntegerLessThan(new Object(true), 8)).to.be.false;
	expect(isIntegerLessThan('', 8)).to.be.false;
	expect(isIntegerLessThan('   ', 8)).to.be.false;
	expect(isIntegerLessThan('hello world', 8)).to.be.false;
	expect(isIntegerLessThan(new Object('hello world'), 8)).to.be.false;
	expect(isIntegerLessThan(new Object(42), 8)).to.be.false;
	expect(isIntegerLessThan('42', 8)).to.be.false;
	expect(isIntegerLessThan(42, 8)).to.be.false;
	expect(isIntegerLessThan(-3.14, 8)).to.be.false;
	expect(isIntegerLessThan(3.14, 8)).to.be.false;
	expect(isIntegerLessThan(8, 8)).to.be.false;
	expect(isIntegerLessThan(Infinity, 8)).to.be.false;
	expect(isIntegerLessThan(Number.NaN, 8)).to.be.false;
	expect(isIntegerLessThan(9_007_199_254_740_991n, 8)).to.be.false;
	expect(isIntegerLessThan(new Object(9_007_199_254_740_991n), 8)).to.be.false;
	expect(isIntegerLessThan({}, 8)).to.be.false;
	expect(isIntegerLessThan({
		a: 'hello',
		b: 'world',
		c: '!',
	}, 8)).to.be.false;
	expect(isIntegerLessThan({
		a: 'hello',
		b: 'world',
		c: 1,
	}, 8)).to.be.false;
	expect(isIntegerLessThan(globalThis, 8)).to.be.false;
	expect(isIntegerLessThan(class {
		hello() {
			return 'hello world';
		}
	}, 8)).to.be.false;
	expect(isIntegerLessThan(new (class {
		hello() {
			return 'hello world';
		}
	})(), 8)).to.be.false;
	expect(isIntegerLessThan(/hello/, 8)).to.be.false;
	expect(isIntegerLessThan(new Date(), 8)).to.be.false;
	expect(isIntegerLessThan(Date, 8)).to.be.false;
	expect(isIntegerLessThan(() => 0, 8)).to.be.false;
	expect(isIntegerLessThan(async () => 0, 8)).to.be.false;
	expect(isIntegerLessThan((async () => 0)(), 8)).to.be.false;
	expect(isIntegerLessThan({ then: () => 0 }, 8)).to.be.false;
	expect(isIntegerLessThan(function * () {
		yield 0;
	}, 8)).to.be.false;
	expect(isIntegerLessThan((function * () {
		yield 0;
	})(), 8)).to.be.false;
	expect(isIntegerLessThan(async function * () {
		yield 0;
	}, 8)).to.be.false;
	expect(isIntegerLessThan((async function * () {
		yield 0;
	})(), 8)).to.be.false;
	expect(isIntegerLessThan(new Error('error'), 8)).to.be.false;
	expect(isIntegerLessThan(new Promise((resolve) => {
		resolve(0);
	}), 8)).to.be.false;
	expect(isIntegerLessThan(Symbol(0), 8)).to.be.false;
});
