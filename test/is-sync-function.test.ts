import { expect, it } from 'vitest';
import { isSyncFunction } from '../src/index.js';

it('isSyncFunction(x)', function () {
	// true
	expect(isSyncFunction(() => 0)).to.be.true;

	// false
	expect(isSyncFunction([])).to.be.false;
	expect(isSyncFunction([1, 2, 3])).to.be.false;
	expect(isSyncFunction([1, 2, '3'])).to.be.false;
	expect(isSyncFunction(arguments)).to.be.false;
	expect(isSyncFunction(null)).to.be.false;
	expect(isSyncFunction(undefined)).to.be.false;
	expect(isSyncFunction(false)).to.be.false;
	expect(isSyncFunction(new Object(true))).to.be.false;
	expect(isSyncFunction('')).to.be.false;
	expect(isSyncFunction('   ')).to.be.false;
	expect(isSyncFunction('hello world')).to.be.false;
	expect(isSyncFunction(new Object('hello world'))).to.be.false;
	expect(isSyncFunction(42)).to.be.false;
	expect(isSyncFunction(new Object(42))).to.be.false;
	expect(isSyncFunction('42')).to.be.false;
	expect(isSyncFunction(9_007_199_254_740_991n)).to.be.false;
	expect(isSyncFunction(new Object(9_007_199_254_740_991n))).to.be.false;
	expect(isSyncFunction(Infinity)).to.be.false;
	expect(isSyncFunction(Number.NaN)).to.be.false;
	expect(isSyncFunction({})).to.be.false;
	expect(isSyncFunction({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isSyncFunction({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isSyncFunction(globalThis)).to.be.false;
	expect(isSyncFunction(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isSyncFunction(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isSyncFunction(/hello/)).to.be.false;
	expect(isSyncFunction(new Date())).to.be.false;
	expect(isSyncFunction(Date)).to.be.false;
	expect(isSyncFunction(async () => 0)).to.be.false;
	expect(isSyncFunction(function * () {
		yield 0;
	})).to.be.false;
	expect(isSyncFunction(new Error('error'))).to.be.false;
	expect(isSyncFunction(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isSyncFunction(Symbol(0))).to.be.false;
});
