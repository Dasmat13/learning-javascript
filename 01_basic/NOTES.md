# 📝 Notes — `01_basic/`

This folder covers **core JavaScript fundamentals** — the building blocks you must know before anything else.

---

## 📄 `01_variables.js` — Variables

### What it does
Demonstrates how to declare variables using `const`, `let`, `var`, and implicit global assignment.  
Shows `console.table()` to print all values in a formatted table.

### Key Concepts
- `const` → cannot be reassigned (use for fixed values)
- `let` → can be reassigned (use for changing values)
- `var` → avoid! Has function scope, causes bugs in block scope
- Undeclared variable (`accountCity = "Rourkela"`) → becomes a global (bad practice)
- `let accountState` without value → `undefined`

### Summary
> Declare variables intentionally. Prefer `const` > `let` > never `var`.

### 🧠 Easy-to-Remember Points
- `const` = fixed box 📦, `let` = flexible box 🔄, `var` = broken box 🚫
- `console.table([...])` → prints an array as a neat table in terminal

---

## 📄 `02_dataTypes.js` — Data Types

### What it does
Introduces all primitive data types in JavaScript and shows how `typeof` works.

### Key Concepts
- **7 Primitive types**: `number`, `bigint`, `string`, `boolean`, `null`, `undefined`, `symbol`
- `typeof null` → returns `"object"` (this is a **historical JavaScript bug**)
- `typeof undefined` → returns `"undefined"` (correct)
- `"use strict"` → treats code as modern JS, helps catch errors early

### Summary
> Know your types. `typeof null === "object"` is JS's oldest bug — don't be surprised.

### 🧠 Easy-to-Remember Points
- 7 primitives → `string, number, boolean, null, undefined, symbol, bigint`
- `null` ≠ `undefined` → null is intentional empty, undefined means not assigned
- `typeof null` = `"object"` 🐛 (a known JS quirk)

---

## 📄 `03_conversionOperation.js` — Type Conversion & Operators

### What it does
Shows how to convert between types using `Number()`, `Boolean()`, `String()`.  
Also covers arithmetic operators and tricky string+number concatenation.

### Key Concepts
- `Number("33")` → `33` | `Number("33abc")` → `NaN` | `Number(true)` → `1`
- `Boolean("")` → `false` | `Boolean("dasmat")` → `true` | `Boolean(0)` → `false`
- `"1" + 2` → `"12"` (string concat) | `1 + 2 + "3"` → `"33"`
- `+true` → `1` | `+""` → `0` (unary `+` converts to number)
- `++gameCounter` → pre-increment (increments before use)

### Summary
> JS does implicit type coercion. When mixing types, be explicit with conversion functions.

### 🧠 Easy-to-Remember Points
- `Number()` converts but returns `NaN` if it can't
- String + anything = string concatenation (left to right)
- `+true` = `1`, `+false` = `0`, `+""` = `0`

---

## 📄 `04_comparision.js` — Comparison Operators

### What it does
Shows the tricky edge cases of JS comparison — especially with `null` and type coercion.

### Key Concepts
- `"2" > 1` → `true` (string coerced to number)
- `null > 0` → `false` | `null == 0` → `false` | `null >= 0` → `true` ⚠️ (weird!)
- `"2" === 2` → `false` (strict check — no coercion)

### Summary
> Never compare with `==`, always use `===`. Null comparisons are full of traps.

### 🧠 Easy-to-Remember Points
- `==` allows coercion → unreliable 😬
- `===` is strict → checks type AND value ✅
- `null >= 0` is `true` but `null == 0` is `false` → JS is wild 🤯

---

## 📄 `05_string.js` — String Methods

### What it does
Shows multiple ways to create strings and covers the most useful string methods.

### Key Concepts
- Template literals: `` `hello ${name}` `` — cleanest way to embed variables
- `new String('...')` → string object (has prototype methods)
- `.toUpperCase()`, `.toLowerCase()`, `.charAt()`, `.indexOf()`
- `.substring(0,4)` → from index 0 to 3 (end not included)
- `.slice(-8, 9)` → supports negative index (from end)
- `.trim()` → removes leading/trailing whitespace
- `.replace('%20', '-')` → replaces first match
- `.includes('word')` → returns `true`/`false`
- `.split('-')` → splits string into array

### Summary
> Strings are immutable. Every method returns a **new** string.

### 🧠 Easy-to-Remember Points
- Template literals > string concatenation always
- `slice` supports negative index, `substring` doesn't
- `.trim()` → clean whitespace | `.split()` → string to array | `.includes()` → boolean check

---

## 📄 `06_nums_and_maths.js` — Numbers & Math

### What it does
Covers `Number` object methods and the `Math` built-in for mathematical operations.

### Key Concepts
- `balance.toFixed(2)` → rounds to 2 decimal places
- `otherNumber.toPrecision(6)` → significant digits
- `hundreds.toLocaleString('en-IN')` → Indian number format (1,00,000)
- `Math.abs()`, `Math.round()`, `Math.ceil()`, `Math.floor()`, `Math.sqrt()`
- `Math.random()` → 0 to <1 (never exactly 1)
- Random in range: `Math.floor(Math.random() * (max - min + 1)) + min`

### Summary
> Use `Math.floor(Math.random() * (max - min + 1)) + min` for random numbers in a range.

### 🧠 Easy-to-Remember Points
- `Math.random()` → always between 0 and 0.999...
- `ceil` = round up 📈 | `floor` = round down 📉 | `round` = nearest
- For range: `floor(random * (max - min + 1)) + min` — memorize this formula!

---

## 📄 `07_dates_and_time.js` — Dates & Time

### What it does
Shows how to create, parse, and format dates using the JavaScript `Date` object.

### Key Concepts
- `new Date()` → current date/time
- `new Date("2023-01-14")` → parse from ISO string
- `new Date("01-02-2021")` → parse from `MM-DD-YYYY`
- `Date.now()` → milliseconds since Jan 1, 1970 (Unix epoch)
- `.getDate()`, `.getMonth()`, `.getFullYear()` → extract parts
- `.toLocaleString('default', { weekday: 'long' })` → e.g. "Sunday"

### Summary
> Months in JS are **0-indexed** (January = 0). Always check this when creating dates.

### 🧠 Easy-to-Remember Points
- `Date.now()` = milliseconds since epoch (divide by 1000 for seconds)
- `getMonth()` returns 0–11 (add 1 for human-readable month!) ⚠️
- Use `toLocaleString()` for user-friendly date formatting

---

## 📄 `datatypes-summary.js` — Stack vs Heap (Primitive vs Reference)

### What it does
Demonstrates the difference in how primitive and reference types are stored and copied.

### Key Concepts
- **Primitive (Stack)**: Copy creates an **independent** clone
  - `let b = a` → changing `b` does NOT change `a`
- **Reference (Heap)**: Copy shares the **same reference**
  - `let user2 = user1` → changing `user2.email` ALSO changes `user1.email`

### Summary
> Primitives are copied by value. Objects are copied by reference. This is a common bug source!

### 🧠 Easy-to-Remember Points
- Stack = primitive = copy by value = safe to modify copy 🟢
- Heap = object/array = copy by reference = modifying copy affects original 🔴
- To safely copy an object: use spread `{...obj}` or `Object.assign({}, obj)`
