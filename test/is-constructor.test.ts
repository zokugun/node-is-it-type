import { expect, it } from 'vitest';
import { isConstructor } from '../src/index.js';

it('isConstructor(x)', function () {
	// true
	expect(isConstructor(Date)).to.be.true;
	expect(isConstructor(class {
		hello() {
			return 'hello world';
		}
	})).to.be.true;

	// false
	expect(isConstructor([])).to.be.false;
	expect(isConstructor([1, 2, 3])).to.be.false;
	expect(isConstructor([1, 2, '3'])).to.be.false;
	expect(isConstructor(arguments)).to.be.false;
	expect(isConstructor(null)).to.be.false;
	expect(isConstructor(undefined)).to.be.false;
	expect(isConstructor(false)).to.be.false;
	expect(isConstructor(new Object(true))).to.be.false;
	expect(isConstructor('')).to.be.false;
	expect(isConstructor('   ')).to.be.false;
	expect(isConstructor('hello world')).to.be.false;
	expect(isConstructor(new Object('hello world'))).to.be.false;
	expect(isConstructor(42)).to.be.false;
	expect(isConstructor(new Object(42))).to.be.false;
	expect(isConstructor('42')).to.be.false;
	expect(isConstructor(-42)).to.be.false;
	expect(isConstructor(-8)).to.be.false;
	expect(isConstructor(-3.14)).to.be.false;
	expect(isConstructor(0)).to.be.false;
	expect(isConstructor(3.14)).to.be.false;
	expect(isConstructor(8)).to.be.false;
	expect(isConstructor(9_007_199_254_740_991n)).to.be.false;
	expect(isConstructor(new Object(9_007_199_254_740_991n))).to.be.false;
	expect(isConstructor(Infinity)).to.be.false;
	expect(isConstructor(Number.NaN)).to.be.false;
	expect(isConstructor({})).to.be.false;
	expect(isConstructor({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isConstructor({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isConstructor(globalThis)).to.be.false;
	expect(isConstructor(/hello/)).to.be.false;
	expect(isConstructor(new Date())).to.be.false;
	expect(isConstructor(() => 0)).to.be.false;
	expect(isConstructor(async () => 0)).to.be.false;
	expect(isConstructor((async () => 0)())).to.be.false;
	expect(isConstructor({ then: () => 0 })).to.be.false;
	expect(isConstructor(function * () {
		yield 0;
	})).to.be.false;
	expect(isConstructor((function * () {
		yield 0;
	})())).to.be.false;
	expect(isConstructor(async function * () {
		yield 0;
	})).to.be.false;
	expect(isConstructor((async function * () {
		yield 0;
	})())).to.be.false;
	expect(isConstructor(new Error('error'))).to.be.false;
	expect(isConstructor(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isConstructor(Symbol(0))).to.be.false;
});
