function factorial(n) {
  console.log(n * (n - 1));
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120        1*2*3*4*5=120

console.log(24 * 5);
