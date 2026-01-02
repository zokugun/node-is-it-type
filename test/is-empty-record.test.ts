import { expect, it } from 'vitest';
import { isEmptyRecord } from '../src/index.js';

it('isEmptyRecord(x)', function () {
	// true
	expect(isEmptyRecord({})).to.be.true;

	// false
	expect(isEmptyRecord([])).to.be.false;
	expect(isEmptyRecord([1, 2, 3])).to.be.false;
	expect(isEmptyRecord([1, 2, '3'])).to.be.false;
	expect(isEmptyRecord(arguments)).to.be.false;
	expect(isEmptyRecord(null)).to.be.false;
	expect(isEmptyRecord(undefined)).to.be.false;
	expect(isEmptyRecord(false)).to.be.false;
	expect(isEmptyRecord(new Object(true))).to.be.false;
	expect(isEmptyRecord('')).to.be.false;
	expect(isEmptyRecord('   ')).to.be.false;
	expect(isEmptyRecord('hello world')).to.be.false;
	expect(isEmptyRecord(new Object('hello world'))).to.be.false;
	expect(isEmptyRecord(42)).to.be.false;
	expect(isEmptyRecord(new Object(42))).to.be.false;
	expect(isEmptyRecord('42')).to.be.false;
	expect(isEmptyRecord(9_007_199_254_740_991n)).to.be.false;
	expect(isEmptyRecord(new Object(9_007_199_254_740_991n))).to.be.false;
	expect(isEmptyRecord(Infinity)).to.be.false;
	expect(isEmptyRecord(Number.NaN)).to.be.false;
	expect(isEmptyRecord({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.false;
	expect(isEmptyRecord({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.false;
	expect(isEmptyRecord(globalThis)).to.be.false;
	expect(isEmptyRecord(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isEmptyRecord(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isEmptyRecord(/hello/)).to.be.false;
	expect(isEmptyRecord(new Date())).to.be.false;
	expect(isEmptyRecord(Date)).to.be.false;
	expect(isEmptyRecord(() => 0)).to.be.false;
	expect(isEmptyRecord(async () => 0)).to.be.false;
	expect(isEmptyRecord(function * () {
		yield 0;
	})).to.be.false;
	expect(isEmptyRecord(new Error('error'))).to.be.false;
	expect(isEmptyRecord(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isEmptyRecord(Symbol(0))).to.be.false;
});
