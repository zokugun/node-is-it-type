import { expect, it } from 'vitest';
import { isNull } from '../src/index.js';

it('isNull(x)', function () {
	// true
	expect(isNull(null)).to.be.true;

	// false
	expect(isNull([])).to.be.false;
	expect(isNull([1, 2, 3])).to.be.false;
	expect(isNull([1, 2, '3'])).to.be.false;
	expect(isNull(arguments)).to.be.false;
	expect(isNull(undefined)).to.be.false;
	expect(isNull(false)).to.be.false;
	expect(isNull(new Object(true))).to.be.false;
	expect(isNull('')).to.be.false;
	expect(isNull('   ')).to.be.false;
	expect(isNull('hello world')).to.be.false;
	expect(isNull(new Object('hello world'))).to.be.false;
	expect(isNull(42)).to.be.false;
	expect(isNull(new Object(42))).to.be.false;
	expect(isNull('42')).to.be.false;
	expect(isNull(-42)).to.be.false;
	expect(isNull(-8)).to.be.false;
	expect(isNull(-3.14)).to.be.false;
	expect(isNull(0)).to.be.false;
	expect(isNull(3.14)).to.be.false;
	expect(isNull(8)).to.be.false;
	expect(isNull(9_007_199_254_740_991n)).to.be.false;
	expect(isNull(new Object(9_007_199_254_740_991n))).to.be.false;
	expect(isNull(Infinity)).to.be.false;
	expect(isNull(Number.NaN)).to.be.false;
	expect(isNull({})).to.be.false;
	expect(isNull({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isNull({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isNull(globalThis)).to.be.false;
	expect(isNull(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isNull(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isNull(/hello/)).to.be.false;
	expect(isNull(new Date())).to.be.false;
	expect(isNull(Date)).to.be.false;
	expect(isNull(() => 0)).to.be.false;
	expect(isNull(async () => 0)).to.be.false;
	expect(isNull((async () => 0)())).to.be.false;
	expect(isNull({ then: () => 0 })).to.be.false;
	expect(isNull(function * () {
		yield 0;
	})).to.be.false;
	expect(isNull((function * () {
		yield 0;
	})())).to.be.false;
	expect(isNull(async function * () {
		yield 0;
	})).to.be.false;
	expect(isNull((async function * () {
		yield 0;
	})())).to.be.false;
	expect(isNull(new Error('error'))).to.be.false;
	expect(isNull(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isNull(Symbol(0))).to.be.false;
});
