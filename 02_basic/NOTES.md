# 📝 Notes — `02_basic/`

This folder covers **Arrays and Objects** — the two most important data structures in JavaScript.

---

## 📄 `01_array.js` — Array Basics

### What it does
Introduces arrays, common mutation methods, and the difference between `slice` and `splice`.

### Key Concepts
- `push(val)` → adds to end | `pop()` → removes from end
- `unshift(val)` → adds to beginning | `shift()` → removes from beginning
- `includes(val)` → `true/false` | `indexOf(val)` → index or `-1`
- `join()` → array to string (comma separated by default)
- **`slice(start, end)`** → returns new array, **original unchanged** ✅
- **`splice(start, deleteCount)`** → removes items, **modifies original** ⚠️

### Summary
> `slice` is non-destructive (safe). `splice` modifies the original array. Know the difference!

### 🧠 Easy-to-Remember Points
- `push/pop` = end | `shift/unshift` = beginning
- `slice` = "slice a piece off" (original stays intact) 🍕
- `splice` = "splice = modifies" (cuts from original) ✂️
- `indexOf` returns `-1` if not found (not `false`)

---

## 📄 `02_basic_array.js` — Advanced Array Methods

### What it does
Covers merging arrays, flattening nested arrays, and static `Array` methods.

### Key Concepts
- `push(array)` → pushes the entire array as one nested element
- `concat(arr)` → merges arrays, returns new array (non-destructive)
- `[...arr1, ...arr2]` → spread operator — cleanest way to merge
- `flat(Infinity)` → completely flattens deeply nested arrays
- `Array.isArray(val)` → checks if value is an array
- `Array.from("string")` → turns string into char array | `Array.from({name:...})` → `[]`
- `Array.of(a, b, c)` → creates array from individual values

### Summary
> Use spread `[...a, ...b]` for clean merges. Use `flat(Infinity)` to demolish nested arrays.

### 🧠 Easy-to-Remember Points
- `push(arr)` = nested array 📦 | `concat(arr)` / spread = merged flat array ➕
- `flat(Infinity)` = flatten any depth of nesting 🏔️→🌊
- `Array.from("hi")` = `['h','i']` | `Array.from({name:"x"})` = `[]` (no length property)

---

## 📄 `03_objects.js` — Object Literals

### What it does
Shows how to create objects, access properties, use Symbol keys, freeze objects, and add methods.

### Key Concepts
- Object literal syntax: `const obj = { key: value }`
- Access: `obj.key` or `obj["key"]` (use bracket for keys with spaces)
- Symbol as key: `const sym = Symbol("key"); obj[sym]` → must use bracket notation
- `obj.mySym` → `undefined` | `obj[mySym]` → actual value (symbol requires variable reference)
- `Object.freeze(obj)` → prevents all modifications to the object
- Methods with `this`: `this` refers to the object the method is called on

### Summary
> Symbols create guaranteed-unique keys. `this` inside a method = the object itself.

### 🧠 Easy-to-Remember Points
- Symbol keys must use bracket notation `obj[sym]`, not dot notation
- `Object.freeze()` = read-only mode 🧊
- `this.property` inside a method = accessing sibling properties
- Keys with spaces need `obj["full name"]` bracket syntax

---

## 📄 `04_object2.js` — Advanced Object Operations

### What it does
Covers nested objects, merging objects, and useful `Object` static methods.

### Key Concepts
- Nested access: `obj.fullname.useerFullname.firstName` (chain dot notation)
- Merge with spread: `{...obj1, ...obj2}` → clean merge ✅
- `Object.assign({}, obj1, obj2)` → older merge method
- `Object.keys(obj)` → array of all keys
- `Object.values(obj)` → array of all values
- `Object.entries(obj)` → array of `[key, value]` pairs
- `hasOwnProperty('key')` → `true`/`false` — checks if key exists directly on object

### Summary
> `Object.entries()` is the most versatile — loops, transforms, and searches all benefit from it.

### 🧠 Easy-to-Remember Points
- Nested objects: drill down with dots `a.b.c.d`
- `Object.keys()` = `["id", "name"]` | `.values()` = `["123", "sunny"]` | `.entries()` = both
- `hasOwnProperty()` = safe way to check if key exists ✅

---

## 📄 `05_object3.js` — Object Destructuring

### What it does
Demonstrates how to extract object properties into variables using destructuring, including renaming.

### Key Concepts
- Basic destructuring: `const { courseInstructor } = course` → extracts property
- Rename while destructuring: `const { courseInstructor: sir } = course` → variable is `sir`
- Destructuring in function params: `const navbar = ({ company }) => {}` → extracts directly from arg

### Summary
> Destructuring = clean extraction. Rename pattern `{ key: newName }` is very useful in React props.

### 🧠 Easy-to-Remember Points
- `const { x } = obj` = extract `x` | `const { x: y } = obj` = extract `x` and call it `y`
- Destructuring in function params = no need to do `props.company` inside the function
- Very common in React: `const { name, age } = props`
