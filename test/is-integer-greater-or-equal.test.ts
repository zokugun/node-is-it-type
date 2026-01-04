import { expect, it } from 'vitest';
import { isIntegerGreaterOrEqual } from '../src/index.js';

it('isIntegerGreaterOrEqual(x)', function () {
	// true
	expect(isIntegerGreaterOrEqual(8, 8)).to.be.true;
	expect(isIntegerGreaterOrEqual(42, 8)).to.be.true;

	// false
	expect(isIntegerGreaterOrEqual([], 8)).to.be.false;
	expect(isIntegerGreaterOrEqual([1, 2, 3], 8)).to.be.false;
	expect(isIntegerGreaterOrEqual([1, 2, '3'], 8)).to.be.false;
	expect(isIntegerGreaterOrEqual(arguments, 8)).to.be.false;
	expect(isIntegerGreaterOrEqual(null, 8)).to.be.false;
	expect(isIntegerGreaterOrEqual(undefined, 8)).to.be.false;
	expect(isIntegerGreaterOrEqual(false, 8)).to.be.false;
	expect(isIntegerGreaterOrEqual(new Object(true), 8)).to.be.false;
	expect(isIntegerGreaterOrEqual('', 8)).to.be.false;
	expect(isIntegerGreaterOrEqual('   ', 8)).to.be.false;
	expect(isIntegerGreaterOrEqual('hello world', 8)).to.be.false;
	expect(isIntegerGreaterOrEqual(new Object('hello world'), 8)).to.be.false;
	expect(isIntegerGreaterOrEqual(new Object(42), 8)).to.be.false;
	expect(isIntegerGreaterOrEqual('42', 8)).to.be.false;
	expect(isIntegerGreaterOrEqual(-42, 8)).to.be.false;
	expect(isIntegerGreaterOrEqual(-8, 8)).to.be.false;
	expect(isIntegerGreaterOrEqual(-3.14, 8)).to.be.false;
	expect(isIntegerGreaterOrEqual(0, 8)).to.be.false;
	expect(isIntegerGreaterOrEqual(3.14, 8)).to.be.false;
	expect(isIntegerGreaterOrEqual(Infinity, 8)).to.be.false;
	expect(isIntegerGreaterOrEqual(Number.NaN, 8)).to.be.false;
	expect(isIntegerGreaterOrEqual(9_007_199_254_740_991n, 8)).to.be.false;
	expect(isIntegerGreaterOrEqual(new Object(9_007_199_254_740_991n), 8)).to.be.false;
	expect(isIntegerGreaterOrEqual({}, 8)).to.be.false;
	expect(isIntegerGreaterOrEqual({
		a: 'hello',
		b: 'world',
		c: '!',
	}, 8)).to.be.false;
	expect(isIntegerGreaterOrEqual({
		a: 'hello',
		b: 'world',
		c: 1,
	}, 8)).to.be.false;
	expect(isIntegerGreaterOrEqual(globalThis, 8)).to.be.false;
	expect(isIntegerGreaterOrEqual(class {
		hello() {
			return 'hello world';
		}
	}, 8)).to.be.false;
	expect(isIntegerGreaterOrEqual(new (class {
		hello() {
			return 'hello world';
		}
	})(), 8)).to.be.false;
	expect(isIntegerGreaterOrEqual(/hello/, 8)).to.be.false;
	expect(isIntegerGreaterOrEqual(new Date(), 8)).to.be.false;
	expect(isIntegerGreaterOrEqual(Date, 8)).to.be.false;
	expect(isIntegerGreaterOrEqual(() => 0, 8)).to.be.false;
	expect(isIntegerGreaterOrEqual(async () => 0, 8)).to.be.false;
	expect(isIntegerGreaterOrEqual(function * () {
		yield 0;
	}, 8)).to.be.false;
	expect(isIntegerGreaterOrEqual(new Error('error'), 8)).to.be.false;
	expect(isIntegerGreaterOrEqual(new Promise((resolve) => {
		resolve(0);
	}), 8)).to.be.false;
	expect(isIntegerGreaterOrEqual(Symbol(0), 8)).to.be.false;
});
