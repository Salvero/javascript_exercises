function Animal() {
  this.name = "Animal";

  this.toString = function() {
    return "My name is " + this.name;
  };
}

function Canine() {
  this.name = "Canine";
}

function Wolf() {
  this.name = "Wolf";
}

Canine.prototype = new Animal();
Wolf.prototype = new Canine();

Canine.prototype.constructor = Canine;
Wolf.prototype.constructor = Wolf;

var arcticWolf = new Wolf();

document.write(arcticWolf.toString() + "<br/>");
document.write( " Wolf instance of Animal : " + (arcticWolf instanceof Animal) + "<br/>");

Animal.prototype.sound = "Grrrr";
Animal.prototype.getSound = function() {
  return this.name + " says " + this.sound;
}

Canine.prototype.sound = "Wooof";
Wolf.prototype.sound = "Howwwwl";

document.write(arcticWolf.getSound() + "<br/>");

function Rodent() {
  this.name = "Rodent";
}

function Rat() {
  this.name = "Rat";
}

Roddent.prototype = new Animal();

Rat.prototype = Rodent.prototype;
Rodent.prototype.constructor = Rodent;
Rat.prototype.constructor = Rat;

var caneRat = new Rat();

document.write(caneRat.toString() + "<br/>");
