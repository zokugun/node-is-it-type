import { expect, it } from 'vitest';
import { isNullable } from '../src/index.js';

it('isNullable(x)', function () {
	// true
	expect(isNullable(null)).to.be.true;
	expect(isNullable(undefined)).to.be.true;

	// false
	expect(isNullable([])).to.be.false;
	expect(isNullable([1, 2, 3])).to.be.false;
	expect(isNullable([1, 2, '3'])).to.be.false;
	expect(isNullable(arguments)).to.be.false;
	expect(isNullable(false)).to.be.false;
	expect(isNullable(new Object(true))).to.be.false;
	expect(isNullable('')).to.be.false;
	expect(isNullable('   ')).to.be.false;
	expect(isNullable('hello world')).to.be.false;
	expect(isNullable(new Object('hello world'))).to.be.false;
	expect(isNullable(42)).to.be.false;
	expect(isNullable(new Object(42))).to.be.false;
	expect(isNullable('42')).to.be.false;
	expect(isNullable(-42)).to.be.false;
	expect(isNullable(-8)).to.be.false;
	expect(isNullable(-3.14)).to.be.false;
	expect(isNullable(0)).to.be.false;
	expect(isNullable(3.14)).to.be.false;
	expect(isNullable(8)).to.be.false;
	expect(isNullable(9_007_199_254_740_991n)).to.be.false;
	expect(isNullable(new Object(9_007_199_254_740_991n))).to.be.false;
	expect(isNullable(Infinity)).to.be.false;
	expect(isNullable(Number.NaN)).to.be.false;
	expect(isNullable({})).to.be.false;
	expect(isNullable({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isNullable({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isNullable(globalThis)).to.be.false;
	expect(isNullable(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isNullable(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isNullable(/hello/)).to.be.false;
	expect(isNullable(new Date())).to.be.false;
	expect(isNullable(Date)).to.be.false;
	expect(isNullable(() => 0)).to.be.false;
	expect(isNullable(async () => 0)).to.be.false;
	expect(isNullable((async () => 0)())).to.be.false;
	expect(isNullable({ then: () => 0 })).to.be.false;
	expect(isNullable(function * () {
		yield 0;
	})).to.be.false;
	expect(isNullable((function * () {
		yield 0;
	})())).to.be.false;
	expect(isNullable(async function * () {
		yield 0;
	})).to.be.false;
	expect(isNullable((async function * () {
		yield 0;
	})())).to.be.false;
	expect(isNullable(new Error('error'))).to.be.false;
	expect(isNullable(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isNullable(Symbol(0))).to.be.false;
});
