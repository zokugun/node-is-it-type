import { expect, it } from 'vitest';
import { isAsyncFunction } from '../src/index.js';

it('isAsyncFunction(x)', function () {
	// true
	expect(isAsyncFunction(async () => 0)).to.be.true;

	// false
	expect(isAsyncFunction([])).to.be.false;
	expect(isAsyncFunction([1, 2, 3])).to.be.false;
	expect(isAsyncFunction([1, 2, '3'])).to.be.false;
	expect(isAsyncFunction(arguments)).to.be.false;
	expect(isAsyncFunction(null)).to.be.false;
	expect(isAsyncFunction(undefined)).to.be.false;
	expect(isAsyncFunction(false)).to.be.false;
	expect(isAsyncFunction(new Object(true))).to.be.false;
	expect(isAsyncFunction('')).to.be.false;
	expect(isAsyncFunction('   ')).to.be.false;
	expect(isAsyncFunction('hello world')).to.be.false;
	expect(isAsyncFunction(new Object('hello world'))).to.be.false;
	expect(isAsyncFunction(42)).to.be.false;
	expect(isAsyncFunction(new Object(42))).to.be.false;
	expect(isAsyncFunction('42')).to.be.false;
	expect(isAsyncFunction(-42)).to.be.false;
	expect(isAsyncFunction(-8)).to.be.false;
	expect(isAsyncFunction(-3.14)).to.be.false;
	expect(isAsyncFunction(0)).to.be.false;
	expect(isAsyncFunction(3.14)).to.be.false;
	expect(isAsyncFunction(8)).to.be.false;
	expect(isAsyncFunction(9_007_199_254_740_991n)).to.be.false;
	expect(isAsyncFunction(BigInt(9_007_199_254_740_991n))).to.be.false;
	expect(isAsyncFunction({})).to.be.false;
	expect(isAsyncFunction({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isAsyncFunction({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isAsyncFunction(globalThis)).to.be.false;
	expect(isAsyncFunction(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isAsyncFunction(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isAsyncFunction(/hello/)).to.be.false;
	expect(isAsyncFunction(new Date())).to.be.false;
	expect(isAsyncFunction(Date)).to.be.false;
	expect(isAsyncFunction(() => 0)).to.be.false;
	expect(isAsyncFunction(new Error('error'))).to.be.false;
	expect(isAsyncFunction(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isAsyncFunction(Symbol(0))).to.be.false;
});
