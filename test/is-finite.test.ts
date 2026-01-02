import { expect, it } from 'vitest';
import { isFinite } from '../src/index.js';

it('isFinite(x)', function () {
	// true
	expect(isFinite(42)).to.be.true;
	expect(isFinite(new Object(42))).to.be.true;
	expect(isFinite(9_007_199_254_740_991n)).to.be.true;
	expect(isFinite(new Object(9_007_199_254_740_991n))).to.be.true;

	// false
	expect(isFinite([])).to.be.false;
	expect(isFinite([1, 2, 3])).to.be.false;
	expect(isFinite([1, 2, '3'])).to.be.false;
	expect(isFinite(arguments)).to.be.false;
	expect(isFinite(null)).to.be.false;
	expect(isFinite(undefined)).to.be.false;
	expect(isFinite(false)).to.be.false;
	expect(isFinite(new Object(true))).to.be.false;
	expect(isFinite('')).to.be.false;
	expect(isFinite('   ')).to.be.false;
	expect(isFinite('hello world')).to.be.false;
	expect(isFinite(new Object('hello world'))).to.be.false;
	expect(isFinite('42')).to.be.false;
	expect(isFinite(Infinity)).to.be.false;
	expect(isFinite(Number.NaN)).to.be.false;
	expect(isFinite({})).to.be.false;
	expect(isFinite({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isFinite({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isFinite(globalThis)).to.be.false;
	expect(isFinite(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isFinite(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isFinite(/hello/)).to.be.false;
	expect(isFinite(new Date())).to.be.false;
	expect(isFinite(Date)).to.be.false;
	expect(isFinite(() => 0)).to.be.false;
	expect(isFinite(async () => 0)).to.be.false;
	expect(isFinite(function * () {
		yield 0;
	})).to.be.false;
	expect(isFinite(new Error('error'))).to.be.false;
	expect(isFinite(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isFinite(Symbol(0))).to.be.false;
});
