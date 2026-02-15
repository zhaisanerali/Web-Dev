let arr = ["I", "go", "home"];

delete arr[1]; // remove "go"

alert( arr[1] ); // undefined

// now arr = ["I",  , "home"];
alert( arr.length ); // 3





arr1.splice(start[ deleteCount, elem1,  elemN])







let arr1 = ["I", "study", "JavaScript"];

arr1.splice(1, 1); // from index 1 remove 1 element

alert( arr1 ); // ["I", "JavaScript"]





let arr2 = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
arr2.splice(0, 3, "Let's", "dance");

alert( arr2 ) // now ["Let's", "dance", "right", "now"]









let arr3 = ["I", "study", "JavaScript", "right", "now"];

// remove 2 first elements
let removed = arr3.splice(0, 2);

alert( removed ); // "I", "study" <-- array of removed elements








let arr4 = ["I", "study", "JavaScript"];

// from index 2
// delete 0
// then insert "complex" and "language"
arr4.splice(2, 0, "complex", "language");

alert( arr4 ); // "I", "study", "complex", "language", "JavaScript"






let arr5 = [1, 2, 5];

// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
arr5.splice(-1, 0, 3, 4);

alert( arr5 ); // 1,2,3,4,5





arr.slice([start], [end])





let arr6 = ["t", "e", "s", "t"];

alert( arr6.slice(1, 3) ); // e,s (copy from 1 to 3)

alert( arr6.slice(-2) ); // s,t (copy from -2 till the end)





arr.concat(arg1, arg2)






let arr7 = [1, 2];

// create an array from: arr and [3,4]
alert( arr7.concat([3, 4]) ); // 1,2,3,4

// create an array from: arr and [3,4] and [5,6]
alert( arr7.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// create an array from: arr and [3,4], then add values 5 and 6
alert( arr7.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6






let arr8 = [1, 2];

let arrayLike = {
  0: "something",
  length: 1
};

alert( arr8.concat(arrayLike) ); // 1,2,[object Object]








let arr9 = [1, 2];

let arrayLike1 = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};

alert( arr9.concat(arrayLike1) ); // 1,2,something,else








arr.forEach(function(item, index, array) {
  // ... do something with an item
});





// for each element call alert
["Bilbo", "Gandalf", "Nazgul"].forEach(alert);





["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  alert(`${item} is at index ${index} in ${array}`);
});






let arr10 = [1, 0, false];

alert( arr10.indexOf(0) ); // 1
alert( arr10.indexOf(false) ); // 2
alert( arr10.indexOf(null) ); // -1

alert( arr10.includes(1) ); // true






let fruits = ['Apple', 'Orange', 'Apple']

alert( fruits.indexOf('Apple') ); // 0 (first Apple)
alert( fruits.lastIndexOf('Apple') ); // 2 (last Apple)








const arr11 = [NaN];
alert( arr11.indexOf(NaN) ); // -1 (wrong, should be 0)
alert( arr11.includes(NaN) );// true (correct)







let result = arr.find(function(item, index, array) {
  // if true is returned, item is returned and iteration is stopped
  // for falsy scenario returns undefined
});





let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let user = users.find(item => item.id == 1);

alert(user.name); // John







let users1 = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"},
  {id: 4, name: "John"}
];

// Find the index of the first John
alert(users1.findIndex(user1 => user1.name == 'John')); // 0

// Find the index of the last John
alert(users1.findLastIndex(user1 => user1.name == 'John')); // 3









let results = arr.filter(function(item, index, array) {
  // if true item is pushed to results and the iteration continues
  // returns empty array if nothing found
});







let users2 = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

// returns array of the first two users
let someUsers = users2.filter(item => item.id < 3);

alert(someUsers.length); // 2






let result1 = arr.map(function(item, index, array) {
  // returns the new value instead of item
});






let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6









let arr12 = [ 1, 2, 15 ];

// the method reorders the content of arr
arr12.sort();

alert( arr12 );  // 1, 15, 2







function compare(a, b) {
  if (a > b) return 1; // if the first value is greater than the second
  if (a == b) return 0; // if values are equal
  if (a < b) return -1; // if the first value is less than the second
}








function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let arr13 = [ 1, 2, 15 ];

arr13.sort(compareNumeric);

alert(arr13);  // 1, 2, 15







[1, -2, 15, 2, 0, 8].sort(function(a, b) {
  alert( a + " <> " + b );
  return a - b;
});







let arr14 = [ 1, 2, 15 ];

arr14.sort(function(a, b) { return a - b; });

alert(arr14);  // 1, 2, 15






arr.sort( (a, b) => a - b );








let countries = ['Österreich', 'Andorra', 'Vietnam'];

alert( countries.sort( (a, b) => a > b ? 1 : -1) ); // Andorra, Vietnam, Österreich (wrong)

alert( countries.sort( (a, b) => a.localeCompare(b) ) ); // Andorra,Österreich,Vietnam (correct!)









let arr15 = [1, 2, 3, 4, 5];
arr15.reverse();

alert( arr15 ); // 5,4,3,2,1









let names = 'Bilbo, Gandalf, Nazgul';

let arr16 = names.split(', ');

