// Working on to create immediately invoked function expression (IIFE) to avoid clashing with other variables names in script.

(function() {

  // Create a Mall object using object literal syntax
  var mall = {
    name: 'South Coast Plaza',
    city: 'Costa Mesa',
    state: 'California',
    insideStores: 350,
    peopleMaximum: 5000,
    monthShopping: function() {
      var monthTotal = this.peopleMaximum * insideStores;
      var averageShop = monthTotal / 30;
      return averageShop;
    }
  };

});

// 58333
