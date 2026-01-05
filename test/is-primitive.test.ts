import { expect, it } from 'vitest';
import { isPrimitive } from '../src/index.js';

it('isPrimitive(x)', function () {
	// true
	expect(isPrimitive(false)).to.be.true;
	expect(isPrimitive('')).to.be.true;
	expect(isPrimitive('   ')).to.be.true;
	expect(isPrimitive('hello world')).to.be.true;
	expect(isPrimitive(42)).to.be.true;
	expect(isPrimitive('42')).to.be.true;
	expect(isPrimitive(-42)).to.be.true;
	expect(isPrimitive(-8)).to.be.true;
	expect(isPrimitive(-3.14)).to.be.true;
	expect(isPrimitive(0)).to.be.true;
	expect(isPrimitive(3.14)).to.be.true;
	expect(isPrimitive(8)).to.be.true;
	expect(isPrimitive(9_007_199_254_740_991n)).to.be.true;
	expect(isPrimitive(Infinity)).to.be.true;
	expect(isPrimitive(Number.NaN)).to.be.true;

	// false
	expect(isPrimitive([])).to.be.false;
	expect(isPrimitive([1, 2, 3])).to.be.false;
	expect(isPrimitive([1, 2, '3'])).to.be.false;
	expect(isPrimitive(arguments)).to.be.false;
	expect(isPrimitive(null)).to.be.false;
	expect(isPrimitive(undefined)).to.be.false;
	expect(isPrimitive(new Object(true))).to.be.false;
	expect(isPrimitive(new Object('hello world'))).to.be.false;
	expect(isPrimitive(new Object(42))).to.be.false;
	expect(isPrimitive(new Object(9_007_199_254_740_991n))).to.be.false;
	expect(isPrimitive({})).to.be.false;
	expect(isPrimitive({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isPrimitive({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isPrimitive(globalThis)).to.be.false;
	expect(isPrimitive(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isPrimitive(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isPrimitive(/hello/)).to.be.false;
	expect(isPrimitive(new Date())).to.be.false;
	expect(isPrimitive(Date)).to.be.false;
	expect(isPrimitive(() => 0)).to.be.false;
	expect(isPrimitive(async () => 0)).to.be.false;
	expect(isPrimitive((async () => 0)())).to.be.false;
	expect(isPrimitive({ then: () => 0 })).to.be.false;
	expect(isPrimitive(function * () {
		yield 0;
	})).to.be.false;
	expect(isPrimitive((function * () {
		yield 0;
	})())).to.be.false;
	expect(isPrimitive(async function * () {
		yield 0;
	})).to.be.false;
	expect(isPrimitive((async function * () {
		yield 0;
	})())).to.be.false;
	expect(isPrimitive(new Error('error'))).to.be.false;
	expect(isPrimitive(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isPrimitive(Symbol(0))).to.be.false;
});
