// Example 1
var i = 1;
var message = '';

// Store 5 times table in a variable
while(i < 10) {
  message += i + ' x 5 = ' + (i * 5) + '<br/>';
  i++;
}

document.getElementById('math').innerHTML = message;


// Example 2 - Do While Loops
var i = 1;
var message = '';

do {
  message += i + ' x 5 = ' + (i * 5) + '<br/>';
  message += i + ' x 10 = ' + (i * 10) + '<br/>';
  message += i + ' x 15 = ' + (i * 15) + '<br/>';
  message += i + ' x 20 = ' + (i * 20) + '<br/>';
  message += i + ' x 25 = ' + (i * 25) + '<br/>';
  i++;
} while (i < 1);

document.getElementById('math').innerHTML = message;


// Example 3 - Decision and Loops
//Unit of Math
var targetMath = 3;
var operator = 'addition'; // calculation for addition
var i = 1; // set counter to 1
var message = ''; // Message

// If the operator variable says addition
if (operator === 'addition') {
  while (i < 11) {
    message += i + ' + ' + targetMath + ' = ' + (i + targetMath) + "<br/>";
    i++;
  }
} else {
  while (i < 11) {
    message += i + ' x ' + targetMath + ' = ' + (i * targetMath) + "<br/>";
    i++;
  }
}

document.getElementById('mathTest').innerHTML = message;
