import { expect, it } from 'vitest';
import { isBoxedPrimitive } from '../src/index.js';

it('isBoxedPrimitive(x)', function () {
	// true
	expect(isBoxedPrimitive(new Object(true))).to.be.true;
	expect(isBoxedPrimitive(new Object('hello world'))).to.be.true;
	expect(isBoxedPrimitive(new Object(42))).to.be.true;
	expect(isBoxedPrimitive(new Object(9_007_199_254_740_991n))).to.be.true;

	// false
	expect(isBoxedPrimitive([])).to.be.false;
	expect(isBoxedPrimitive([1, 2, 3])).to.be.false;
	expect(isBoxedPrimitive([1, 2, '3'])).to.be.false;
	expect(isBoxedPrimitive(arguments)).to.be.false;
	expect(isBoxedPrimitive(null)).to.be.false;
	expect(isBoxedPrimitive(undefined)).to.be.false;
	expect(isBoxedPrimitive(false)).to.be.false;
	expect(isBoxedPrimitive('')).to.be.false;
	expect(isBoxedPrimitive('   ')).to.be.false;
	expect(isBoxedPrimitive('hello world')).to.be.false;
	expect(isBoxedPrimitive(42)).to.be.false;
	expect(isBoxedPrimitive('42')).to.be.false;
	expect(isBoxedPrimitive(9_007_199_254_740_991n)).to.be.false;
	expect(isBoxedPrimitive(Infinity)).to.be.false;
	expect(isBoxedPrimitive(Number.NaN)).to.be.false;
	expect(isBoxedPrimitive({})).to.be.false;
	expect(isBoxedPrimitive({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isBoxedPrimitive({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isBoxedPrimitive(globalThis)).to.be.false;
	expect(isBoxedPrimitive(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isBoxedPrimitive(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isBoxedPrimitive(/hello/)).to.be.false;
	expect(isBoxedPrimitive(new Date())).to.be.false;
	expect(isBoxedPrimitive(Date)).to.be.false;
	expect(isBoxedPrimitive(() => 0)).to.be.false;
	expect(isBoxedPrimitive(async () => 0)).to.be.false;
	expect(isBoxedPrimitive(function * () {
		yield 0;
	})).to.be.false;
	expect(isBoxedPrimitive(new Error('error'))).to.be.false;
	expect(isBoxedPrimitive(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isBoxedPrimitive(Symbol(0))).to.be.false;
});
