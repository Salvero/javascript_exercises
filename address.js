var customer = {
  name: "Mike Brownies",
  address: "434 Downtown Road",
  balance: 100
};

for (k in customer) {
  document.write(customer[k] + "<br/>");
}

// Mike Brownies
// 434 Downtown Road
// 100


var tomSmithy = [
  "Tom Smithy",
  "9891 Hollywood Road",
  120
];

document.write("1st index ", tomSmithy[0] +  "<br/>");

tomSmithy[3] = "tomSmithy123@yahoo.com";

tomSmithy.splice(2, 1, "Miami-Dade County", "Florida");

tomSmithy.splice(4, 1);

document.write("Array : ", tomSmithy.valueOf(), + "<br/>");

document.write("Array : ", tomSmithy.join(", "), "<br/>");

// 1st index  Tom Smithy
// Array :  [ 'Tom Smithy', '9891 Hollywood Road', 'Miami-Dade County', 'Florida' ]
// Array :  Tom Smithy, 9891 Hollywood Road, Miami-Dade County, Florida
