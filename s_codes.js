function SecretCode() {
  var secretNum = 78;

  this.guessNum = function(num) {
    if(num > 78) {
      return "Lower";
    } else if (num < 78) {
      return "Higher";
    } else {
      return "You are right!";
    }
  }
}

var secret = new SecretCode();

document.write("Value of secretNum : " + secret.secretNum + "<br/>");

document.write("Is 70 the number : " + secret.guessNum(70) + "<br/>");

//Prototyping
SecretCode.prototype.getSecret = function() {
  return this.secretNum;
}

document.write("The secret number is " + secret.getSecret() + "<br/>");
