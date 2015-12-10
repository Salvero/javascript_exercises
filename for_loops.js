var gameScores = [33, 65, 88];
var gameLength = gameScores.length;
var roundNumber = 0;
var message = '';
var x;

// Loop through the items in the array
for (var x = 0; x < gameLength; x++) {

  roundNumber = (x + 1);
  // Write the current round to message
  message += "Round 1 : " + roundNumber + " : ";
  // Get the score from the scores array
  message += scores[x] + "<br/>";
}

document.getElementById('scores').innerHTML = message;
