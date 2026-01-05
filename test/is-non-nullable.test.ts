import { expect, it } from 'vitest';
import { isNonNullable } from '../src/index.js';

it('isNonNullable(x)', function () {
	// true
	expect(isNonNullable([])).to.be.true;
	expect(isNonNullable([1, 2, 3])).to.be.true;
	expect(isNonNullable([1, 2, '3'])).to.be.true;
	expect(isNonNullable(arguments)).to.be.true;
	expect(isNonNullable(false)).to.be.true;
	expect(isNonNullable(new Object(true))).to.be.true;
	expect(isNonNullable('')).to.be.true;
	expect(isNonNullable('   ')).to.be.true;
	expect(isNonNullable('hello world')).to.be.true;
	expect(isNonNullable(new Object('hello world'))).to.be.true;
	expect(isNonNullable(42)).to.be.true;
	expect(isNonNullable(new Object(42))).to.be.true;
	expect(isNonNullable('42')).to.be.true;
	expect(isNonNullable(-42)).to.be.true;
	expect(isNonNullable(-8)).to.be.true;
	expect(isNonNullable(-3.14)).to.be.true;
	expect(isNonNullable(0)).to.be.true;
	expect(isNonNullable(3.14)).to.be.true;
	expect(isNonNullable(8)).to.be.true;
	expect(isNonNullable(9_007_199_254_740_991n)).to.be.true;
	expect(isNonNullable(new Object(9_007_199_254_740_991n))).to.be.true;
	expect(isNonNullable(Infinity)).to.be.true;
	expect(isNonNullable(Number.NaN)).to.be.true;
	expect(isNonNullable({})).to.be.true;
	expect(isNonNullable({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.true;
	expect(isNonNullable({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.true;
	expect(isNonNullable(globalThis)).to.be.true;
	expect(isNonNullable(class {
		hello() {
			return 'hello world';
		}
	})).to.be.true;
	expect(isNonNullable(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.true;
	expect(isNonNullable(/hello/)).to.be.true;
	expect(isNonNullable(new Date())).to.be.true;
	expect(isNonNullable(Date)).to.be.true;
	expect(isNonNullable(() => 0)).to.be.true;
	expect(isNonNullable(async () => 0)).to.be.true;
	expect(isNonNullable((async () => 0)())).to.be.true;
	expect(isNonNullable({ then: () => 0 })).to.be.true;
	expect(isNonNullable(function * () {
		yield 0;
	})).to.be.true;
	expect(isNonNullable((function * () {
		yield 0;
	})())).to.be.true;
	expect(isNonNullable(async function * () {
		yield 0;
	})).to.be.true;
	expect(isNonNullable((async function * () {
		yield 0;
	})())).to.be.true;
	expect(isNonNullable(new Error('error'))).to.be.true;
	expect(isNonNullable(new Promise((resolve) => {
		resolve(0);
	}))).to.be.true;
	expect(isNonNullable(Symbol(0))).to.be.true;

	// false
	expect(isNonNullable(null)).to.be.false;
	expect(isNonNullable(undefined)).to.be.false;
});
