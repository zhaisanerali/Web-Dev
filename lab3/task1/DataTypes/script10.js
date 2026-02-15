// we have an array with a name and surname
let arr = ["John", "Smith"]

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;

alert(firstName); // John
alert(surname);  // Smith







let [firstName1, surname1] = "John Smith".split(' ');
alert(firstName1); // John
alert(surname1);  // Smith






// let [firstName, surname] = arr;
let firstName2 = arr[0];
let surname2 = arr[1];







// second element is not needed
let [firstName3, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert( title ); // Consul





let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);






let user = {};
[user.name, user.surname] = "John Smith".split(' ');

alert(user.name); // John
alert(user.surname); // Smith





let user1 = {
  name: "John",
  age: 30
};

// loop over the keys-and-values
for (let [key, value] of Object.entries(user1)) {
  alert(`${key}:${value}`); // name:John, then age:30
}






let user2 = new Map();
user2.set("name", "John");
user2.set("age", "30");

// Map iterates as [key, value] pairs, very convenient for destructuring
for (let [key, value] of user2) {
  alert(`${key}:${value}`); // name:John, then age:30
}






let guest = "Jane";
let admin = "Pete";

// Let's swap the values: make guest=Pete, admin=Jane
[guest, admin] = [admin, guest];

alert(`${guest} ${admin}`); // Pete Jane (successfully swapped!)






let [name1, name2] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert(name1); // Julius
alert(name2); // Caesar
// Further items aren't assigned anywhere






let [name3, name4, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// rest is an array of items, starting from the 3rd one
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2








let [name5, name6, ...titles] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// now titles = ["Consul", "of the Roman Republic"]







let [firstName4, surname3] = [];

alert(firstName4); // undefined
alert(surname3); // undefined






// default values
let [name = "Guest", surname4 = "Anonymous"] = ["Julius"];

alert(name);    // Julius (from array)
alert(surname4); // Anonymous (default used)







// runs only prompt for surname
let [name7 = prompt('name?'), surname5 = prompt('surname?')] = ["Julius"];

alert(name7);    // Julius (from array)
alert(surname5); // whatever prompt gets






// The destructuring assignment also works with objects.

// The basic syntax is:

// let {var1, var2} = {var1:…, var2:…}
// We should have an existing object on the right side, that we want to split into variables. The left side contains an object-like “pattern” for corresponding properties. In the simplest case, that’s a list of variable names in {...}.








let options = {
  title: "Menu",
  width: 100,
  height: 200
};

let {title1, width, height} = options;

alert(title1);  // Menu
alert(width);  // 100
alert(height); // 200






// changed the order in let {...}
let {height1, width1, title2} = { title2: "Menu", height1: 200, width1: 100 }







let options1 = {
  title: "Menu",
  width: 100,
  height: 200
};

// { sourceProperty: targetVariable }
let {width: w, height: h, title3} = options;

// width -> w
// height -> h
// title -> title

alert(title3);  // Menu
alert(w);      // 100
alert(h);      // 200








let options2 = {
  title: "Menu"
};

let {width2 = 100, height2 = 200, title4} = options;

alert(title4);  // Menu
alert(width2);  // 100
alert(height2); // 200







let options3 = {
  title: "Menu"
};

let {width3 = prompt("width?"), title5 = prompt("title?")} = options;

alert(title5);  // Menu
alert(width3);  // (whatever the result of prompt is)







let options4 = {
  title: "Menu"
};

let {width: w1 = 100, height: h1 = 200, title6} = options;

alert(title6);  // Menu
alert(w1);      // 100
alert(h1);      // 200











let options5 = {
  title: "Menu",
  width: 100,
  height: 200
};

// only extract title as a variable
let { title7 } = options;

alert(title7); // Menu








let options6 = {
  title: "Menu",
  height: 200,
  width: 100
};

// title = property named title
// rest = object with the rest of properties
let {title8, ...rest1} = options;

// now title="Menu", rest={height: 200, width: 100}
alert(rest.height);  // 200
alert(rest.width);   // 100





// In the examples above variables were declared right in the assignment: let {…} = {…}. Of course, we could use existing variables too, without let. But there’s a catch.

// This won’t work:
// let title, width, height;

// // error in this line
// {title, width, height} = {title: "Menu", width: 200, height: 100};




{
  // a code block
  let message = "Hello";
  // ...
  alert( message );
}






// So here JavaScript assumes that we have a code block, that’s why there’s an error. We want destructuring instead.

// To show JavaScript that it’s not a code block, we can wrap the expression in parentheses (...):

let title9, width4, height4;

// okay now
({title9, width4, height4} = {title: "Menu", width: 200, height: 100});

alert( title ); // Menu







let options7 = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true
};

// destructuring assignment split in multiple lines for clarity
let {
  size: { // put size here
    width5,
    height5
  },
  items: [item1, item2], // assign items here
  title10 = "Menu" // not present in the object (default value is used)
} = options;

alert(title10);  // Menu
alert(width5);  // 100
alert(height5); // 200
alert(item1);  // Cake
alert(item2);  // Donut







function showMenu(title = "Untitled", width = 200, height = 100, items = []) {
  // ...
}






// undefined where default values are fine
showMenu("My Menu", undefined, undefined, ["Item1", "Item2"])







// we pass object to function
let options8 = {
  title: "My menu",
  items: ["Item1", "Item2"]
};

// ...and it immediately expands it to variables
function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
  // title, items – taken from options,
  // width, height – defaults used
  alert( `${title} ${width} ${height}` ); // My Menu 200 100
  alert( items ); // Item1, Item2
}

showMenu(options8);







let options9 = {
  title: "My menu",
  items: ["Item1", "Item2"]
};

function showMenu({
  title = "Untitled",
  width: w = 100,  // width goes to w
  height: h = 200, // height goes to h
  items: [item1, item2] // items first element goes to item1, second to item2
}) {
  alert( `${title} ${w} ${h}` ); // My Menu 100 200
  alert( item1 ); // Item1
  alert( item2 ); // Item2
}

showMenu(options9);





// function({
//   incomingProperty: varName = defaultValue
//   ...
// })





showMenu({}); // ok, all values are default

showMenu(); // this would give an error






function showMenu({ title = "Menu", width = 100, height = 200 } = {}) {
  alert( `${title} ${width} ${height}` );
}

showMenu(); // Menu 100 200





let {prop : varName = defaultValue, ...rest2} = object







let [item4 = defaultValue, item5, ...rest3] = array





// task 1
let user4 = {
  name: "John",
  years: 30
};

let {name8, years: age, isAdmin = false} = user;

alert( name8 ); // John
alert( age ); // 30
alert( isAdmin ); // false




// task2



function topSalary(salaries) {

  let maxSalary = 0;
  let maxName = null;

  for(const [name, salary] of Object.entries(salaries)) {
    if (maxSalary < salary) {
      maxSalary = salary;
      maxName = name;
    }
  }

  return maxName;
}




