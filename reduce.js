function reduce(array, combine, start) {
  var c = start;
  for (var i = 0; i < array.length; i++)
    c = combine(c, array[i]);
  return c;
}

console.log(reduce([1, 2, 3, 4], function(x, y) {
  return x + y;
}, 0));


// Flattening exercise

var arrays = [["J", "U", "S"], ["T", "--", "C"], ["O", "D", "I"], ["N", "--", "N", "O", "W"]];
console.log(arrays.reduce(function(flat, current){
  return flat.concat(current);
}, []));



// Difference exercise - A bit challenge to sink in

// Function that uses reduce to compute the average of the numbers in an array.
function average(array) {
  function plus(a, b) {
    return a + b;
  }
  return array.reduce(plus) / array.length;
}

// Create an object that associates names with person objects.
var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// Only include people whose mothers are in the data.
var differences = ancestry.filter(function(person) {
  return byName[person.mother] != null;
// Now that you have an array of people with known mothers,
// transform each person to an age difference.
}).map(function(person) {
  return person.born - byName[person.mother].born;
});

// Log the average age difference.
console.log(average(differences));
// → 31.2
