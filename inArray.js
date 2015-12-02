function inArray(arrayToCheck, value) {
  for(i = 0; i < arrayToCheck.length; i++) {
    if(arrayToCheck[i] === value) {
      return true;
    }
  }

  return false;

}

var randArray = [1, 2, 3, 4, 5, 6];

console.log("In Array : ", inArray(randArray, 6) + "<br/>" );

// In Array : true


// Multiply for each function

function times2(num) {
  var var2 = 2;

  return num * var2;
}

function times3(num) {
  return num * 3;
}

function multiply(func, num) {
  return func(num);
}

console.log("2 * 15 = ", multiply(times2, 15), "<br/>");

console.log("3 * 15 = ", multiply(times3, 15), "<br/>");

// 2 * 15 =  30
// 3 * 15 =  45
