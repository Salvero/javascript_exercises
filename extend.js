function extend(Child, parent) {
  var Temp = function() {}

  Temp.prototype = Parent.prototype;

  Child.prototype = new Temp();

  Child.prototype.constructor = Child;
}

function Deer(){
  this.name = "Deer";
  this.sound = "Snort";
}

extend(Deer, Animal);

var elk = new Deer();

document.write(elk.getSound() + "<br/>");
