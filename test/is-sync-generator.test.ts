import { expect, it } from 'vitest';
import { isSyncGenerator } from '../src/index.js';

it('isSyncGenerator(x)', function () {
	// true
	expect(isSyncGenerator(function * () {
		yield 0;
	})).to.be.true;

	// false
	expect(isSyncGenerator([])).to.be.false;
	expect(isSyncGenerator([1, 2, 3])).to.be.false;
	expect(isSyncGenerator([1, 2, '3'])).to.be.false;
	expect(isSyncGenerator(arguments)).to.be.false;
	expect(isSyncGenerator(null)).to.be.false;
	expect(isSyncGenerator(undefined)).to.be.false;
	expect(isSyncGenerator(false)).to.be.false;
	expect(isSyncGenerator(new Object(true))).to.be.false;
	expect(isSyncGenerator('')).to.be.false;
	expect(isSyncGenerator('   ')).to.be.false;
	expect(isSyncGenerator('hello world')).to.be.false;
	expect(isSyncGenerator(new Object('hello world'))).to.be.false;
	expect(isSyncGenerator(42)).to.be.false;
	expect(isSyncGenerator(new Object(42))).to.be.false;
	expect(isSyncGenerator('42')).to.be.false;
	expect(isSyncGenerator(-42)).to.be.false;
	expect(isSyncGenerator(-8)).to.be.false;
	expect(isSyncGenerator(-3.14)).to.be.false;
	expect(isSyncGenerator(0)).to.be.false;
	expect(isSyncGenerator(3.14)).to.be.false;
	expect(isSyncGenerator(8)).to.be.false;
	expect(isSyncGenerator(9_007_199_254_740_991n)).to.be.false;
	expect(isSyncGenerator(new Object(9_007_199_254_740_991n))).to.be.false;
	expect(isSyncGenerator(Infinity)).to.be.false;
	expect(isSyncGenerator(Number.NaN)).to.be.false;
	expect(isSyncGenerator({})).to.be.false;
	expect(isSyncGenerator({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isSyncGenerator({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isSyncGenerator(globalThis)).to.be.false;
	expect(isSyncGenerator(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isSyncGenerator(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isSyncGenerator(/hello/)).to.be.false;
	expect(isSyncGenerator(new Date())).to.be.false;
	expect(isSyncGenerator(Date)).to.be.false;
	expect(isSyncGenerator(() => 0)).to.be.false;
	expect(isSyncGenerator(async () => 0)).to.be.false;
	expect(isSyncGenerator((async () => 0)())).to.be.false;
	expect(isSyncGenerator({ then: () => 0 })).to.be.false;
	expect(isSyncGenerator((function * () {
		yield 0;
	})())).to.be.false;
	expect(isSyncGenerator(async function * () {
		yield 0;
	})).to.be.false;
	expect(isSyncGenerator((async function * () {
		yield 0;
	})())).to.be.false;
	expect(isSyncGenerator(new Error('error'))).to.be.false;
	expect(isSyncGenerator(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isSyncGenerator(Symbol(0))).to.be.false;
});
