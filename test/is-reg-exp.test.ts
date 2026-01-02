import { expect, it } from 'vitest';
import { isRegExp } from '../src/index.js';

it('isRegExp(x)', function () {
	// true
	expect(isRegExp(/hello/)).to.be.true;

	// false
	expect(isRegExp([])).to.be.false;
	expect(isRegExp([1, 2, 3])).to.be.false;
	expect(isRegExp([1, 2, '3'])).to.be.false;
	expect(isRegExp(arguments)).to.be.false;
	expect(isRegExp(null)).to.be.false;
	expect(isRegExp(undefined)).to.be.false;
	expect(isRegExp(false)).to.be.false;
	expect(isRegExp(new Object(true))).to.be.false;
	expect(isRegExp('')).to.be.false;
	expect(isRegExp('   ')).to.be.false;
	expect(isRegExp('hello world')).to.be.false;
	expect(isRegExp(new Object('hello world'))).to.be.false;
	expect(isRegExp(42)).to.be.false;
	expect(isRegExp(new Object(42))).to.be.false;
	expect(isRegExp('42')).to.be.false;
	expect(isRegExp(9_007_199_254_740_991n)).to.be.false;
	expect(isRegExp(new Object(9_007_199_254_740_991n))).to.be.false;
	expect(isRegExp(Infinity)).to.be.false;
	expect(isRegExp(Number.NaN)).to.be.false;
	expect(isRegExp({})).to.be.false;
	expect(isRegExp({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isRegExp({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isRegExp(globalThis)).to.be.false;
	expect(isRegExp(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isRegExp(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isRegExp(new Date())).to.be.false;
	expect(isRegExp(Date)).to.be.false;
	expect(isRegExp(() => 0)).to.be.false;
	expect(isRegExp(async () => 0)).to.be.false;
	expect(isRegExp(function * () {
		yield 0;
	})).to.be.false;
	expect(isRegExp(new Error('error'))).to.be.false;
	expect(isRegExp(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isRegExp(Symbol(0))).to.be.false;
});
