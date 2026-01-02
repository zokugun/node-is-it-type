import { expect, it } from 'vitest';
import { isSymbol } from '../src/index.js';

it('isSymbol(x)', function () {
	// true
	expect(isSymbol(Symbol(0))).to.be.true;

	// false
	expect(isSymbol([])).to.be.false;
	expect(isSymbol([1, 2, 3])).to.be.false;
	expect(isSymbol([1, 2, '3'])).to.be.false;
	expect(isSymbol(arguments)).to.be.false;
	expect(isSymbol(null)).to.be.false;
	expect(isSymbol(undefined)).to.be.false;
	expect(isSymbol(false)).to.be.false;
	expect(isSymbol(new Object(true))).to.be.false;
	expect(isSymbol('')).to.be.false;
	expect(isSymbol('   ')).to.be.false;
	expect(isSymbol('hello world')).to.be.false;
	expect(isSymbol(new Object('hello world'))).to.be.false;
	expect(isSymbol(42)).to.be.false;
	expect(isSymbol(new Object(42))).to.be.false;
	expect(isSymbol('42')).to.be.false;
	expect(isSymbol(9_007_199_254_740_991n)).to.be.false;
	expect(isSymbol(new Object(9_007_199_254_740_991n))).to.be.false;
	expect(isSymbol(Infinity)).to.be.false;
	expect(isSymbol(Number.NaN)).to.be.false;
	expect(isSymbol({})).to.be.false;
	expect(isSymbol({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isSymbol({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isSymbol(globalThis)).to.be.false;
	expect(isSymbol(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isSymbol(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isSymbol(/hello/)).to.be.false;
	expect(isSymbol(new Date())).to.be.false;
	expect(isSymbol(Date)).to.be.false;
	expect(isSymbol(() => 0)).to.be.false;
	expect(isSymbol(async () => 0)).to.be.false;
	expect(isSymbol(function * () {
		yield 0;
	})).to.be.false;
	expect(isSymbol(new Error('error'))).to.be.false;
	expect(isSymbol(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
});
