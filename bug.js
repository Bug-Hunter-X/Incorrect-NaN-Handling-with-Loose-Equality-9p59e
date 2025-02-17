function foo(x) {
  if (x == null) {
    return 0; // This is incorrect for NaN
  } else {
    return x;
  }
}

console.log(foo(NaN)); // Outputs 0, but should ideally throw an error or return NaN