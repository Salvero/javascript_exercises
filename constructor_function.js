function Coordinates() {
  this.latitude = 0;
  this.longitude = 0;
}

Object._defineGetter_.call(Coordinates.prototype, "getCoords", function() {
  return "Lat : " + this.latitude + " Long : " + this.longitude;
});

Object._defineSetter_.call(Coordinates.prototype, "setCoords", function(coords){
  var parts = coords.toString().split(", ");
  this.latitude = parts[0] || "";
  this.longitude = parts[1] || "";
});

var testCoords = new Coordinates();

testCoords.setCoords = "40.71, 74.00";

document.write("Coordinates : " + testCoords.getCoords + "<br/>");



// see getter_setter.js file
