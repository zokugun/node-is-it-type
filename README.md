[@zokugun/is-it-type](https://github.com/zokugun/node-is-it-type)
==========================================================

[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![NPM Version](https://img.shields.io/npm/v/@zokugun/is-it-type.svg?colorB=green)](https://www.npmjs.com/package/@zokugun/is-it-type)
[![Donation](https://img.shields.io/badge/donate-ko--fi-green)](https://ko-fi.com/daiyam)
[![Donation](https://img.shields.io/badge/donate-liberapay-green)](https://liberapay.com/daiyam/donate)
[![Donation](https://img.shields.io/badge/donate-paypal-green)](https://paypal.me/daiyam99)

Why `@zokugun/is-it-type`?
--------------------------

- Zero dependencies.
- Predictable naming across primitives, boxed types, iterables, errors, promises, and constructors.
- First-class TypeScript support: every helper is a ready-to-use predicate.
- `typeOf`/`isType` go beyond native `typeof`, normalizing async vs. sync functions, arrays vs. records, Node.js errors, and more.

Getting Started
---------------

With [node](http://nodejs.org) previously installed:

```
npm install @zokugun/is-it-type
```

Import only the predicates you need (tree-shaking friendly) and use them as runtime guards:

```typescript
import { isNonEmptyArray, isString } from '@zokugun/is-it-type';

function normalizeTags(input: unknown): string[] {
    if(!isNonEmptyArray(input)) {
        return [];
    }

    return input.filter(isString);
}
```

Usage Examples
--------------

### Narrowing unknown data

```typescript
import { isRecord, isBooleanLike, isNonNull, toBoolean } from '@zokugun/is-it-type';

function readFeatureFlag(payload: unknown): boolean {
    if(isRecord(payload) && isBooleanLike(payload.enabled)) {
        return toBoolean(payload.enabled);
    }

    return false;
}
```

### Classifying values with `typeOf` and `isType`

```typescript
import {typeOf, isType} from '@zokugun/is-it-type';

const kind = typeOf(value);

switch(kind) {
    case 'array':
        // Guaranteed array here
        break;
    case 'async-function':
        await value();
        break;
    default:
        // Handle primitives, records, promises, etc.
}

if(isType(value, 'date')) {
    console.log('Timestamp:', value.getTime());
}
```

`typeOf` returns normalized descriptors beyond the native `typeof`, including: `array`, `record`, `date`, `error`, `node-error`, `promise`, `regexp`, `async-function`, `sync-function`, `constructor`, and `generator`, plus the standard primitives (`undefined`, `null`, `boolean`, `number`, `bigint`, `string`, `symbol`). Combine it with `isType` for expressive guards without duplicating comparison logic.

Quick Reference
---------------

| Predicate                 | What it checks                                                                                      |
| ------------------------- | --------------------------------------------------------------------------------------------------- |
| `isActualFunction`        | Raw `typeof value === 'function'` check (constructors/classes pass).                                |
| `isActualObject`          | Non-null values whose `typeof` is `'object'` (arrays included).                                     |
| `isArray`                 | `Array.isArray` plus an optional per-element predicate.                                             |
| `isAsyncGenerator`        | Functions whose constructor name is `AsyncGeneratorFunction`.                                       |
| `isAsyncIterable`         | Objects implementing `Symbol.asyncIterator`.                                                        |
| `isAsyncFunction`         | Functions whose constructor name is `AsyncFunction`.                                                |
| `isBigInt`                | Primitive `bigint` values.                                                                          |
| `isBigIntLike`            | Primitive bigint or boxed `BigInt` objects.                                                         |
| `isBlankString`           | Strings that become empty after `trim()`.                                                           |
| `isBoolean`               | Primitive booleans.                                                                                 |
| `isBooleanLike`           | Primitive booleans or boxed `Boolean` objects.                                                      |
| `isBoxedBigInt`           | Boxed `BigInt` objects.                                                                             |
| `isBoxedBoolean`          | Boxed `Boolean` objects.                                                                            |
| `isBoxedNumber`           | Boxed `Number` objects.                                                                             |
| `isBoxedPrimitive`        | Boxed `BigInt`, `Boolean`, `Number`, or `String` objects.                                           |
| `isBoxedString`           | Boxed `String` objects.                                                                             |
| `isConstructor`           | Functions whose prototype indicates they should be called with `new`.                               |
| `isDate`                  | `instanceof Date`.                                                                                  |
| `isEmptyArray`            | Arrays whose `length` is `0`.                                                                       |
| `isEmptyRecord`           | Plain objects with no own enumerable keys.                                                          |
| `isEmptyString`           | Strings of length `0`.                                                                              |
| `isError`                 | `instanceof Error`.                                                                                 |
| `isFinite`                | Number-like inputs that are neither `NaN` nor ±`Infinity`.                                          |
| `isFunction`              | Callables that are not constructors/classes.                                                        |
| `isGenerator`             | Functions whose constructor name is `GeneratorFunction` or `AsyncGeneratorFunction`.                |
| `isInteger`               | Values where `Number.isInteger(value)` succeeds.                                                    |
| `isIntegerGreaterOrEqual` | Integers greater than or equal to the provided threshold.                                           |
| `isIntegerGreaterThan`    | Integers strictly greater than the provided threshold.                                              |
| `isIntegerLessOrEqual`    | Integers less than or equal to the provided threshold.                                              |
| `isIntegerLessThan`       | Integers strictly less than the provided threshold.                                                 |
| `isNaN`                   | Number-like inputs whose numeric value is `NaN`.                                                    |
| `isIterable`              | Objects implementing `Symbol.iterator` or `Symbol.asyncIterator`.                                   |
| `isNegativeInteger`       | Integers strictly below zero.                                                                       |
| `isNegativeIntegerOrZero` | Integers that are zero or below.                                                                    |
| `isNodeError`             | Objects matching `NodeJS.ErrnoException` shape (they expose `code`).                                |
| `isNonBlankString`        | Strings containing non-whitespace characters.                                                       |
| `isNonEmptyArray`         | Arrays with at least one element.                                                                   |
| `isNonEmptyRecord`        | Plain objects that own at least one key.                                                            |
| `isNonEmptyString`        | Strings whose length is greater than `0`.                                                           |
| `isNonNull`               | Values that are not strictly `null`.                                                                |
| `isNonNullable`           | Values excluding both `null` and `undefined`.                                                       |
| `isNonUndefined`          | Values that are not `undefined`.                                                                    |
| `isNull`                  | Strict `null` checks.                                                                               |
| `isNullable`              | Values that are either `null` or `undefined`.                                                       |
| `isNumber`                | Primitive numbers (including `NaN`/`Infinity`).                                                     |
| `isNumberLike`            | Number or bigint primitives plus boxed `Number`/`BigInt` objects.                                   |
| `isObject`                | Non-null objects that are not arrays.                                                               |
| `isObjectLike`            | Non-null objects or functions.                                                                      |
| `isPositiveInteger`       | Integers strictly above zero.                                                                       |
| `isPositiveIntegerOrZero` | Integers that are zero or above.                                                                    |
| `isPrimitive`             | String, number, boolean, or bigint primitives.                                                      |
| `isPromiseLike`           | Objects exposing a callable `then` method.                                                          |
| `isPromise`               | Objects whose constructor is `Promise`.                                                             |
| `isRecord`                | Plain objects (default `Object` constructor, not arrays/arguments).                                 |
| `isRegExp`                | `instanceof RegExp`.                                                                                |
| `isString`                | Primitive strings.                                                                                  |
| `isStringLike`            | Primitive strings or boxed `String` objects.                                                        |
| `isSyncGenerator`         | Functions whose constructor name is `GeneratorFunction`.                                            |
| `isSyncIterable`          | Objects implementing `Symbol.iterator`.                                                             |
| `isSymbol`                | Primitive symbols.                                                                                  |
| `isSyncFunction`          | Functions that are neither constructors, async, nor generator functions.                            |
| `isType`                  | Wrapper that compares `typeOf(value)` to a `TypesLiteral`.                                          |
| `isUndefined`             | Strict `undefined` checks.                                                                          |
| `typeOf`                  | Normalized `typeof` replacement (array, record, async-function, constructor, etc.).                 |
| `toBigInt`                | Returns the primitive bigint value from either a primitive or `BigInt` wrapper.                     |
| `toBoolean`               | Returns the primitive boolean value from either a primitive or `Boolean` wrapper.                   |
| `toNumber`                | Returns the primitive number value from either a primitive or `Number` wrapper.                     |
| `toPrimitive`             | Unboxes any boxed primitive (`Boolean`, `Number`, `String`, `BigInt`) to its primitive counterpart. |
| `toString`                | Returns the primitive string value from either a primitive or `String` wrapper.                     |

Need a normalized descriptor instead of a boolean? Reach for `typeOf` helper function and the `Types`/`TypesLiteral` TypeScript helpers.

Donations
---------

Support this project by becoming a financial contributor.

<table>
    <tr>
        <td><img src="https://raw.githubusercontent.com/daiyam/assets/master/icons/256/funding_kofi.png" alt="Ko-fi" width="80px" height="80px"></td>
        <td><a href="https://ko-fi.com/daiyam" target="_blank">ko-fi.com/daiyam</a></td>
    </tr>
    <tr>
        <td><img src="https://raw.githubusercontent.com/daiyam/assets/master/icons/256/funding_liberapay.png" alt="Liberapay" width="80px" height="80px"></td>
        <td><a href="https://liberapay.com/daiyam/donate" target="_blank">liberapay.com/daiyam/donate</a></td>
    </tr>
    <tr>
        <td><img src="https://raw.githubusercontent.com/daiyam/assets/master/icons/256/funding_paypal.png" alt="PayPal" width="80px" height="80px"></td>
        <td><a href="https://paypal.me/daiyam99" target="_blank">paypal.me/daiyam99</a></td>
    </tr>
</table>

License
-------

Copyright &copy; 2025-present Baptiste Augrain

Licensed under the [MIT license](https://opensource.org/licenses/MIT).
