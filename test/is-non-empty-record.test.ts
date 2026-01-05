import { expect, it } from 'vitest';
import { isNonEmptyRecord } from '../src/index.js';

it('isNonEmptyRecord(x)', function () {
	// true
	expect(isNonEmptyRecord({
		a: 'hello',
		b: 'world',
		c: '!',
	})).to.be.true;
	expect(isNonEmptyRecord({
		a: 'hello',
		b: 'world',
		c: 1,
	})).to.be.true;
	expect(isNonEmptyRecord(globalThis)).to.be.true;
	expect(isNonEmptyRecord({ then: () => 0 })).to.be.true;

	// false
	expect(isNonEmptyRecord([])).to.be.false;
	expect(isNonEmptyRecord([1, 2, 3])).to.be.false;
	expect(isNonEmptyRecord([1, 2, '3'])).to.be.false;
	expect(isNonEmptyRecord(arguments)).to.be.false;
	expect(isNonEmptyRecord(null)).to.be.false;
	expect(isNonEmptyRecord(undefined)).to.be.false;
	expect(isNonEmptyRecord(false)).to.be.false;
	expect(isNonEmptyRecord(new Object(true))).to.be.false;
	expect(isNonEmptyRecord('')).to.be.false;
	expect(isNonEmptyRecord('   ')).to.be.false;
	expect(isNonEmptyRecord('hello world')).to.be.false;
	expect(isNonEmptyRecord(new Object('hello world'))).to.be.false;
	expect(isNonEmptyRecord(42)).to.be.false;
	expect(isNonEmptyRecord(new Object(42))).to.be.false;
	expect(isNonEmptyRecord('42')).to.be.false;
	expect(isNonEmptyRecord(-42)).to.be.false;
	expect(isNonEmptyRecord(-8)).to.be.false;
	expect(isNonEmptyRecord(-3.14)).to.be.false;
	expect(isNonEmptyRecord(0)).to.be.false;
	expect(isNonEmptyRecord(3.14)).to.be.false;
	expect(isNonEmptyRecord(8)).to.be.false;
	expect(isNonEmptyRecord(9_007_199_254_740_991n)).to.be.false;
	expect(isNonEmptyRecord(new Object(9_007_199_254_740_991n))).to.be.false;
	expect(isNonEmptyRecord(Infinity)).to.be.false;
	expect(isNonEmptyRecord(Number.NaN)).to.be.false;
	expect(isNonEmptyRecord({})).to.be.false;
	expect(isNonEmptyRecord(class {
		hello() {
			return 'hello world';
		}
	})).to.be.false;
	expect(isNonEmptyRecord(new (class {
		hello() {
			return 'hello world';
		}
	})())).to.be.false;
	expect(isNonEmptyRecord(/hello/)).to.be.false;
	expect(isNonEmptyRecord(new Date())).to.be.false;
	expect(isNonEmptyRecord(Date)).to.be.false;
	expect(isNonEmptyRecord(() => 0)).to.be.false;
	expect(isNonEmptyRecord(async () => 0)).to.be.false;
	expect(isNonEmptyRecord((async () => 0)())).to.be.false;
	expect(isNonEmptyRecord(function * () {
		yield 0;
	})).to.be.false;
	expect(isNonEmptyRecord((function * () {
		yield 0;
	})())).to.be.false;
	expect(isNonEmptyRecord(async function * () {
		yield 0;
	})).to.be.false;
	expect(isNonEmptyRecord((async function * () {
		yield 0;
	})())).to.be.false;
	expect(isNonEmptyRecord(new Error('error'))).to.be.false;
	expect(isNonEmptyRecord(new Promise((resolve) => {
		resolve(0);
	}))).to.be.false;
	expect(isNonEmptyRecord(Symbol(0))).to.be.false;
});
