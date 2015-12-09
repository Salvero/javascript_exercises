// Example 1
switch(level) {

  case 'One':
   title = 'Level 1';
   break;

  case 'Two':
   title = 'Level 2';
   break;

  case 'Three':
   title = 'Level 3';
   break;

  case 'Four':
   title = 'Level 4';
   break;

  default:
   title = 'Test';
   break;

}


// Example 2
var message;
var level = 2;

switch(level) {

  case 1:
    message = 'Good luck on the first test';
    break;

  case 2:
    message = 'Second of three - keep going!';
    break;

  case 3:
    message = 'Final round, almost there!';
    break;

  default:
    message = 'Good Luck!';
    break;
}

var el = document.getElementById('answer');
el.textContent = message;
