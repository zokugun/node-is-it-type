import { expect, it } from 'vitest';
import { isIntegerGreaterThan } from '../src/index.js';

it('isIntegerGreaterThan(x)', function () {
	// true
	expect(isIntegerGreaterThan(42, 8)).to.be.true;

	// false
	expect(isIntegerGreaterThan([], 8)).to.be.false;
	expect(isIntegerGreaterThan([1, 2, 3], 8)).to.be.false;
	expect(isIntegerGreaterThan([1, 2, '3'], 8)).to.be.false;
	expect(isIntegerGreaterThan(arguments, 8)).to.be.false;
	expect(isIntegerGreaterThan(null, 8)).to.be.false;
	expect(isIntegerGreaterThan(undefined, 8)).to.be.false;
	expect(isIntegerGreaterThan(false, 8)).to.be.false;
	expect(isIntegerGreaterThan(new Object(true), 8)).to.be.false;
	expect(isIntegerGreaterThan('', 8)).to.be.false;
	expect(isIntegerGreaterThan('   ', 8)).to.be.false;
	expect(isIntegerGreaterThan('hello world', 8)).to.be.false;
	expect(isIntegerGreaterThan(new Object('hello world'), 8)).to.be.false;
	expect(isIntegerGreaterThan(new Object(42), 8)).to.be.false;
	expect(isIntegerGreaterThan('42', 8)).to.be.false;
	expect(isIntegerGreaterThan(-42, 8)).to.be.false;
	expect(isIntegerGreaterThan(-8, 8)).to.be.false;
	expect(isIntegerGreaterThan(-3.14, 8)).to.be.false;
	expect(isIntegerGreaterThan(0, 8)).to.be.false;
	expect(isIntegerGreaterThan(3.14, 8)).to.be.false;
	expect(isIntegerGreaterThan(8, 8)).to.be.false;
	expect(isIntegerGreaterThan(Infinity, 8)).to.be.false;
	expect(isIntegerGreaterThan(Number.NaN, 8)).to.be.false;
	expect(isIntegerGreaterThan(9_007_199_254_740_991n, 8)).to.be.false;
	expect(isIntegerGreaterThan(new Object(9_007_199_254_740_991n), 8)).to.be.false;
	expect(isIntegerGreaterThan({}, 8)).to.be.false;
	expect(isIntegerGreaterThan({
		a: 'hello',
		b: 'world',
		c: '!',
	}, 8)).to.be.false;
	expect(isIntegerGreaterThan({
		a: 'hello',
		b: 'world',
		c: 1,
	}, 8)).to.be.false;
	expect(isIntegerGreaterThan(globalThis, 8)).to.be.false;
	expect(isIntegerGreaterThan(class {
		hello() {
			return 'hello world';
		}
	}, 8)).to.be.false;
	expect(isIntegerGreaterThan(new (class {
		hello() {
			return 'hello world';
		}
	})(), 8)).to.be.false;
	expect(isIntegerGreaterThan(/hello/, 8)).to.be.false;
	expect(isIntegerGreaterThan(new Date(), 8)).to.be.false;
	expect(isIntegerGreaterThan(Date, 8)).to.be.false;
	expect(isIntegerGreaterThan(() => 0, 8)).to.be.false;
	expect(isIntegerGreaterThan(async () => 0, 8)).to.be.false;
	expect(isIntegerGreaterThan(function * () {
		yield 0;
	}, 8)).to.be.false;
	expect(isIntegerGreaterThan(new Error('error'), 8)).to.be.false;
	expect(isIntegerGreaterThan(new Promise((resolve) => {
		resolve(0);
	}), 8)).to.be.false;
	expect(isIntegerGreaterThan(Symbol(0), 8)).to.be.false;
});
