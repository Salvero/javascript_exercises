function factorial(num) {

  if(num <= 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

console.log("Factorial of 4 =", factorial(4), "<br/>");
console.log("Factorial of 3 =", factorial(3), "<br/>");
console.log("Factorial of 2 =", factorial(2), "<br/>");

// Factorial of 4 = 24
// Factorial of 3 = 6
// Factorial of 2 = 2
