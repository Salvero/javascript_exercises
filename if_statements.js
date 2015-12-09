// first example
var score = 69;
var message;

if (score >= 50) {
 message = "Congratulations";
 message += "Please go ahead for next step!";
}

var el = document.getElementsById('answer');
el.textContent = message;


// second example

var score = 65;
var comment = '';

function sendMessage() {
  comment += "Congratulations!";
}


if (score >= 55) {
  sendMessage();
  comment += "Please go ahead for next step!";
} else {
  comment = "Let's try again!";
}

var el = document.getElementById('answer');
el.textContent = comment;
