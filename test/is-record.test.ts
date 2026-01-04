import { expect, it } from 'vitest';
import { isRecord } from '../src/index.js';

it('isRecord(x)', function () {
	// true
	expect(isRecord({})).to.be.true;
	expect(isRecord({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.true;
	expect(isRecord({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.true;
	expect(isRecord(globalThis)).to.be.true;

	// false
	expect(isRecord([])).to.be.false;
	expect(isRecord([1, 2, 3])).to.be.false;
	expect(isRecord([1, 2, '3'])).to.be.false;
	expect(isRecord(arguments)).to.be.false;
	expect(isRecord(null)).to.be.false;
	expect(isRecord(undefined)).to.be.false;
	expect(isRecord(false)).to.be.false;
	expect(isRecord(new Object(true))).to.be.false;
	expect(isRecord('')).to.be.false;
	expect(isRecord('   ')).to.be.false;
	expect(isRecord('hello world')).to.be.false;
	expect(isRecord(new Object('hello world'))).to.be.false;
	expect(isRecord(42)).to.be.false;
	expect(isRecord(new Object(42))).to.be.false;
	expect(isRecord('42')).to.be.false;
	expect(isRecord(-42)).to.be.false;
	expect(isRecord(-8)).to.be.false;
	expect(isRecord(-3.14)).to.be.false;
	expect(isRecord(0)).to.be.false;
	expect(isRecord(3.14)).to.be.false;
	expect(isRecord(8)).to.be.false;
	expect(isRecord(9_007_199_254_740_991n)).to.be.false;
	expect(isRecord(new Object(9_007_199_254_740_991n))).to.be.false;
	expect(isRecord(Infinity)).to.be.false;
	expect(isRecord(Number.NaN)).to.be.false;
	expect(isRecord(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isRecord(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isRecord(/hello/)).to.be.false;
	expect(isRecord(new Date())).to.be.false;
	expect(isRecord(Date)).to.be.false;
	expect(isRecord(() => 0)).to.be.false;
	expect(isRecord(async () => 0)).to.be.false;
	expect(isRecord(function * () {
		yield 0;
	})).to.be.false;
	expect(isRecord(new Error('error'))).to.be.false;
	expect(isRecord(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isRecord(Symbol(0))).to.be.false;
});
