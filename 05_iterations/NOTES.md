# 📝 Notes — `05_iterations/`

This folder covers **Iterations (Loops)** — how to execute code repeatedly in JavaScript, ranging from traditional `for` loops to modern array methods like `map`, `filter`, and `reduce`.

---

## 📄 Traditional Loops (`01_loop.js`, `02_while_and_do-while.js`)

### What it does
Covers the foundational loops: `for`, `while`, and `do...while`.

### Key Concepts
- **`for` loop**: Standard loop with initialization, condition, and increment/decrement.
- **`break`**: Exits the loop completely.
- **`continue`**: Skips the current iteration and moves to the next one.
- **`while` loop**: Runs as long as a condition is true. Check condition *before* running.
- **`do...while` loop**: Runs the block of code once, then checks the condition. **Guarantees at least one execution**.

---

## 📄 High-Order Loops (`03_high-order-loop.js`)

### What it does
Introduces `for...of` and `for...in` loops which are optimized for iterating over iterables and objects.

### Key Concepts
- **`for...of`**: Use for iterating over the *values* of iterables like Arrays, Strings, and Maps.
  - *Does not work on standard Objects*.
- **`for...in`**: Use for iterating over the *keys* (or property names) of Objects.
  - Can be used on Arrays, but it returns the indices (`0`, `1`, `2`...) instead of values.
- **`Map` Object**: Holds key-value pairs, remembers original insertion order. Keys can be of any type. Iterated nicely with `for (const [key, value] of map)`.

---

## 📄 Array Iteration Methods (`04_for-each-loop.js`, `05_filter.js`, `06_map_chaining.js`, `07_reduce.js`)

### What it does
Covers the core functional array methods that revolutionized how JS developers write code.

### Key Concepts
- **`forEach`**: Executes a provided function once for each array element.
  - Takes a callback `(item, index, array) => { ... }`.
  - **Crucial**: Does *not* return a new array. It just runs the logic.
- **`filter`**: Creates a *new array* with all elements that pass the test implemented by the provided function.
  - If using `{}` in the arrow function, you *must* use the `return` keyword.
- **`map`**: Creates a *new array* populated with the results of calling a provided function on every element in the calling array.
- **Chaining**: You can chain `.map().map().filter()` sequentially. The result of the first method is passed directly into the next.
- **`reduce`**: Executes a user-supplied "reducer" callback function on each element, passing in the return value from the calculation on the preceding element. The final result is a single value.
  - Perfect for finding totals, like calculating a shopping cart total price.
  - Uses an `accumulator` and a `currentValue`.

### Summary
> Iterations allow you to process data in bulk. While `for` loops are the fastest, modern JS relies heavily on `map`, `filter`, and `reduce` for readability and immutability. Understanding when to use `for...of` (arrays/maps) vs `for...in` (objects) is critical.

### 🧠 Easy-to-Remember Points
- Need to return a modified array? Use `.map()`.
- Need to filter out specific items? Use `.filter()`.
- Need to calculate a single total from an array? Use `.reduce()`.
- Just want to loop and do something (like printing), and don't need to return anything? Use `.forEach()`.
- `for...in` is for **IN**specting objects (keys). `for...of` is for iterable values.
