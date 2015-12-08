// Getters and Setters Example

var address = {
  street: "No Street",
  city: "No City",
  state: "No State",

  get getAddress(){
    return this.street + ", " + this.city + ", " + this.state;
  },

  set setAddress(theAddress) {
    var parts = theAddress.toString().split(", ");
    this.street = parts[0] || "";
    this.city = parts[1] || "";
    this.state = parts[2] || "";
  }
}

address.setAddress = "123 Main Street, Chicago, IL";

document.write("Address : " + address.getAddress + "<br/>");

document.write("City : " + address.city + "<br/>");

// see constructor_function.js file
