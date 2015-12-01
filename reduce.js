function reduce(array, combine, start) {
  var c = start;
  for (var i = 0; i < array.length; i++)
    c = combine(c, array[i]);
  return c;
}

console.log(reduce([1, 2, 3, 4], function(x, y) {
  return x + y;
}, 0));
