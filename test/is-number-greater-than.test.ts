import { expect, it } from 'vitest';
import { isNumberGreaterThan } from '../src/index.js';

it('isNumberGreaterThan(x)', function () {
	// true
	expect(isNumberGreaterThan(42, 8)).to.be.true;
	expect(isNumberGreaterThan(Infinity, 8)).to.be.true;

	// false
	expect(isNumberGreaterThan([], 8)).to.be.false;
	expect(isNumberGreaterThan([1, 2, 3], 8)).to.be.false;
	expect(isNumberGreaterThan([1, 2, '3'], 8)).to.be.false;
	expect(isNumberGreaterThan(arguments, 8)).to.be.false;
	expect(isNumberGreaterThan(null, 8)).to.be.false;
	expect(isNumberGreaterThan(undefined, 8)).to.be.false;
	expect(isNumberGreaterThan(false, 8)).to.be.false;
	expect(isNumberGreaterThan(new Object(true), 8)).to.be.false;
	expect(isNumberGreaterThan('', 8)).to.be.false;
	expect(isNumberGreaterThan('   ', 8)).to.be.false;
	expect(isNumberGreaterThan('hello world', 8)).to.be.false;
	expect(isNumberGreaterThan(new Object('hello world'), 8)).to.be.false;
	expect(isNumberGreaterThan(new Object(42), 8)).to.be.false;
	expect(isNumberGreaterThan('42', 8)).to.be.false;
	expect(isNumberGreaterThan(-42, 8)).to.be.false;
	expect(isNumberGreaterThan(-8, 8)).to.be.false;
	expect(isNumberGreaterThan(-3.14, 8)).to.be.false;
	expect(isNumberGreaterThan(0, 8)).to.be.false;
	expect(isNumberGreaterThan(3.14, 8)).to.be.false;
	expect(isNumberGreaterThan(8, 8)).to.be.false;
	expect(isNumberGreaterThan(Number.NaN, 8)).to.be.false;
	expect(isNumberGreaterThan(9_007_199_254_740_991n, 8)).to.be.false;
	expect(isNumberGreaterThan(new Object(9_007_199_254_740_991n), 8)).to.be.false;
	expect(isNumberGreaterThan({}, 8)).to.be.false;
	expect(isNumberGreaterThan({
		a: 'hello',
		b: 'world',
		c: '!',
	}, 8)).to.be.false;
	expect(isNumberGreaterThan({
		a: 'hello',
		b: 'world',
		c: 1,
	}, 8)).to.be.false;
	expect(isNumberGreaterThan(globalThis, 8)).to.be.false;
	expect(isNumberGreaterThan(class {
		hello() {
			return 'hello world';
		}
	}, 8)).to.be.false;
	expect(isNumberGreaterThan(new (class {
		hello() {
			return 'hello world';
		}
	})(), 8)).to.be.false;
	expect(isNumberGreaterThan(/hello/, 8)).to.be.false;
	expect(isNumberGreaterThan(new Date(), 8)).to.be.false;
	expect(isNumberGreaterThan(Date, 8)).to.be.false;
	expect(isNumberGreaterThan(() => 0, 8)).to.be.false;
	expect(isNumberGreaterThan(async () => 0, 8)).to.be.false;
	expect(isNumberGreaterThan((async () => 0)(), 8)).to.be.false;
	expect(isNumberGreaterThan({ then: () => 0 }, 8)).to.be.false;
	expect(isNumberGreaterThan(function * () {
		yield 0;
	}, 8)).to.be.false;
	expect(isNumberGreaterThan((function * () {
		yield 0;
	})(), 8)).to.be.false;
	expect(isNumberGreaterThan(async function * () {
		yield 0;
	}, 8)).to.be.false;
	expect(isNumberGreaterThan((async function * () {
		yield 0;
	})(), 8)).to.be.false;
	expect(isNumberGreaterThan(new Error('error'), 8)).to.be.false;
	expect(isNumberGreaterThan(new Promise((resolve) => {
		resolve(0);
	}), 8)).to.be.false;
	expect(isNumberGreaterThan(Symbol(0), 8)).to.be.false;
});
