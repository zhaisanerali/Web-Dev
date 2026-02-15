let arr = new Array();
let arr1 = [];



let fruits = ["Apple", "Orange", "Plum"];







let fruits1 = ["Apple", "Orange", "Plum"];

alert( fruits1[0] ); // Apple
alert( fruits1[1] ); // Orange
alert( fruits1[2] ); // Plum









fruits[2] = 'Pear'; // now ["Apple", "Orange", "Pear"]





fruits[3] = 'Lemon'; // now ["Apple", "Orange", "Pear", "Lemon"]







let fruits = ["Apple", "Orange", "Plum"];

alert( fruits.length ); // 3







let fruits = ["Apple", "Orange", "Plum"];

alert( fruits ); // Apple,Orange,Plum







// mix of values
let arr2 = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];

// get the object at index 1 and then show its name
alert( arr2[1].name ); // John

// get the function at index 3 and run it
arr2[3](); // hello






let fruits = [
  "Apple",
  "Orange",
  "Plum",
];








let fruits = ["Apple", "Orange", "Plum"];

alert( fruits[fruits.length-1] ); // Plum










let fruits = ["Apple", "Orange", "Plum"];

// same as fruits[fruits.length-1]
alert( fruits.at(-1) ); // Plum







let fruits = ["Apple", "Orange", "Pear"];

alert( fruits.pop() ); // remove "Pear" and alert it

alert( fruits ); // Apple, Orange








let fruits = ["Apple", "Orange"];

fruits.push("Pear");

alert( fruits ); // Apple, Orange, Pear








let fruits = ["Apple", "Orange", "Pear"];

alert( fruits.shift() ); // remove Apple and alert it

alert( fruits ); // Orange, Pear








let fruits = ["Orange", "Pear"];

fruits.unshift('Apple');

alert( fruits ); // Apple, Orange, Pear









let fruits = ["Apple"];

fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");

// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
alert( fruits );








let fruits = ["Banana"]

let arr3 = fruits; // copy by reference (two variables reference the same array)

alert( arr3 === fruits ); // true

arr3.push("Pear"); // modify the array by reference

alert( fruits ); // Banana, Pear - 2 items now







let fruits = []; // make an array

fruits[99999] = 5; // assign a property with the index far greater than its length

fruits.age = 25; // create a property with an arbitrary name






fruits.shift(); // take 1 element from the start






fruits.pop(); // take 1 element from the end







let arr4 = ["Apple", "Orange", "Pear"];

for (let i = 0; i < arr4.length; i++) {
  alert( arr4[i] );
}







let fruits = ["Apple", "Orange", "Plum"];

// iterates over array elements
for (let fruit of fruits) {
  alert( fruit );
}






let arr5 = ["Apple", "Orange", "Pear"];

for (let key in arr5) {
  alert( arr5[key] ); // Apple, Orange, Pear
}












let fruits = [];
fruits[123] = "Apple";

alert( fruits.length ); // 124









let arr6 = [1, 2, 3, 4, 5];

arr6.length = 2; // truncate to 2 elements
alert( arr6 ); // [1, 2]

arr6.length = 5; // return length back
alert( arr6[3] ); // undefined: the values do not return








let arr7 = new Array("Apple", "Pear", "etc");







let arr8 = new Array(2); // will it create an array of [2] ?

alert( arr8[0] ); // undefined! no elements.

alert( arr8.length ); // length 2





let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

alert( matrix[0][1] ); // 2, the second value of the first inner array








let arr9 = [1, 2, 3];

alert( arr9 ); // 1,2,3
alert( String(arr9) === '1,2,3' ); // true







alert( [] + 1 ); // "1"
alert( [1] + 1 ); // "11"
alert( [1,2] + 1 ); // "1,21"




alert( "" + 1 ); // "1"
alert( "1" + 1 ); // "11"
alert( "1,2" + 1 ); // "1,21"





alert( [] == [] ); // false
alert( [0] == [0] ); // false





alert( 0 == [] ); // true

alert('0' == [] ); // false






// after [] was converted to ''
alert( 0 == '' ); // true, as '' becomes converted to number 0

alert('0' == '' ); // false, no type conversion, different strings







// square brackets (usual)
let arr10 = [item1, item2];

// new Array (exceptionally rare)
let arr11 = new Array(item1, item2);








// task1
let fruits = ["Apples", "Pear", "Orange"];

let shoppingCart = fruits;

shoppingCart.push("Banana");

alert( fruits.length ); // 4






// task2
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
alert( styles.shift() );
styles.unshift("Rap", "Reggae");







// task3
let arr13 = ["a", "b"];

arr13.push(function() {
  alert( this );
})

arr13[2](); // a,b,function(){...}




// task4
function sumInput() {

  let numbers = [];

  while (true) {

    let value = prompt("A number please?", 0);

    // should we cancel?
    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

alert( sumInput() );




// task 5

// Starting from -1:
-1
-1 + 2
-1 + 2 + 3
-1 + 2 + 3 + (-9)
-1 + 2 + 3 + (-9) + 11

// Starting from 2:
2
2 + 3
2 + 3 + (-9)
2 + 3 + (-9) + 11

// Starting from 3:
3
3 + (-9)
3 + (-9) + 11

// Starting from -9
-9
-9 + 11

// Starting from 11
11














function getMaxSubSum(arr) {
  let maxSum = 0; // if we take no elements, zero will be returned

  for (let i = 0; i < arr.length; i++) {
    let sumFixedStart = 0;
    for (let j = i; j < arr.length; j++) {
      sumFixedStart += arr[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }

  return maxSum;
}

alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100






