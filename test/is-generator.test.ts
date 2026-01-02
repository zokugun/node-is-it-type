import { expect, it } from 'vitest';
import { isGenerator } from '../src/index.js';

it('isGenerator(x)', function () {
	// true
	expect(isGenerator(function * () {
		yield 0;
	})).to.be.true;

	// false
	expect(isGenerator([])).to.be.false;
	expect(isGenerator([1, 2, 3])).to.be.false;
	expect(isGenerator([1, 2, '3'])).to.be.false;
	expect(isGenerator(arguments)).to.be.false;
	expect(isGenerator(null)).to.be.false;
	expect(isGenerator(undefined)).to.be.false;
	expect(isGenerator(false)).to.be.false;
	expect(isGenerator(new Object(true))).to.be.false;
	expect(isGenerator('')).to.be.false;
	expect(isGenerator('   ')).to.be.false;
	expect(isGenerator('hello world')).to.be.false;
	expect(isGenerator(new Object('hello world'))).to.be.false;
	expect(isGenerator(42)).to.be.false;
	expect(isGenerator(new Object(42))).to.be.false;
	expect(isGenerator('42')).to.be.false;
	expect(isGenerator(9_007_199_254_740_991n)).to.be.false;
	expect(isGenerator(new Object(9_007_199_254_740_991n))).to.be.false;
	expect(isGenerator(Infinity)).to.be.false;
	expect(isGenerator(Number.NaN)).to.be.false;
	expect(isGenerator({})).to.be.false;
	expect(isGenerator({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isGenerator({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isGenerator(globalThis)).to.be.false;
	expect(isGenerator(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isGenerator(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isGenerator(/hello/)).to.be.false;
	expect(isGenerator(new Date())).to.be.false;
	expect(isGenerator(Date)).to.be.false;
	expect(isGenerator(() => 0)).to.be.false;
	expect(isGenerator(async () => 0)).to.be.false;
	expect(isGenerator(new Error('error'))).to.be.false;
	expect(isGenerator(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isGenerator(Symbol(0))).to.be.false;
});
