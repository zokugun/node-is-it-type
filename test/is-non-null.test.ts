import { expect, it } from 'vitest';
import { isNonNull } from '../src/index.js';

it('isNonNull(x)', function () {
	// true
	expect(isNonNull([])).to.be.true;
	expect(isNonNull([1, 2, 3])).to.be.true;
	expect(isNonNull([1, 2, '3'])).to.be.true;
	expect(isNonNull(arguments)).to.be.true;
	expect(isNonNull(undefined)).to.be.true;
	expect(isNonNull(false)).to.be.true;
	expect(isNonNull(new Object(true))).to.be.true;
	expect(isNonNull('')).to.be.true;
	expect(isNonNull('   ')).to.be.true;
	expect(isNonNull('hello world')).to.be.true;
	expect(isNonNull(new Object('hello world'))).to.be.true;
	expect(isNonNull(42)).to.be.true;
	expect(isNonNull(new Object(42))).to.be.true;
	expect(isNonNull('42')).to.be.true;
	expect(isNonNull(-42)).to.be.true;
	expect(isNonNull(-8)).to.be.true;
	expect(isNonNull(-3.14)).to.be.true;
	expect(isNonNull(0)).to.be.true;
	expect(isNonNull(3.14)).to.be.true;
	expect(isNonNull(8)).to.be.true;
	expect(isNonNull(9_007_199_254_740_991n)).to.be.true;
	expect(isNonNull(new Object(9_007_199_254_740_991n))).to.be.true;
	expect(isNonNull(Infinity)).to.be.true;
	expect(isNonNull(Number.NaN)).to.be.true;
	expect(isNonNull({})).to.be.true;
	expect(isNonNull({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.true;
	expect(isNonNull({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.true;
	expect(isNonNull(globalThis)).to.be.true;
	expect(isNonNull(class {
		hello() {
			return 'hello world';
		}
	})).to.be.true;
	expect(isNonNull(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.true;
	expect(isNonNull(/hello/)).to.be.true;
	expect(isNonNull(new Date())).to.be.true;
	expect(isNonNull(Date)).to.be.true;
	expect(isNonNull(() => 0)).to.be.true;
	expect(isNonNull(async () => 0)).to.be.true;
	expect(isNonNull((async () => 0)())).to.be.true;
	expect(isNonNull({ then: () => 0 })).to.be.true;
	expect(isNonNull(function * () {
		yield 0;
	})).to.be.true;
	expect(isNonNull((function * () {
		yield 0;
	})())).to.be.true;
	expect(isNonNull(async function * () {
		yield 0;
	})).to.be.true;
	expect(isNonNull((async function * () {
		yield 0;
	})())).to.be.true;
	expect(isNonNull(new Error('error'))).to.be.true;
	expect(isNonNull(new Promise((resolve) => {
		resolve(0);
	}))).to.be.true;
	expect(isNonNull(Symbol(0))).to.be.true;

	// false
	expect(isNonNull(null)).to.be.false;
});
