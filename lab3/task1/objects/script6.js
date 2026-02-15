let id = Symbol("id");
/*A “symbol” represents a unique identifier.

A value of this type can be created using Symbol():*/





// id is a symbol with the description "id"
let id1 = Symbol("id");






let id3 = Symbol("id");
let id2 = Symbol("id");

alert(id3 == id2); // false




let id4 = Symbol("id");
alert(id4); // TypeError: Cannot convert a Symbol value to a string





let id5 = Symbol("id");
alert(id5.description); // id






let user = { // belongs to another code
  name: "John"
};

let id6 = Symbol("id");

user[id6] = 1;

alert( user[id6] ); // we can access the data using the symbol as the key














// ...
let id7 = Symbol("id");
user[id7] = "Their id value";











let user1 = { name: "John" };

// Our script uses "id" property
user.id8 = "Our id value";

// ...Another script also wants "id" for its purposes...

user.id8 = "Their id value"
// Boom! overwritten by another script!












let id9 = Symbol("id");

let user = {
  name: "John",
  [id9]: 123 // not "id": 123
};










let id10 = Symbol("id");
let user = {
  name: "John",
  age: 30,
  [id10]: 123
};

for (let key in user) alert(key); // name, age (no symbols)

// the direct access by the symbol works
alert( "Direct: " + user[id] ); // Direct: 123









let id11 = Symbol("id");
let user = {
  [id11]: 123
};

let clone = Object.assign({}, user);

alert( clone[id11] ); // 123













// read from the global registry
let id12 = Symbol.for("id"); // if the symbol did not exist, it is created

// read it again (maybe from another part of the code)
let idAgain = Symbol.for("id");

// the same symbol
alert( id12 === idAgain ); // true










// get symbol by name
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// get name by symbol
alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id











let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

alert( Symbol.keyFor(globalSymbol) ); // name, global symbol
alert( Symbol.keyFor(localSymbol) ); // undefined, not global

alert( localSymbol.description ); // name