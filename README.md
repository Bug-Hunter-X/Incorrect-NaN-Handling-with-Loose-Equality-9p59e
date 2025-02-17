# Incorrect NaN Handling in JavaScript

This repository demonstrates a common error in JavaScript related to handling `NaN` (Not a Number) using loose equality (`==`).  The provided code incorrectly treats `NaN` as equivalent to `null`, returning 0 instead of the expected `NaN`. 

The solution demonstrates how to correctly handle `NaN` using strict equality (`===`) or `Number.isNaN()`. 