// Write program that loops through number 50 to number 150
// Each number should be printed to the console.log
// However, if the number is a multiple of 3, don't print the number
// instead print the word "fizz"
// if number is multiplied of 5, print "buzz" instead number
// if it is both multiple of 3 and 5, it should print "fizzBuzz" instead number


// Using Loops and if/else statments

for (var num=150; num >=50; --num) {
  // Both numbers of 15, print fizzBuzz
  if (num % 15 == 0) {
    console.log("fizzBuzz");
  }
  // If number is 3, print fizz
  else if (num % 3 == 0) {
    console.log("fizz");
  }
  // if number is 5, print buzz
  else if (num % 5 == 0) {
    console.log("buzz");
  }
  else {
    console.log(num);
  }
}


// Also try other way below

for (var number = 1; number <= 20; number++) {
  var output = "";

  if (number % 3 === 0) {
    output += "Fizz";
  }
  if (number % 5 === 0) {
    output += "Buzz";
  }
  if (!output) {
    output = number;
  }
  console.log(output);
}
