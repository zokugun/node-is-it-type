import { expect, it } from 'vitest';
import { isActualObject } from '../src/index.js';

it('isActualObject(x)', function () {
	// true
	expect(isActualObject([])).to.be.true;
	expect(isActualObject([1, 2, 3])).to.be.true;
	expect(isActualObject([1, 2, '3'])).to.be.true;
	expect(isActualObject(arguments)).to.be.true;
	expect(isActualObject(new Object(true))).to.be.true;
	expect(isActualObject(new Object('hello world'))).to.be.true;
	expect(isActualObject(new Object(42))).to.be.true;
	expect(isActualObject(new Object(9_007_199_254_740_991n))).to.be.true;
	expect(isActualObject({})).to.be.true;
	expect(isActualObject({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.true;
	expect(isActualObject({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.true;
	expect(isActualObject(globalThis)).to.be.true;
	expect(isActualObject(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.true;
	expect(isActualObject(/hello/)).to.be.true;
	expect(isActualObject(new Date())).to.be.true;
	expect(isActualObject(new Error('error'))).to.be.true;
	expect(isActualObject(new Promise((resolve) => {
		resolve(0);
	}))).to.be.true;

	// false
	expect(isActualObject(null)).to.be.false;
	expect(isActualObject(undefined)).to.be.false;
	expect(isActualObject(false)).to.be.false;
	expect(isActualObject('')).to.be.false;
	expect(isActualObject('   ')).to.be.false;
	expect(isActualObject('hello world')).to.be.false;
	expect(isActualObject(42)).to.be.false;
	expect(isActualObject('42')).to.be.false;
	expect(isActualObject(9_007_199_254_740_991n)).to.be.false;
	expect(isActualObject(Infinity)).to.be.false;
	expect(isActualObject(Number.NaN)).to.be.false;
	expect(isActualObject(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isActualObject(Date)).to.be.false;
	expect(isActualObject(() => 0)).to.be.false;
	expect(isActualObject(async () => 0)).to.be.false;
	expect(isActualObject(function * () {
		yield 0;
	})).to.be.false;
	expect(isActualObject(Symbol(0))).to.be.false;
});
