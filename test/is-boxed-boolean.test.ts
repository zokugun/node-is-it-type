import { expect, it } from 'vitest';
import { isBoxedBoolean } from '../src/index.js';

it('isBoxedBoolean(x)', function () {
	// true
	expect(isBoxedBoolean(new Object(true))).to.be.true;

	// false
	expect(isBoxedBoolean([])).to.be.false;
	expect(isBoxedBoolean([1, 2, 3])).to.be.false;
	expect(isBoxedBoolean([1, 2, '3'])).to.be.false;
	expect(isBoxedBoolean(arguments)).to.be.false;
	expect(isBoxedBoolean(null)).to.be.false;
	expect(isBoxedBoolean(undefined)).to.be.false;
	expect(isBoxedBoolean(false)).to.be.false;
	expect(isBoxedBoolean('')).to.be.false;
	expect(isBoxedBoolean('   ')).to.be.false;
	expect(isBoxedBoolean('hello world')).to.be.false;
	expect(isBoxedBoolean(new Object('hello world'))).to.be.false;
	expect(isBoxedBoolean(42)).to.be.false;
	expect(isBoxedBoolean(new Object(42))).to.be.false;
	expect(isBoxedBoolean('42')).to.be.false;
	expect(isBoxedBoolean(-42)).to.be.false;
	expect(isBoxedBoolean(-8)).to.be.false;
	expect(isBoxedBoolean(-3.14)).to.be.false;
	expect(isBoxedBoolean(0)).to.be.false;
	expect(isBoxedBoolean(3.14)).to.be.false;
	expect(isBoxedBoolean(8)).to.be.false;
	expect(isBoxedBoolean(9_007_199_254_740_991n)).to.be.false;
	expect(isBoxedBoolean(new Object(9_007_199_254_740_991n))).to.be.false;
	expect(isBoxedBoolean(Infinity)).to.be.false;
	expect(isBoxedBoolean(Number.NaN)).to.be.false;
	expect(isBoxedBoolean({})).to.be.false;
	expect(isBoxedBoolean({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isBoxedBoolean({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isBoxedBoolean(globalThis)).to.be.false;
	expect(isBoxedBoolean(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isBoxedBoolean(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isBoxedBoolean(/hello/)).to.be.false;
	expect(isBoxedBoolean(new Date())).to.be.false;
	expect(isBoxedBoolean(Date)).to.be.false;
	expect(isBoxedBoolean(() => 0)).to.be.false;
	expect(isBoxedBoolean(async () => 0)).to.be.false;
	expect(isBoxedBoolean(function * () {
		yield 0;
	})).to.be.false;
	expect(isBoxedBoolean(new Error('error'))).to.be.false;
	expect(isBoxedBoolean(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isBoxedBoolean(Symbol(0))).to.be.false;
});
