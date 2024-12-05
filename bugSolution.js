function foo(x) {
  if (x === null || x === undefined) {
    return 0; // Explicitly handle null and undefined
  } else if (x < 0) {
    return -1;
  } else {
    return 1;
  }
}

console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Output: 0
console.log(foo(-1));  // Output: -1
console.log(foo(0));   // Output: 1
console.log(foo(1));   // Output: 1