function foo(x) {
  if (Number.isNaN(x)) {
    // Handle NaN appropriately, either throw an error or return NaN
    return NaN; // or throw new Error("Input is NaN");
  } else if (x == null) {
    return 0;
  } else {
    return x;
  }
}

console.log(foo(NaN)); // Outputs NaN
console.log(foo(null)); //Outputs 0