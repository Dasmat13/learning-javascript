# 📝 Notes — `03_basic/`

This folder covers **Functions and Scope** — the heart of how JavaScript executes logic.

---

## 📄 `01_function.js` — Functions

### What it does
Covers function declaration, parameters, default values, rest operator, passing objects and arrays as arguments.

### Key Concepts
- **Function declaration**: `function name(params) { return ... }`
- Returns `undefined` if no `return` statement
- String + number = string concatenation: `"das" + 2` → `"das2"`
- `null` in math treated as `0`: `5 + null` = `5`
- **Default parameter**: `function login(username = "das")` → used when no arg passed
- **Rest operator** `...num1` → collects remaining args into an array
- Pass objects or arrays directly as arguments (not just variables)

### Summary
> Functions can take anything as input. Use default params for safety. Rest operator = flexible args.

### 🧠 Easy-to-Remember Points
- No `return` = function returns `undefined` automatically
- `function f(a, b, ...rest)` → `rest` is an array of everything after `a` and `b`
- Default params: `function greet(name = "stranger")` — always add defaults for critical params
- Passing object directly: `handleObject({ username: "x", price: 100 })`

---

## 📄 `02_scope.js` — Scope & Hoisting

### What it does
Explains block scope vs function scope, nested/closure scope, and hoisting behavior of `var` vs `let`/`const`.

### Key Concepts
- `let` and `const` → **block scoped** (not accessible outside `{}`)
- `var` → **function scoped** (leaks out of blocks like `if`, `for`)
- **Shadowing**: inner `let a` shadows outer `let a` without changing it
- **Closures**: inner functions can access outer function's variables
- **Hoisting**:
  - `function declaration` → fully hoisted (usable before definition)
  - `const`/`let` → hoisted but in **TDZ (Temporal Dead Zone)** — cannot use before declaration

### Summary
> `let`/`const` stay in their block. Functions are hoisted, const/let are not. Closures access outer scope.

### 🧠 Easy-to-Remember Points
- `var` leaks out of `if`/`for` blocks 🚨 | `let`/`const` stay inside ✅
- TDZ = the zone before a `let`/`const` is initialized — any access = `ReferenceError`
- Function declarations are hoisted 100% — can call them before they appear in code
- Inner function can see outer variables — outer cannot see inner (one-way glass 🪟)

---

## 📄 `03_arrow.js` — Arrow Functions & `this`

### What it does
Explains arrow function syntax, how `this` works differently in regular vs arrow functions, and implicit return.

### Key Concepts
- Regular method: `this` = the object the method belongs to
- Arrow function: **does NOT have its own `this`** — inherits from surrounding (lexical) scope
- In Node.js global scope: `this` = `{}` (empty module object)
- `const add = (a, b) => a + b` → implicit return (no `{}`, no `return` needed)
- `const add = (a, b) => (a + b)` → parentheses = implicit return
- `const getObj = () => ({ key: value })` → wrap object in `()` to return it implicitly

### Summary
> Arrow functions are shorter and don't bind `this`. Use regular functions for methods, arrows for callbacks.

### 🧠 Easy-to-Remember Points
- Arrow function = no `this` of its own — inherits from where it's defined 🏹
- One-liner arrow = implicit return (skip `{}` and `return`)
- Returning object from arrow: `() => ({...})` — must wrap in `()` otherwise `{}` = function body
- Regular `function` in object = `this` works | Arrow in object = `this` is wrong ⚠️

---

## 📄 `04_iife.js` — IIFE (Immediately Invoked Function Expression)

### What it does
Explains what an IIFE is, why it's used, and shows multiple syntaxes (named, anonymous, arrow, with params).

### Key Concepts
- **IIFE** = a function that runs immediately after being defined
- Syntax: `(function() { ... })();` → wrap in `()`, then call with `()`
- Prevents **global scope pollution** — all variables stay inside the IIFE
- Arrow IIFE: `(() => { ... })()`
- IIFE with argument: `((name) => { console.log(name) })("MongoDB")`
- The `;` at the end is important — prevents accidental chaining with other expressions

### Summary
> IIFE = self-executing function. Used for isolation. Common in older JS before modules existed.

### 🧠 Easy-to-Remember Points
- IIFE = wrap function in `()` + call it with `()` at the end
- Think of it like a box that runs itself and seals its variables inside 📦🔒
- Always end IIFE with `;` to avoid bugs when minifying code
- Modern equivalent = ES Modules (`import`/`export`) but IIFEs still appear in legacy code
