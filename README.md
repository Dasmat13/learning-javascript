# 📘 Learning JavaScript

A structured, hands-on JavaScript learning repository — from variables to advanced function patterns.  
Each folder builds on the previous one, covering core JS concepts with runnable code examples and inline notes.

---

## 📂 Repository Structure

```
learning-javascript/
├── 01_basic/          → Variables, Data Types, Strings, Numbers, Dates
├── 02_basic/          → Arrays, Objects, Destructuring
├── 03_basic/          → Functions, Scope, Arrow Functions, IIFE
├── pro/               → (Coming Soon) Advanced Topics
├── triky.md           → Tricky interview-style questions on var/let/const
├── index.html         → Pixel Bat CSS Animation (bonus project)
├── index.css          → Styles for the bat animation
└── test.js            → Quick test file
```

---

## 📖 Topics Covered

### 📁 `01_basic/` — JavaScript Fundamentals
| File | Topic |
|------|-------|
| `01_variables.js` | `let`, `const`, `var` — declaration, reassignment, `console.table()` |
| `02_dataTypes.js` | Primitive data types — `number`, `string`, `boolean`, `null`, `undefined`, `typeof` |
| `03_conversionOperation.js` | Type conversion (`Number()`, `Boolean()`, `String()`), arithmetic & string concatenation |
| `04_comparision.js` | Comparison operators, type coercion gotchas, `===` strict equality |
| `05_string.js` | Template literals, string methods — `toUpperCase`, `slice`, `trim`, `replace`, `split` |
| `06_nums_and_maths.js` | `Number` methods, `Math` object — `random`, `floor`, `ceil`, `min`, `max` |
| `07_dates_and_time.js` | `Date` object, timestamps, formatting with `toLocaleString()` |
| `datatypes-summary.js` | Primitive vs Reference types, Stack vs Heap memory |

### 📁 `02_basic/` — Arrays & Objects
| File | Topic |
|------|-------|
| `01_array.js` | Array basics — `push`, `pop`, `shift`, `unshift`, `slice` vs `splice` |
| `02_basic_array.js` | `concat`, spread operator, `flat()`, `Array.from()`, `Array.of()` |
| `03_objects.js` | Object literals, Symbol keys, `Object.freeze()`, methods with `this` |
| `04_object2.js` | Nested objects, `Object.keys()`, `Object.values()`, `Object.entries()`, spread merge |
| `05_object3.js` | Object destructuring, renaming variables |

### 📁 `03_basic/` — Functions & Scope
| File | Topic |
|------|-------|
| `01_function.js` | Function declaration, parameters, default values, rest operator `...args` |
| `02_scope.js` | Block scope, function scope, nested scope, closures, hoisting & TDZ |
| `03_arrow.js` | Arrow functions, `this` keyword behavior, implicit return |
| `04_iife.js` | IIFE pattern — avoiding global scope pollution |

---

## 🚀 How to Run

```bash
# Run any file with Node.js
node 01_basic/01_variables.js

# Or run from inside a folder
cd 01_basic
node 01_variables.js
```

---

## 🛠️ Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- Any code editor (VS Code recommended)

---

## 📌 Key Takeaways

- ✅ Always use `let` and `const` — avoid `var`
- ✅ Understand **Stack** (primitives) vs **Heap** (reference types)
- ✅ `===` is strict equality — always prefer it over `==`
- ✅ Arrow functions don't have their own `this`
- ✅ Use IIFE to prevent global scope pollution
- ✅ `slice()` doesn't modify the original array, `splice()` does

---

## 👤 Author

**Dasmat Hansda** — [@Dasmat13](https://github.com/Dasmat13)

---

## 📄 License

This project is for educational purposes. Feel free to fork and learn! 🎓