for (let name of arr16) {
  alert( `A message to ${name}.` ); // A message to Bilbo  (and other names)
}








let arr17 = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);

alert(arr17); // Bilbo, Gandalf




let str1 = "test";

alert( str1.split('') ); // t,e,s,t








let arr18 = ['Bilbo', 'Gandalf', 'Nazgul'];

let str2 = arr18.join(';'); // glue the array into a string using ;

alert( str2 ); // Bilbo;Gandalf;Nazgul






let value = arr.reduce(function(accumulator, item, index, array) {
  // ...
}, [initial]);





let arr20 = [1, 2, 3, 4, 5];

let result2 = arr20.reduce((sum, current) => sum + current, 0);

alert(result2); // 15










let arr21 = [1, 2, 3, 4, 5];

// removed initial value from reduce (no 0)
let result3 = arr21.reduce((sum, current) => sum + current);

alert( result3 ); // 15








let arr22 = [];

// Error: Reduce of empty array with no initial value
// if the initial value existed, reduce would return it for the empty arr.
arr22.reduce((sum, current) => sum + current);







alert(typeof {}); // object
alert(typeof []); // object (same)







alert(Array.isArray({})); // false

alert(Array.isArray([])); // true







arr.find(func, thisArg);
arr.filter(func, thisArg);
arr.map(func, thisArg);
// ...
// thisArg is the optional last argument







let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  }
};

let users3 = [
  {age: 16},
  {age: 20},
  {age: 23},
  {age: 30}
];

// find users, for who army.canJoin returns true
let soldiers = users3.filter(army.canJoin, army);

alert(soldiers.length); // 2
alert(soldiers[0].age); // 20
alert(soldiers[1].age); // 23





function arraysEqual(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}

alert( arraysEqual([1, 2], [1, 2])); // true






// task1
function camelize(str) {
  return str
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}







// task2
function filterRange(arr, a, b) {
  // added brackets around the expression for better readability
  return arr.filter(item => (a <= item && item <= b));
}

let arr25 = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)





// task3
function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    // remove if outside of the interval
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }

}

let arr26 = [5, 3, 8, 1];

filterRangeInPlace(arr26, 1, 4); // removed the numbers except from 1 to 4

alert( arr26 ); // [3, 1]





// task4
let arr27 = [5, 2, 1, -10, 8];

arr27.sort((a, b) => b - a);

alert( arr27 );






// task 5
function copySorted(arr) {
  return arr.slice().sort();
}

let arr28 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr28);

alert( sorted );
alert( arr28 );





// task6
function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {

    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}







// task7
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users4 = [ john, pete, mary ];

let names1 = users4.map(item => item.name);

alert( names1 ); // John, Pete, Mary





// task8
let john1 = { name: "John", surname: "Smith", id: 1 };
let pete1 = { name: "Pete", surname: "Hunt", id: 2 };
let mary1 = { name: "Mary", surname: "Key", id: 3 };

let users5 = [ john1, pete1, mary1 ];

let usersMapped = users5.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

alert( usersMapped[0].id ); // 1
alert( usersMapped[0].fullName ); // John Smith




// We can’t write like this:

// let usersMapped = users.map(user => {
//   fullName: `${user.name} ${user.surname}`,
//   id: user.id
// });


// Here JavaScript would treat { as the start of function body, not the start of the object. The workaround is to wrap them in the “normal” brackets:

// let usersMapped = users.map(user => ({
//   fullName: `${user.name} ${user.surname}`,
//   id: user.id
// }));






// task 9

function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}

let john2 = { name: "John", age: 25 };
let pete2 = { name: "Pete", age: 30 };
let mary2 = { name: "Mary", age: 28 };

let arr23 = [ pete2, john2, mary2 ];

sortByAge(arr23);

// now sorted is: [john, mary, pete]
alert(arr23[0].name); // John
alert(arr23[1].name); // Mary
alert(arr23[2].name); // Pete



// task10
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

let arr24 = [1, 2, 3];
shuffle(arr24);
alert(arr24);





function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

// counts of appearances for all possible permutations
let count = {
  '123': 0,
  '132': 0,
  '213': 0,
  '231': 0,
  '321': 0,
  '312': 0
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join('')]++;
}

// show counts of all possible permutations
for (let key in count) {
  alert(`${key}: ${count[key]}`);
}




function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

    // swap elements array[i] and array[j]
    // we use "destructuring assignment" syntax to achieve that
    // you'll find more details about that syntax in later chapters
    // same can be written as:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [array[i], array[j]] = [array[j], array[i]];
  }
}



function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// counts of appearances for all possible permutations
let count1 = {
  '123': 0,
  '132': 0,
  '213': 0,
  '231': 0,
  '321': 0,
  '312': 0
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join('')]++;
}

// show counts of all possible permutations
for (let key in count) {
  alert(`${key}: ${count[key]}`);
}





// task11
function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let john3 = { name: "John", age: 25 };
let pete3 = { name: "Pete", age: 30 };
let mary3 = { name: "Mary", age: 29 };

let arr29 = [ john3, pete3, mary3 ];

alert( getAverageAge(arr29) ); // 28




// task 12
function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O



// task13
function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
}




